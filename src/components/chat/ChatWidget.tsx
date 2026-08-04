"use client";

import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { SOCKET_URL } from '@/lib/api';

// Simple UUID generator without external dependency
function generateId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

type Message = {
  id: string;
  sender_type: 'visitor' | 'ai' | 'agent' | 'system';
  content: string;
  isStreaming?: boolean;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [visitorId, setVisitorId] = useState<string>('');
  const [chatId, setChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Initialize socket connection
  useEffect(() => {
    // Get or create visitor ID
    let vid = localStorage.getItem('seppa_visitor_id');
    if (!vid) {
      vid = generateId();
      localStorage.setItem('seppa_visitor_id', vid);
    }
    setVisitorId(vid);

    // Get active chat ID if exists
    const storedChatId = localStorage.getItem('seppa_chat_id');

    // Connect to /visitor namespace
    const newSocket = io(`${SOCKET_URL}/visitor`, {
      auth: { token: vid },
      transports: ['websocket', 'polling']
    });

    setSocket(newSocket);

    newSocket.on('connect', () => {
      setIsConnected(true);
      if (storedChatId) {
        setChatId(storedChatId);
        newSocket.emit('chat:history', { chat_id: storedChatId }, (res: any) => {
          if (res.success && res.data) {
             const sorted = res.data.sort((a: any, b: any) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
             setMessages(sorted.map((m: any) => ({
               id: m.id,
               sender_type: m.sender_type,
               content: m.content,
             })));
          }
        });
      }
    });

    newSocket.on('disconnect', () => setIsConnected(false));

    newSocket.on('chat:message', (data) => {
      setMessages(prev => [...prev, { id: data.id || generateId(), sender_type: data.sender_type, content: data.content }]);
    });

    // Handle Streaming AI responses
    newSocket.on('chat:stream', (data) => {
      setMessages(prev => {
        const lastMsg = prev[prev.length - 1];
        if (lastMsg && lastMsg.sender_type === 'ai' && lastMsg.isStreaming) {
          // Append to existing streaming message
          return [
            ...prev.slice(0, -1),
            { ...lastMsg, content: lastMsg.content + data.chunk }
          ];
        } else {
          // Create new streaming message
          return [...prev, { id: 'stream-ai', sender_type: 'ai', content: data.chunk, isStreaming: true }];
        }
      });
    });

    newSocket.on('chat:streamEnd', (data) => {
      setMessages(prev => {
        const lastMsg = prev[prev.length - 1];
        if (lastMsg && lastMsg.sender_type === 'ai' && lastMsg.isStreaming) {
          return [
            ...prev.slice(0, -1),
            { ...lastMsg, isStreaming: false }
          ];
        }
        return prev;
      });
    });

    // Agent joined event
    newSocket.on('agent:join', (data) => {
      setMessages(prev => [...prev, { id: generateId(), sender_type: 'system', content: `Agent ${data.agent_name} has joined the chat.` }]);
    });

    newSocket.on('typing:start', () => setIsTyping(true));
    newSocket.on('typing:stop', () => setIsTyping(false));

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || !socket || !isConnected) return;

    const messageContent = inputValue.trim();
    setInputValue('');
    
    // Stop typing immediately when sending
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    socket.emit('typing:stop', { chat_id: chatId });

    // Removed optimistic update to prevent duplicate messages, as the server broadcasts it back.

    if (!chatId) {
      // Need to start a chat first
      socket.emit('chat:start', { visitor_id: visitorId }, (response: any) => {
        if (response.success) {
          const newChatId = response.data.id;
          setChatId(newChatId);
          localStorage.setItem('seppa_chat_id', newChatId);
          // Now send the message
          socket.emit('chat:message', { chat_id: newChatId, content: messageContent });
        }
      });
    } else {
      // Chat already exists
      socket.emit('chat:message', { chat_id: chatId, content: messageContent });
    }
  };

  const handleEndChat = () => {
    if (!socket || !chatId) return;
    
    if (confirm('Are you sure you want to end this chat?')) {
      socket.emit('chat:close', { chat_id: chatId, reason: 'visitor_closed' }, (res: any) => {
        if (res.success) {
          localStorage.removeItem('seppa_chat_id');
          setChatId(null);
          setMessages([{ 
            id: generateId(), 
            sender_type: 'system', 
            content: 'Chat ended. Send a message to start a new chat.' 
          }]);
        }
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    
    if (socket && chatId) {
      socket.emit('typing:start', { chat_id: chatId });
      
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(() => {
        socket.emit('typing:stop', { chat_id: chatId });
      }, 1500);
    }
  };

  return (
    <div className="relative">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-[110%] right-0 mb-2 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 z-[60]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#20B2AA] to-[#0f8c85] p-4 text-white flex justify-between items-center shadow-md">
            <div>
              <h3 className="font-bold text-lg leading-tight">Seppa Support</h3>
              <p className="text-xs opacity-90">
                {isConnected ? '🟢 Online' : '🔴 Disconnected'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {chatId && (
                <button 
                  onClick={handleEndChat}
                  title="End current chat and start a new one"
                  className="text-xs font-medium px-2 py-1 bg-white/20 hover:bg-white/30 rounded border border-white/20 transition-colors"
                >
                  End Chat
                </button>
              )}
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-3">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  <Bot size={32} className="text-[#20B2AA]" />
                </div>
                <p className="text-sm text-center">Hello! How can we help you today?<br/>(Type "human" to test handoff)</p>
              </div>
            ) : (
              messages.map((msg, idx) => {
                const isVisitor = msg.sender_type === 'visitor';
                const isSystem = msg.sender_type === 'system';

                if (isSystem) {
                  return (
                    <div key={idx} className="flex justify-center my-2">
                      <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                        {msg.content}
                      </span>
                    </div>
                  );
                }

                return (
                  <div key={idx} className={`flex ${isVisitor ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-2 max-w-[80%] ${isVisitor ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isVisitor ? 'bg-gray-800 text-white' : 'bg-[#20B2AA] text-white'}`}>
                        {isVisitor ? <User size={16} /> : <Bot size={16} />}
                      </div>
                      <div className={`p-3 rounded-2xl text-sm ${
                        isVisitor 
                          ? 'bg-gray-800 text-white rounded-tr-sm' 
                          : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-sm'
                      }`}>
                        {msg.content}
                        {msg.isStreaming && <span className="inline-block ml-1 w-2 h-4 bg-[#20B2AA] animate-pulse align-middle" />}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[80%] flex-row">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#20B2AA] text-white">
                    <User size={16} />
                  </div>
                  <div className="p-3 rounded-2xl bg-white shadow-sm border border-gray-100 rounded-tl-sm flex items-center gap-1.5 h-[42px]">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={isConnected ? "Type a message..." : "Connecting..."}
              disabled={!isConnected}
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#20B2AA]/50 transition-all disabled:opacity-50"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim() || !isConnected}
              className="p-2 bg-[#20B2AA] text-white rounded-full hover:bg-[#0f8c85] transition-colors disabled:opacity-50 disabled:hover:bg-[#20B2AA] flex-shrink-0"
            >
              <Send size={18} className="ml-0.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        suppressHydrationWarning={true}
        className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#20B2AA] to-[#0f8c85] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 relative z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
