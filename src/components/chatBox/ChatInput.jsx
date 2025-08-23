// src/components/ChatBox/ChatInput.jsx
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getSocket } from "../../utils/socket";
import PropTypes from "prop-types";

export function ChatInput({ userInfo, onLocalSend }) {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 120) + "px";
    }
  }, [input]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() && userInfo) {
      const text = input.trim();
      const clientId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      // آپدیت خوشبینانه UI
      onLocalSend?.({
        from: "user",
        text,
        name: userInfo.name,
        email: userInfo.email,
        timestamp: new Date().toISOString(),
        clientId,
      });
      getSocket().emit("user_message", {
        text,
        name: userInfo.name,
        email: userInfo.email,
        clientId,
      });
      setInput("");
      // Reset textarea height after sending
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e);
    }
  };

  return (
    <form onSubmit={sendMessage} className="flex gap-2 p-2">
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={t("chat.placeholder")}
        rows={1}
        className="flex-1 w-2/3 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
        style={{ minHeight: "44px", maxHeight: "120px" }}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:disabled:bg-blue-800 text-white rounded-xl transition-colors duration-300 self-end"
        disabled={!input.trim()}
      >
        {t("chat.send")}
      </button>
    </form>
  );
}

ChatInput.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onLocalSend: PropTypes.func,
};
