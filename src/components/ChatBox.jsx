// src/components/ChatBox.jsx
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import io from 'socket.io-client';
import profileImage from '../assets/hamid.webp';

const socket = io('https://chat-backend-3xpu.onrender.com');

export function ChatBox() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('initial'); // initial -> chat
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on('chat_history', (history) => setMessages(history));
    socket.on('new_message', (msg) => setMessages((prev) => [...prev, msg]));
    return () => {
      socket.off('chat_history');
      socket.off('new_message');
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleUserInfoSubmit = (e) => {
    e.preventDefault();
    if (userInfo.name.trim() && userInfo.email.trim()) {
      setStep('chat');
    }
  };

  const sendMessage = () => {
    if (input.trim()) {
      const messageData = {
        from: 'user',
        text: input.trim(),
        name: userInfo.name,
        email: userInfo.email,
      };
      socket.emit('user_message', messageData);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 dark:border-blue-500"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
          </div>
          <span className="font-medium text-sm dark:text-gray-200">{t('chat.online')}</span>
        </button>
      ) : (
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border dark:border-gray-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
            <div className="flex items-center gap-2">
              <img
                src={profileImage}
                alt="Hamidreza"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-bold text-gray-800 dark:text-white">{t('chat.title')}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 p-4 flex flex-col space-y-4">
            {/* Step 1: User Info Form */}
            {step === 'initial' && (
              <form onSubmit={handleUserInfoSubmit} className="space-y-3">
                <h3 className="font-semibold text-gray-800 dark:text-white">{t('chat.welcome')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('chat.intro')}</p>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('chat.name')}
                  </label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    className="w-full px-3 py-2 border dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('chat.email')}
                  </label>
                  <input
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    className="w-full px-3 py-2 border dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                >
                  {t('chat.startChat')}
                </button>
              </form>
            )}

            {/* Step 2: Chat */}
            {step === 'chat' && (
              <>
                <div
                  className="flex-1 overflow-y-auto space-y-3 bg-gray-50/50 dark:bg-gray-900/50 p-2 rounded-lg"
                  style={{ maxHeight: '300px' }}
                >
                  {messages.length === 0 ? (
                    <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
                      {t('chat.noMessages')}
                    </div>
                  ) : (
                    messages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                            msg.from === 'user'
                              ? 'bg-blue-600 text-white rounded-tr-none'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-tl-none'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={sendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t('chat.placeholder')}
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:disabled:bg-blue-800 text-white rounded-xl transition-colors duration-300"
                    disabled={!input.trim()}
                  >
                    {t('chat.send')}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}