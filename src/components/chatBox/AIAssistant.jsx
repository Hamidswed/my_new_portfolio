import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRobot, FaUser, FaSpinner } from "react-icons/fa";

export function AIAssistant({ onSendMessage, isLoading }) {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border-t dark:border-gray-700">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("chat.askAI", "Ask AI anything...")}
          className="flex-1 px-3 py-2 text-sm border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[40px]"
        >
          {isLoading ? <FaSpinner className="animate-spin text-sm" /> : <FaRobot className="text-sm" />}
        </button>
      </div>
    </form>
  );
}