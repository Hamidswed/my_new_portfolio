// src/components/ChatBox/ChatMessages.jsx
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getSocket } from "../../utils/socket";
import { getRelativeTime } from "../../utils/timeUtils";
import PropTypes from "prop-types";

export function ChatMessages({ messages, setMessages }) {
  const { t, i18n } = useTranslation();
  const messagesEndRef = useRef(null);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);

  // آپدیت پیام خوشامدگویی وقتی زبان تغییر می‌کنه
  useEffect(() => {
    setMessages((prev) => {
      // اگر پیام خوشامدگویی وجود داره، اون رو با زبان جدید آپدیت کن
      const hasWelcomeMessage = prev.some(
        (msg) => msg.clientId === "welcome-message"
      );
      if (hasWelcomeMessage) {
        return prev.map((msg) =>
          msg.clientId === "welcome-message"
            ? {
                from: "admin",
                text: t("chat.welcomeMessage"),
                timestamp: new Date().toISOString(),
                clientId: "welcome-message",
              }
            : msg
        );
      }
      return prev;
    });
  }, [i18n.language, t, setMessages]);

  useEffect(() => {
    const socket = getSocket();

    const onHistory = (history) => {
      setIsLoadingHistory(false);
      if (Array.isArray(history) && history.length > 0) {
        setMessages(history);
      } else {
        // اگر تاریخچه‌ای وجود ندارد، پیام خوشامدگویی با زبان فعلی نمایش بده
        setMessages([
          {
            from: "admin",
            text: t("chat.welcomeMessage"),
            timestamp: new Date().toISOString(),
            clientId: "welcome-message",
          },
        ]);
      }
    };

    const onNewMessage = (msg) => {
      setMessages((prev) => {
        // اگر این پیام قبلاً به صورت خوشبینانه اضافه شده باشد، تکراری ثبت نکن
        if (msg.clientId && prev.some((m) => m.clientId === msg.clientId)) {
          // در صورت نیاز تایم‌استمپ سرور را روی مورد موجود به‌روزرسانی کن
          return prev.map((m) =>
            m.clientId === msg.clientId
              ? { ...m, timestamp: msg.timestamp || m.timestamp }
              : m
          );
        }
        return [...prev, msg];
      });
    };

    socket.on("chat_history", onHistory);
    socket.on("new_message", onNewMessage);

    return () => {
      socket.off("chat_history", onHistory);
      socket.off("new_message", onNewMessage);
    };
  }, [setMessages, t, i18n.language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="sm:max-w-sm flex-1 overflow-y-auto space-y-3 bg-gray-50/50 dark:bg-gray-900/50 p-2 rounded-lg"
      style={{ maxHeight: "300px" }}
    >
      {isLoadingHistory ? (
        <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
          {t("chat.loading")}
        </div>
      ) : messages.length === 0 ? (
        <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
          {t("chat.noMessages")}
        </div>
      ) : (
        messages.map((msg, idx) => (
          <div
            key={msg.clientId || idx}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className="flex flex-col">
              <div
                className={`px-4 py-2 rounded-2xl text-sm ${
                  msg.from === "user"
                    ? "bg-blue-600 text-white rounded-tr-none"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
              {/* نمایش زمان زیر هر پیام */}
              {msg.timestamp && (
                <div
                  className={`text-xs text-gray-500 dark:text-gray-400 mt-1 px-1 ${
                    msg.from === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {getRelativeTime(msg.timestamp, t)}
                </div>
              )}
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
  setMessages: PropTypes.func.isRequired,
};
