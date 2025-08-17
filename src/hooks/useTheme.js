import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(null);

  // Function to get system theme preference
  const getSystemTheme = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // default to dark if can't detect
  };

  // Function to apply theme
  const applyTheme = (dark) => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.style.backgroundColor = '#0a0a0a';
      document.body.style.color = '#f8fafc';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#1e293b';
    }
  };

  useEffect(() => {
    // Initialize theme on hook mount
    const savedTheme = localStorage.getItem('theme');
    let initialTheme;

    if (savedTheme) {
      // User has previously set a theme preference
      initialTheme = savedTheme === 'dark';
    } else {
      // No saved preference, use system preference
      initialTheme = getSystemTheme();
    }

    setIsDark(initialTheme);
    applyTheme(initialTheme);

    // Listen for system theme changes (only if no saved preference)
    if (!savedTheme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        const newTheme = e.matches;
        setIsDark(newTheme);
        applyTheme(newTheme);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return { isDark, toggleTheme };
}