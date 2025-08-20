import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import profileImage from '../assets/hamid.webp';

const socket = io('https://chat-backend-3xpu.onrender.com');

export function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('user_message', input.trim());
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-8 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          <span className="pr-2 font-medium text-sm">Online</span>
        </button>
      ) : (
        <div className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col">
          <div className="p-2 border-b dark:border-gray-700 font-bold flex justify-between items-center">
            <span>Online Chat</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
      <div className="flex-1 overflow-y-auto p-2" style={{ maxHeight: '300px' }}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-sm ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-2 py-1 rounded ${msg.from === 'user' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-200 dark:bg-gray-700'}`}>
              {msg.text}
            </span>
          </div>
        ))}
          <div ref={messagesEndRef} />
          </div>
          <div className="p-2 flex gap-2 border-t dark:border-gray-700">
            <input
              className="flex-1 px-2 py-1 rounded border dark:bg-gray-900 dark:text-white"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Please type your message..."
            />
            <button
              className="px-3 py-1 bg-blue-600 text-white rounded"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}