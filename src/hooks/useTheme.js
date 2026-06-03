import { useEffect, useState } from 'react';

const STORAGE_KEY = 'pooja-portfolio-theme';

export function useTheme() {
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'dark';
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (savedTheme) return savedTheme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
