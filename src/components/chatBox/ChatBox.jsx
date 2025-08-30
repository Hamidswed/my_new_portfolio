// src/components/ChatBox/ChatBox.jsx
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { getSocket } from "../../utils/socket";
import { ChatHeader } from "./ChatHeader";
import { UserInfoForm } from "./UserInfoForm";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { AIAssistant } from "./AIAssistant";
import { AIMessage } from "./AIMessage";
import profileImage from "../../assets/hamid-sm.webp";

export function ChatBox() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("chatStep");
    return savedStep || "initial";
  });
  const [messages, setMessages] = useState([]);
  const [aiMessages, setAiMessages] = useState([]);
  const [isAIMode, setIsAIMode] = useState(false);
  const [isAILoading, setIsAILoading] = useState(false);
  const aiMessagesEndRef = useRef(null);
  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem("chatUserInfo");
    return saved ? JSON.parse(saved) : null;
  });

  // ذخیره اطلاعات کاربر و مرحله در localStorage
  useEffect(() => {
    if (userInfo) {
      localStorage.setItem("chatUserInfo", JSON.stringify(userInfo));
    }
  }, [userInfo]);

  useEffect(() => {
    localStorage.setItem("chatStep", step);
  }, [step]);

  // اگر کاربر از قبل ثبت شده، مرحله چت را ادامه بده
  useEffect(() => {
    if (userInfo && step === "initial") {
      setStep("chat");
    }
  }, [userInfo, step]);

  // اتصال به اتاق چت هنگام ورود به مرحله چت
  useEffect(() => {
    if (step === "chat") {
      const socket = getSocket();
      const room = socket.auth.sessionId;
      socket.emit("join_room", room);

      // درخواست تاریخچه چت
      socket.emit("request_chat_history", room);
    }
  }, [step]);

  // شروع چت پس از ورود اطلاعات کاربر
  const startChat = (info) => {
    setUserInfo(info);
    setStep("chat");
  };

  const handleLocalSend = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  // Helper function to get error message based on error code
  const getErrorMessage = (errorCode) => {
    const errorMap = {
      MISSING_MESSAGE: t("chat.aiAssistant.errors.missingMessage"),
      API_KEY_NOT_CONFIGURED: t("chat.aiAssistant.errors.apiKeyNotConfigured"),
      QUOTA_EXCEEDED: t("chat.aiAssistant.errors.quotaExceeded"),
      INVALID_API_KEY: t("chat.aiAssistant.errors.invalidApiKey"),
      PROCESSING_ERROR: t("chat.aiAssistant.errors.processingError"),
    };
    return errorMap[errorCode] || t("chat.aiAssistant.errors.general");
  };

  // Handle AI message sending
  const handleAIMessage = async (message) => {
    const userMessage = {
      text: message,
      timestamp: new Date().toISOString(),
      isUser: true,
    };

    setAiMessages((prev) => [...prev, userMessage]);
    setIsAILoading(true);

    try {
      // Use the Render backend URL
      const response = await fetch(
        "https://chat-backend-3xpu.onrender.com/api/ai-chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        },
      );

      const data = await response.json();

      if (data.success) {
        const aiResponse = {
          text: data.response,
          timestamp: new Date().toISOString(),
          isUser: false,
        };
        setAiMessages((prev) => [...prev, aiResponse]);
      } else {
        const errorMessage = {
          text: getErrorMessage(data.error),
          timestamp: new Date().toISOString(),
          isUser: false,
        };
        setAiMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("AI Error Details:", {
        message: error.message,
        stack: error.stack,
        url: "https://chat-backend-3xpu.onrender.com/api/ai-chat",
      });

      let errorText = t("chat.aiAssistant.errors.network");

      // More specific error messages for network issues
      if (error.message.includes("Failed to fetch")) {
        errorText = t("chat.aiErrorConnection");
      } else if (error.message.includes("404")) {
        errorText = t("chat.aiErrorNotFound");
      } else if (error.message.includes("500")) {
        errorText = t("chat.aiErrorServer");
      }

      const errorMessage = {
        text: errorText,
        timestamp: new Date().toISOString(),
        isUser: false,
      };
      setAiMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsAILoading(false);
    }
  };

  // Auto scroll to bottom for AI messages
  const scrollToBottom = () => {
    aiMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isAIMode && aiMessages.length > 0) {
      scrollToBottom();
    }
  }, [aiMessages, isAIMode, isAILoading]);

  // Handle mode switching
  const handleModeSwitch = (aiMode) => {
    setIsAIMode(aiMode);
    // اگر به human chat برمیگردیم و قبلاً user info داریم، تاریخچه رو دوباره لود کن
    if (!aiMode && step === "chat" && userInfo) {
      const socket = getSocket();
      socket.emit("request_chat_history", socket.auth.sessionId);
    }
  };

  // Handle opening chat box and loading history
  const handleOpenChat = () => {
    setIsOpen(true);
    // اگر کاربر قبلاً ثبت شده و در مرحله چت هست، تاریخچه رو لود کن
    if (step === "chat" && userInfo) {
      const socket = getSocket();
      socket.emit("request_chat_history", socket.auth.sessionId);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={handleOpenChat}
          className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800"
        >
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-blue-400 object-cover dark:border-blue-500"
            />
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-gray-800"></span>
          </div>
          <span className="text-sm font-medium dark:text-gray-200">
            {t("chat.online")}
          </span>
        </button>
      ) : (
        <div
          className="flex max-h-[400px] min-h-[350px] w-full max-w-sm flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900"
          // style={{ maxWidth: "380px", width: "380px", height: "400px" }}
        >
          <ChatHeader onClose={() => setIsOpen(false)} />

          {/* Mode Toggle */}
          <div className="flex flex-shrink-0 border-b dark:border-gray-700">
            <button
              onClick={() => handleModeSwitch(false)}
              className={`flex-1 px-3 py-2 text-xs font-medium transition-colors ${
                !isAIMode
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              }`}
            >
              {t("chat.humanChat", "Human Chat")}
            </button>
            <button
              onClick={() => handleModeSwitch(true)}
              className={`flex-1 px-3 py-2 text-xs font-medium transition-colors ${
                isAIMode
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              }`}
            >
              {t("chat.aiChat", "AI Assistant")}
            </button>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden">
            {step === "initial" && !isAIMode ? (
              <div className="p-4">
                <UserInfoForm onSubmit={startChat} />
              </div>
            ) : isAIMode ? (
              <>
                {/* AI Messages */}
                <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-3">
                  {aiMessages.length === 0 ? (
                    <div className="py-6 text-center text-gray-500 dark:text-gray-400">
                      <div className="mb-3 text-3xl">🤖</div>
                      <p className="px-4 text-sm">
                        {t(
                          "chat.aiWelcome",
                          "Hi! I'm your AI assistant. Ask me anything!",
                        )}
                      </p>
                    </div>
                  ) : (
                    aiMessages.map((msg, index) => (
                      <AIMessage
                        key={index}
                        message={msg}
                        isUser={msg.isUser}
                      />
                    ))
                  )}
                  {isAILoading && (
                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className="h-3 w-3 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
                      </div>
                      <div className="rounded-2xl rounded-bl-md bg-gray-100 px-3 py-2 dark:bg-gray-800">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {t("chat.aiThinking", "AI is thinking...")}
                        </p>
                      </div>
                    </div>
                  )}
                  <div ref={aiMessagesEndRef} />
                </div>
                {/* AI Input */}
                <div className="flex-shrink-0">
                  <AIAssistant
                    key="ai-assistant"
                    onSendMessage={handleAIMessage}
                    isLoading={isAILoading}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 overflow-hidden">
                  <ChatMessages
                    key={`human-chat-${isAIMode}`}
                    messages={messages}
                    setMessages={setMessages}
                  />
                </div>
                {userInfo && (
                  <ChatInput
                    userInfo={userInfo}
                    onLocalSend={handleLocalSend}
                  />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
