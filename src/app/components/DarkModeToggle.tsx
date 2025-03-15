"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
    </button>
  );
};

export default DarkModeToggle;
