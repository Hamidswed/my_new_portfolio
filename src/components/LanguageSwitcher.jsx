// src/components/LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null); // 🔽 ارجاع به کل کامپوننت

  const isRTL = i18n.language === 'fa';

  // بارگذاری زبان ذخیره‌شده
  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    if (storedLang && i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  // بستن منو با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setIsOpen(false);
  };

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div
      ref={switcherRef} // ✅ ارجاع برای تشخیص کلیک بیرون
      className={`z-50 flex items-center justify-center w-12 h-12 glass rounded-full border dark:border-dark-border/30 light:border-light-border/30 dark:hover:border-dark-primary/50 light:hover:border-light-primary/50 transition-all duration-300 hover-lift group relative`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-full flex items-center justify-center"
        aria-expanded={isOpen}
      >
        <span>{currentLang.code.toUpperCase()}</span>
      </button>

      {/* منوی کشویی با انیمیشن fade */}
      {isOpen && (
        <ul
          className={`absolute top-10 min-w-32 ${isRTL ? "left-0" : "right-0"} mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border dark:border-gray-700 text-sm transform opacity-0 scale-95 transition-all duration-200 ease-out pointer-events-none`}
          style={{
            animation: 'fadeInDown 0.2s ease-out forwards',
          }}
        >
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