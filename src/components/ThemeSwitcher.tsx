'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null to avoid hydration mismatch before client is ready
    return (
        <button 
            aria-label="Toggle Theme" 
            type="button" 
            className="ml-4 px-3 py-2 rounded-md text-sm font-medium border border-gray-600 w-[58px] h-[38px]"
            disabled
        >
        </button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      aria-label="Toggle Theme"
      type="button"
      className="ml-4 px-3 py-2 rounded-md text-sm font-medium border border-brand-accent hover:bg-brand-accent hover:text-brand-primary transition-colors duration-200"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeSwitcher; 