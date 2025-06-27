import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    localStorage.setItem("darkMode", newValue);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="    fixed top-4 right-4
    px-4 py-2
    rounded-full
    bg-gradient-to-r from-indigo-500 to-purple-600
    text-white
    font-semibold
    shadow-lg
    hover:brightness-110
    transition
    duration-300
    ease-in-out
    focus:outline-none
    focus:ring-2 focus:ring-indigo-400
    dark:from-yellow-400 dark:to-yellow-300 dark:text-gray-900"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;
