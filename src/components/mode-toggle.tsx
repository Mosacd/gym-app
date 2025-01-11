import { useState } from 'react';
import { Moon, Sun } from "lucide-react";
import { Button } from './ui/button';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Toggle the dark class on the document root
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button
      onClick={toggleTheme}
      className="hidden md:flex relative w-12 h-9 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-white hover:text-black dark:hover:text-black dark:hover:bg-white bg-transparent transition-colors"
      aria-label="Toggle theme"
    >
      <Sun 
        className={`absolute h-5 w-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon 
        className={`absolute h-5 w-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </Button>
  );
};

export default ThemeToggle;