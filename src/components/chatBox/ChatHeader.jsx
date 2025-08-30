// src/components/ChatBox/ChatHeader.jsx
import { useTranslation } from "react-i18next";
import { memo } from "react";
import profileImage from "../../assets/hamid-sm.webp";
import PropTypes from "prop-types";

export const ChatHeader = memo(function ChatHeader({ onClose }) {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700 flex-shrink-0">
      <div className="flex items-center gap-2">
        <img
          src={profileImage}
          alt="Hamidreza"
          className="w-7 h-7 rounded-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <span className="font-medium text-sm text-gray-800 dark:text-white">
          {t("chat.title")}
        </span>
      </div>
      <button
        onClick={onClose}
        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm"
      >
        ✕
      </button>
    </div>
  );
});

ChatHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};
