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
      className="fixed top-4 right-4 px-5 py-2 rounded-full
      bg-gradient-to-r from-blue-500 to-violet-600
      text-white font-medium flex items-center gap-2
      shadow-md hover:brightness-110 transition duration-300
      dark:from-yellow-400 dark:to-orange-400 dark:text-white"
    >
      <span className="material-symbols-outlined">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeToggle;
