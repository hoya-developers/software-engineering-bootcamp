import React, { useState } from "react";
import "./DarkMode.css";

const DarkMode: React.FC = () => {
  const [localHostDarkMode, setLocalHostDarkMode] = useState<boolean>(false);

  const handleClick = () => {
    const newDarkModeValue = !localHostDarkMode;
    setLocalHostDarkMode(newDarkModeValue);
    localStorage.setItem(
      "localHostDarkMode",
      newDarkModeValue ? "dark" : "light"
    );
  };

  return (
    <div className={localHostDarkMode ? "dark-mode" : "light-mode"}>
      <button onClick={handleClick}>Toggle Dark Mode</button>
    </div>
  );
};

export default DarkMode;
