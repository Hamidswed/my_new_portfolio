// src/components/LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    if (storedLang && i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setIsOpen(false);
  };

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="fixed top-20 right-6 sm:top-6 sm:right-24 z-50 glass rounded-full p-3 border dark:border-dark-border/30 light:border-light-border/30 dark:hover:border-dark-primary/50 light:hover:border-light-primary/50 transition-all duration-300 hover-lift group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center "
      >
        {/* <span>{currentLang.flag}</span> */}
        <span>{currentLang.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <ul className="absolute right-6 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border dark:border-gray-700 text-sm">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => changeLanguage(lang.code)}
                className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  i18n.language === lang.code ? 'bg-blue-50 dark:bg-blue-900/30' : ''
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}