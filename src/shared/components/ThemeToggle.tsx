'use client';

import { useTheme } from '../../shared/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-slate-800 text-white p-2 rounded hover:bg-slate-700 transition cursor-pointer"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
