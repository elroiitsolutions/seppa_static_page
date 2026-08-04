"use client";

import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { SOCKET_URL, apiRequest } from '@/lib/api';
import { Users, MessageSquare, Send, Clock, User, LogIn, CheckCircle2 } from 'lucide-react';

export default function AgentDashboard() {
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  
  const [activeChats, setActiveChats] = useState<any[]>([]);
  const [queue, setQueue] = useState<any[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Record<string, any[]>>({});
  const [inputValue, setInputValue] = useState('');
  const [typingStatus, setTypingStatus] = useState<Record<string, boolean>>({});
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load token on mount
  useEffect(() => {
    const stored = localStorage.getItem('agent_token');
    if (stored) setToken(stored);
  }, []);

  // Socket Connection
  useEffect(() => {
    if (!token) return;

    const newSocket = io(`${SOCKET_URL}/agent`, {
      auth: { token },
      transports: ['websocket']
    });

    setSocket(newSocket);

    newSocket.on('connect', () => {
      setIsConnected(true);
      fetchQueue();
      fetchActiveChats(newSocket);
    });

    newSocket.on('disconnect', () => setIsConnected(false));
    newSocket.on('connect_error', (err) => {
      if (err.message.includes('Authentication')) {
        handleLogout();
      }
    });

    // Handle new chat assigned to this agent
    newSocket.on('agent:new_chat', (data) => {
      setActiveChats(prev => {
        if (prev.find(c => c.id === data.chat_id)) return prev;
        return [...prev, { id: data.chat_id, visitorId: data.visitorId }];
      });
      // Fetch history for this chat
      fetchChatHistory(data.chat_id, newSocket);
      // Auto-select the chat if the agent is not currently viewing any chat
      setSelectedChatId(currentId => currentId || data.chat_id);
    });

    // Handle incoming messages
    newSocket.on('chat:message', (data) => {
      setMessages(prev => {
        const chatMsgs = prev[data.chat_id] || [];
        return {
          ...prev,
          [data.chat_id]: [...chatMsgs, data]
        };
      });
    });

    // Queue updates (for hybrid routing)
    newSocket.on('handoff:queue_update', (data) => {
      if (data.action === 'added') {
        setQueue(prev => [...prev, { id: data.chatId, reason: data.reason }]);
      } else if (data.action === 'removed') {
        setQueue(prev => prev.filter(q => q.id !== data.chatId));
      }
    });

    // Typing indicators
    newSocket.on('typing:start', (data) => {
      setTypingStatus(prev => ({ ...prev, [data.chat_id]: true }));
    });
    newSocket.on('typing:stop', (data) => {
      setTypingStatus(prev => ({ ...prev, [data.chat_id]: false }));
    });

    // Handle chat closure (e.g., auto-closed due to inactivity)
    newSocket.on('chat:closed', (data) => {
      setActiveChats(prev => prev.filter(c => c.id !== data.chat_id));
      setQueue(prev => prev.filter(q => q.id !== data.chat_id));
      setSelectedChatId(currentId => currentId === data.chat_id ? null : currentId);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [token]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, selectedChatId]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      const jwt = data.data.accessToken;
      setToken(jwt);
      localStorage.setItem('agent_token', jwt);
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('agent_token');
    setToken(null);
    setSocket(null);
    setActiveChats([]);
    setQueue([]);
    setMessages({});
    setSelectedChatId(null);
  };

  const fetchQueue = async () => {
    try {
      const data = await apiRequest('/handoff/queue');
      setQueue(data.data || []);
    } catch (err) {
      console.error('Failed to fetch queue', err);
    }
  };

  const fetchActiveChats = async (activeSocket: Socket) => {
    try {
      const res = await apiRequest('/chats?status=human_active');
      // For each active chat, format it for the UI and fetch history
      if (res.data && res.data.length > 0) {
        setActiveChats(res.data.map((c: any) => ({ id: c.id, visitorId: c.visitor_id })));
        if (activeSocket) {
          res.data.forEach((c: any) => fetchChatHistory(c.id, activeSocket));
        }
      }
    } catch (err) {
      console.error('Failed to fetch active chats', err);
    }
  };

  const fetchChatHistory = async (chatId: string, activeSocket: Socket) => {
    activeSocket.emit('agent:join', { chat_id: chatId }, (res: any) => {
      if (res.success && res.data && res.data.messages) {
        // Reverse because we want oldest first for rendering
        const sorted = res.data.messages.sort((a: any, b: any) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        setMessages(prev => ({ ...prev, [chatId]: sorted }));
      }
    });
  };

  const handleAcceptHandoff = (chatId: string) => {
    if (!socket) return;
    socket.emit('agent:accept_handoff', { chat_id: chatId }, (res: any) => {
      if (res.success) {
        // Chat will now come via agent:new_chat event
        setQueue(prev => prev.filter(q => q.id !== chatId));
        setSelectedChatId(chatId); // Auto-select the accepted chat
      } else {
        alert('Failed to accept chat: ' + res.error);
      }
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !socket || !selectedChatId) return;

    const messageContent = inputValue.trim();
    setInputValue('');

    // Stop typing immediately when sending
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    socket.emit('typing:stop', { chat_id: selectedChatId });

    // Removed optimistic update to prevent duplicate messages, as the server broadcasts it back.

    socket.emit('agent:message', { chat_id: selectedChatId, content: messageContent });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    
    if (socket && selectedChatId) {
      socket.emit('typing:start', { chat_id: selectedChatId });
      
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(() => {
        socket.emit('typing:stop', { chat_id: selectedChatId });
      }, 1500);
    }
  };

  if (!token) {
    return (
      <div className="fixed inset-0 z-[100] bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#20B2AA] rounded-full flex items-center justify-center">
              <Users className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Agent Login</h1>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#20B2AA] focus:border-transparent outline-none"
                placeholder="admin@seppa.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#20B2AA] focus:border-transparent outline-none"
                placeholder="••••••••"
                required
              />
            </div>
            
            {error && <p className="text-red-500 text-sm">{error}</p>}
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-2.5 bg-[#20B2AA] hover:bg-[#0f8c85] text-white rounded-lg font-medium flex justify-center items-center gap-2 transition-colors"
            >
              {loading ? <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span> : <><LogIn size={18} /> Sign In</>}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-2">
            <Users size={20} className="text-[#20B2AA]" />
            <h2 className="font-bold text-gray-800">Agent Dashboard</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <button onClick={handleLogout} className="text-xs text-gray-500 hover:text-gray-800 font-medium">Logout</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Handoff Queue */}
          <div className="p-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Clock size={14} /> Waiting Queue ({queue.length})
            </h3>
            <div className="space-y-2">
              {queue.length === 0 ? (
                <p className="text-sm text-gray-500 italic">No visitors waiting.</p>
              ) : (
                queue.map(q => (
                  <div key={q.id} className="bg-orange-50 border border-orange-100 p-3 rounded-xl">
                    <p className="text-sm font-medium text-gray-800 mb-1">Visitor waiting</p>
                    {q.reason && <p className="text-xs text-gray-600 mb-2 truncate">"{q.reason}"</p>}
                    <button 
                      onClick={() => handleAcceptHandoff(q.id)}
                      className="w-full py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1 transition-colors"
                    >
                      <CheckCircle2 size={14} /> Accept Chat
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Active Chats */}
          <div className="p-4 pt-0">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <MessageSquare size={14} /> My Active Chats ({activeChats.length})
            </h3>
            <div className="space-y-2">
              {activeChats.length === 0 ? (
                <p className="text-sm text-gray-500 italic">No active chats.</p>
              ) : (
                activeChats.map(c => (
                  <button 
                    key={c.id}
                    onClick={() => setSelectedChatId(c.id)}
                    className={`w-full text-left p-3 rounded-xl transition-colors border ${selectedChatId === c.id ? 'bg-[#20B2AA]/10 border-[#20B2AA]/30 shadow-sm' : 'bg-white border-gray-100 hover:bg-gray-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User size={14} className="text-gray-500" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-sm font-medium text-gray-800 truncate">Visitor {c.visitorId?.substring(0,6)}...</p>
                        <p className="text-xs text-gray-500 truncate">Active session</p>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {!selectedChatId ? (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 bg-gray-50">
            <MessageSquare size={48} className="mb-4 opacity-20" />
            <p className="text-lg font-medium">Select a chat to start messaging</p>
          </div>
        ) : (
          <>
            {/* Chat Header */}
            <div className="h-16 border-b border-gray-100 flex items-center px-6 bg-white shadow-sm z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <User size={18} className="text-gray-600" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-800">
                    Visitor {activeChats.find(c => c.id === selectedChatId)?.visitorId?.substring(0,8)}
                  </h2>
                  <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full block"></span> Active
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50 flex flex-col gap-4">
              {(messages[selectedChatId] || []).map((msg, idx) => {
                const isAgent = msg.sender_type === 'agent';
                const isSystem = msg.sender_type === 'system';
                const isAI = msg.sender_type === 'ai';

                if (isSystem) {
                  return (
                    <div key={idx} className="flex justify-center my-4">
                      <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                        {msg.content}
                      </span>
                    </div>
                  );
                }

                return (
                  <div key={idx} className={`flex ${isAgent ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-3 max-w-[70%] ${isAgent ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${isAgent ? 'bg-[#20B2AA] text-white' : isAI ? 'bg-indigo-500 text-white' : 'bg-gray-800 text-white'}`}>
                        {isAgent ? <Users size={14} /> : isAI ? 'AI' : <User size={14} />}
                      </div>
                      <div className={`p-4 rounded-2xl text-sm shadow-sm ${
                        isAgent 
                          ? 'bg-[#20B2AA] text-white rounded-tr-sm' 
                          : isAI 
                            ? 'bg-indigo-50 text-indigo-900 border border-indigo-100 rounded-tl-sm'
                            : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm'
                      }`}>
                        {msg.content}
                        <div className={`text-[10px] mt-1 text-right ${isAgent ? 'text-[#20B2AA]-200' : 'text-gray-400'}`}>
                          {new Date(msg.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Typing Indicator */}
              {selectedChatId && typingStatus[selectedChatId] && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[70%] flex-row">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-gray-800 text-white">
                      <User size={14} />
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-gray-100 rounded-tl-sm shadow-sm flex items-center gap-1.5 h-[50px]">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form onSubmit={handleSendMessage} className="flex gap-3 max-w-4xl mx-auto">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type your message to the visitor..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#20B2AA]/50 focus:border-[#20B2AA] transition-all"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="px-6 py-3 bg-[#20B2AA] text-white rounded-xl hover:bg-[#0f8c85] transition-colors disabled:opacity-50 flex items-center gap-2 font-medium"
                >
                  <span>Send</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
