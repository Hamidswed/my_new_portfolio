// src/components/ChatBox/UserInfoForm.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export function UserInfoForm({ onSubmit }) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(t('chat.errors.nameRequired'));
      return;
    }
    if (!email.trim()) {
      setError(t('chat.errors.emailRequired'));
      return;
    }
    if (!validateEmail(email)) {
      setError(t('chat.errors.invalidEmail'));
      return;
    }
    setError('');
    onSubmit({ name: name.trim(), email: email.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h3 className="font-semibold text-gray-800 dark:text-white">{t('chat.welcome')}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{t('chat.intro')}</p>

      <div>
        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t('chat.name')}
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={t('chat.namePlaceholder')}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t('chat.email')}
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={t('chat.emailPlaceholder')}
        />
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        {t('chat.startChat')}
      </button>
    </form>
  );
}

UserInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};