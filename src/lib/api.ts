export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';
export const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:4000';

/**
 * Helper to make API requests with automatic JSON parsing and error handling.
 */
export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const headers = new Headers(options.headers);
  if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  // Get token from localStorage if available (for Agent Dashboard)
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('agent_token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const contentType = response.headers.get('content-type');
  const isJson = contentType && contentType.includes('application/json');
  let data: any = null;
  const rawText = await response.text();
  if (rawText && rawText.trim()) {
    if (isJson) {
      try {
        data = JSON.parse(rawText);
      } catch {
        data = rawText;
      }
    } else {
      data = rawText;
    }
  }

  if (!response.ok) {
    const message = (data && data.error && data.error.message) || data || response.statusText;
    throw new Error(message);
  }

  return data;
}
