// src/components/ChatBox/ChatBox.jsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getSocket } from '../../utils/socket';
import { ChatHeader } from './ChatHeader';
import { UserInfoForm } from './UserInfoForm';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import profileImage from '../../assets/hamid.webp';

export function ChatBox() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem('chatStep');
    return savedStep || 'initial';
  });
  const [messages, setMessages] = useState([]);
  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem('chatUserInfo');
    return saved ? JSON.parse(saved) : null;
  });

  // ذخیره اطلاعات کاربر و مرحله در localStorage
  useEffect(() => {
    if (userInfo) {
      localStorage.setItem('chatUserInfo', JSON.stringify(userInfo));
    }
  }, [userInfo]);

  useEffect(() => {
    localStorage.setItem('chatStep', step);
  }, [step]);

  // اگر کاربر از قبل ثبت شده، مرحله چت را ادامه بده
  useEffect(() => {
    if (userInfo && step === 'initial') {
      setStep('chat');
    }
  }, [userInfo, step]);

  // اتصال به اتاق چت هنگام ورود به مرحله چت
  useEffect(() => {
    if (step === 'chat') {
      const socket = getSocket();
      const room = socket.auth.sessionId;
      socket.emit('join_room', room);
    }
  }, [step]);

  // شروع چت پس از ورود اطلاعات کاربر
  const startChat = (info) => {
    setUserInfo(info);
    setStep('chat');
  };

  const handleLocalSend = (msg) => {
    setMessages(prev => [...prev, msg]);
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
        <div
          className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border dark:border-gray-700 flex flex-col overflow-hidden mx-auto"
          style={{ maxWidth: '90vw', width: 'auto' }}
        >
          <ChatHeader onClose={() => setIsOpen(false)} />

          <div className="flex-1 p-4 flex flex-col space-y-4">
            {step === 'initial' ? (
              <UserInfoForm onSubmit={startChat} />
            ) : (
              <>
                <ChatMessages messages={messages} setMessages={setMessages} />
                {/* ✅ فقط اگر userInfo وجود داشته باشد ChatInput رندر شود */}
                {userInfo ? (
                  <ChatInput userInfo={userInfo} onLocalSend={handleLocalSend} />
                ) : (
                  <div className="text-center py-2 text-sm text-gray-500 dark:text-gray-400">
                    {t('chat.loading')}...
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}