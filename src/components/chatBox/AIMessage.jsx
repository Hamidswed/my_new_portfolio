import { FaRobot, FaUser } from "react-icons/fa";
import { memo } from "react";

export const AIMessage = memo(function AIMessage({ message, isUser }) {
  return (
    <div className={`flex gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
      <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
        isUser 
          ? "bg-blue-500 text-white" 
          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
      }`}>
        {isUser ? <FaUser size={12} /> : <FaRobot size={12} />}
      </div>
      
      <div className={`flex-1 max-w-[75%] ${isUser ? "text-right" : ""}`}>
        <div className={`inline-block px-3 py-2 rounded-2xl ${
          isUser
            ? "bg-blue-500 text-white rounded-br-md"
            : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-md"
        }`}>
          <p className="text-sm whitespace-pre-wrap break-words leading-relaxed">{message.text}</p>
        </div>
        <div className={`text-xs text-gray-500 dark:text-gray-400 mt-1 px-1 ${
          isUser ? "text-right" : ""
        }`}>
          {new Date(message.timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
});