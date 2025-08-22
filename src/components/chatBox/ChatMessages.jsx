// src/components/ChatBox/ChatMessages.jsx
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { getSocket } from '../../utils/socket';
import PropTypes from 'prop-types';

export function ChatMessages({ messages, setMessages }) {
  const { t, i18n } = useTranslation();
  const messagesEndRef = useRef(null);
  

  useEffect(() => {
    const socket = getSocket();

    const onHistory = (history) => {
      if (Array.isArray(history) && history.length > 0) {
        setMessages(history);
      } else {
        setMessages(prev => (prev.length === 0 ? [{ from: 'admin', text: t('chat.welcomeMessage') }] : prev));
      }
    };

    const onNewMessage = (msg) => {
      setMessages(prev => [...prev, msg]);
    };

    socket.on('chat_history', onHistory);
    socket.on('new_message', onNewMessage);

    return () => {
      socket.off('chat_history', onHistory);
      socket.off('new_message', onNewMessage);
    };
  }, [setMessages, t, i18n.language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      className="flex-1 overflow-y-auto space-y-3 bg-gray-50/50 dark:bg-gray-900/50 p-2 rounded-lg"
      style={{ maxHeight: '300px' }}
    >
      {messages.length === 0 ? (
        <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
          {t('chat.loading')}
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
  );
}

ChatMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired
};