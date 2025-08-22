// src/components/ChatBox/ChatHeader.jsx
import { useTranslation } from 'react-i18next';
import profileImage from '../../assets/hamid.webp';
import PropTypes from 'prop-types';

export function ChatHeader({ onClose }) {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="flex items-center gap-2">
        <img
          src={profileImage}
          alt="Hamidreza"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-bold text-gray-800 dark:text-white">{t('chat.title')}</span>
      </div>
      <button
        onClick={onClose}
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
      >
        ✕
      </button>
    </div>
  );
}

ChatHeader.propTypes = {
  onClose: PropTypes.func.isRequired
};