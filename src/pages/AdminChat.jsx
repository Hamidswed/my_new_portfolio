// src/pages/AdminChat.jsx
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getRelativeTime } from '../utils/timeUtils';
import io from 'socket.io-client';

const token = localStorage.getItem('adminToken');
const socket = io('https://chat-backend-3xpu.onrender.com', {
  auth: { token, isAdmin: true }
});

export default function AdminChat() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [threadMessages, setThreadMessages] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!token) navigate('/admin-login');

    // دریافت لیست چت‌های موجود
    socket.on('admin_recent_chats', (chats) => {
      console.log('📋 Received existing chats:', chats);
      setConversations(chats);
      setIsLoading(false);
      
      // اگر چت فعالی انتخاب نشده و چت‌هایی وجود دارند، اولین چت را انتخاب کن
      if (!activeSessionId && chats.length > 0) {
        setActiveSessionId(chats[0].sessionId);
      }
    });

    // دریافت پیام جدید از کاربر
    socket.on('admin_new_message', (msg) => {
      console.log('📨 New message received:', msg);
      setConversations(prev => {
        const existingIndex = prev.findIndex(c => c.sessionId === msg.sessionId);
        if (existingIndex !== -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            lastMessage: msg.text,
            timestamp: msg.timestamp
          };
          return updated.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        }
        return [
          {
            sessionId: msg.sessionId,
            name: msg.name || 'Unknown',
            email: msg.email || 'Unknown',
            lastMessage: msg.text,
            timestamp: msg.timestamp,
            messageCount: 1
          },
          ...prev
        ];
      });

      // اگر این گفتگو فعال است، پیام به رشته پیام‌ها اضافه شود
      if (msg.sessionId === activeSessionId) {
        setThreadMessages(prev => [...prev, { from: 'user', text: msg.text, timestamp: msg.timestamp }]);
      }
    });

    // آپدیت چت بعد از پاسخ ادمین
    socket.on('admin_chats_update', (update) => {
      console.log('🔄 Chat updated:', update);
      setConversations(prev => {
        const existingIndex = prev.findIndex(c => c.sessionId === update.sessionId);
        if (existingIndex !== -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            lastMessage: update.lastMessage,
            timestamp: update.timestamp
          };
          return updated.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        }
        return prev;
      });

      if (update.sessionId === activeSessionId) {
        setThreadMessages(prev => [...prev, { from: 'admin', text: update.lastMessage, timestamp: update.timestamp }]);
      }
    });

    // دریافت تاریخچه یک گفتگو
    socket.on('admin_thread_history', ({ sessionId, history }) => {
      console.log(`📖 Thread history for ${sessionId}:`, history);
      if (sessionId === activeSessionId) {
        setThreadMessages(history);
      }
    });

    return () => {
      socket.off('admin_recent_chats');
      socket.off('admin_new_message');
      socket.off('admin_chats_update');
      socket.off('admin_thread_history');
    };
  }, [navigate, activeSessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [threadMessages]);

  useEffect(() => {
    // وقتی گفتگو عوض شد، تاریخچه آن را از سرور بخواه
    if (activeSessionId) {
      console.log(`🔄 Switching to session: ${activeSessionId}`);
      socket.emit('admin_get_thread', { sessionId: activeSessionId });
    }
  }, [activeSessionId]);

  const handleReply = () => {
    if (!replyText.trim() || !activeSessionId) return;
    const trimmed = replyText.trim();
    console.log(`📤 Sending reply to ${activeSessionId}:`, trimmed);
    socket.emit('admin_reply', {
      sessionId: activeSessionId,
      text: trimmed
    });
    setReplyText('');
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    socket.disconnect();
    navigate('/admin-login');
  };

  const activeConversation = conversations.find(c => c.sessionId === activeSessionId) || null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">💬 {t('admin.chatPanel')}</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm"
        >
          {t('admin.logout')}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 border-b dark:border-gray-700">
            <h2 className="font-semibold">{t('admin.receivedMessages')}</h2>
            {isLoading && (
              <div className="text-sm text-gray-500 mt-1">در حال بارگذاری چت‌ها...</div>
            )}
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
            {conversations.length === 0 ? (
              <p className="text-center py-8 text-gray-500">
                {isLoading ? 'در حال بارگذاری...' : t('admin.noMessages')}
              </p>
            ) : (
              conversations.map((c, idx) => (
                <div
                  key={idx}
                  className={`p-4 border-b dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                    activeSessionId === c.sessionId ? 'bg-blue-50 dark:bg-blue-900/30' : ''
                  }`}
                  onClick={() => setActiveSessionId(c.sessionId)}
                >
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{c.name}</span>
                    <span>{c.timestamp ? getRelativeTime(c.timestamp, t) : ''}</span>
                  </div>
                  <p className="mt-1 text-sm truncate break-words">{c.lastMessage}</p>
                  {c.messageCount > 1 && (
                    <div className="text-xs text-gray-400 mt-1">
                      {c.messageCount} پیام
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col">
          {activeConversation ? (
            <>
              <div className="p-4 border-b dark:border-gray-700">
                <h3 className="font-semibold">
                  {t('admin.replyTo')} {activeConversation.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{activeConversation.email}</p>
              </div>
              <div className="p-4 flex-1 flex flex-col space-y-4 overflow-y-auto" style={{ maxHeight: '60vh' }}>
                {threadMessages.length === 0 ? (
                  <div className="text-gray-500 text-sm">در حال بارگذاری تاریخچه...</div>
                ) : (
                  threadMessages.map((m, i) => (
                    <div key={i} className={`flex ${m.from === 'user' ? 'justify-start' : 'justify-end'}`}>
                      <div className="flex flex-col">
                        <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm break-words ${m.from === 'user' ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-tl-none' : 'bg-blue-600 text-white rounded-tr-none'}`}>
                          {m.text}
                        </div>
                        {/* نمایش زمان زیر هر پیام */}
                        {m.timestamp && (
                          <div className={`text-xs text-gray-500 dark:text-gray-400 mt-1 px-1 ${
                            m.from === 'user' ? 'text-left' : 'text-right'
                          }`}>
                            {getRelativeTime(m.timestamp, t)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-4 border-t dark:border-gray-700 flex items-center gap-3">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder={t('admin.typeReply')}
                  className="flex-1 p-3 border dark:bg-gray-700 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
                <button
                  onClick={handleReply}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  {t('admin.sendReply')}
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              {t('admin.selectMessage')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}