import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    console.log("Dark mode is:", isDark); // Add this line to debug
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
      className="absolute top-4 right-4  dark:bg-gray-700 bg-gray-200 text-sm text-gray-800 dark:text-gray-100 px-3 py-1 rounded"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;
