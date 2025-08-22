// src/utils/socket.js
import { io } from 'socket.io-client';

let socket;

export const getSocket = () => {
  if (!socket) {
    socket = io('https://chat-backend-3xpu.onrender.com', {
      auth: { sessionId: getOrCreateSessionId() },
      withCredentials: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      timeout: 15000
    });

    socket.on('connect', () => console.log('✅ Socket connected:', socket.id));
    socket.on('connect_error', (err) => console.log('❌ Connect error:', err?.message || err));
    socket.on('disconnect', (reason) => console.log('🔌 Disconnected:', reason));
  }

  if (socket.disconnected) {
    try { socket.connect(); } catch {}
  }

  return socket;
};

const getOrCreateSessionId = () => {
  const key = 'chatSessionId';
  let sessionId = localStorage.getItem(key);
  if (!sessionId) {
    sessionId = 'chat-' + Math.random().toString(36).slice(2, 11);
    localStorage.setItem(key, sessionId);
  }
  return sessionId;
};