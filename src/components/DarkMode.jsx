import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.querySelector("body").classList.toggle("dark");
  };

  return (
    <button

      className={`right-4 gap-2 flex items-center justify-center bg-white dark:bg-gray-800 text-gray-800 dark:text-white  rounded-full border-none  focus:outline-none`}
      onClick={toggleDarkMode}
    >
      {darkMode ? <FaSun size={16} /> : <FaMoon size={14} />}
      <span>{darkMode ? "Yorqin rejim" : "Tungi rejim"}</span>
    </button>
  );
};

export default DarkMode;
