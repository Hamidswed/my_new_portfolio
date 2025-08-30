import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaRobot, FaUser, FaSpinner } from "react-icons/fa";

export function AIAssistant({ onSendMessage, isLoading }) {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 120) + "px";
    }
  }, [message]);

  // Focus on textarea after loading is complete
  useEffect(() => {
    if (!isLoading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isLoading]);

  // Focus on textarea when component mounts
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
      // Reset textarea height after sending
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
      // Focus will be restored automatically via useEffect when isLoading becomes false
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border-t dark:border-gray-700">
      <div className="flex gap-2 items-end">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t("chat.askAI", "Ask AI anything...")}
          rows={1}
          className="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 border dark:border-gray-600 rounded-lg dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
          style={{ minHeight: "44px", maxHeight: "120px" }}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[44px] h-[44px] flex-shrink-0"
        >
          {isLoading ? <FaSpinner className="animate-spin text-sm" /> : <FaRobot className="text-sm" />}
        </button>
      </div>
    </form>
  );
}