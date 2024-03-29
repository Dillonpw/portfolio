import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  };

  return (
    <button className='text-2xl font-bold m-1' onClick={toggleTheme}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;

