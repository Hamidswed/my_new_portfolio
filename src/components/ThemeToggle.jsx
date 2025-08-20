import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  // Don't render until theme is determined
  if (isDark === null) {
    return (
      <div className={`z-50 rounded-full p-3 bg-gray-200 dark:bg-gray-800 animate-pulse`}>
        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`z-50 glass rounded-full p-3 border dark:border-dark-border/30 light:border-light-border/30 dark:hover:border-dark-primary/50 light:hover:border-light-primary/50 transition-all duration-300 hover-lift group`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <SunIcon 
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
            isDark 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100 text-yellow-500'
          }`}
        />
        
        {/* Moon icon */}
        <MoonIcon 
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
            isDark 
              ? 'opacity-100 rotate-0 scale-100 dark:text-dark-primary light:text-light-primary' 
              : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r dark:from-dark-primary/20 dark:to-dark-secondary/20 light:from-light-primary/20 light:to-light-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </button>
  );
}