import React, { useEffect, useState } from "react";
import "./DarkModeTest.css";

const DarkModeTest: React.FC = () => {
  const [localHostDarkMode, setLocalHostDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkModeValue = localStorage.getItem("localHostDarkMode");
    if (darkModeValue === "dark") {
      setLocalHostDarkMode(true);
    } else {
      setLocalHostDarkMode(false);
    }
  }, []);

  return (
    <div className={localHostDarkMode ? "dark-mode" : "light-mode"}>
      <div>this is a dark mode test!</div>
    </div>
  );
};

export default DarkModeTest;
