import React, { useState } from "react";

function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const isLight = theme === "light";
  const bgColor = isLight ? "#fff" : "#333";
  const textColor = isLight ? "#000" : "#fff";
  const emoji = isLight ? "☀️" : "🌙";
  const buttonLabel = isLight ? "Switch to Dark Mode" : "Switch to Light Mode";

  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor, padding: "2rem" }}
    >
      <h2>{emoji} Theme Toggler</h2>
      <button onClick={toggleTheme}>{buttonLabel}</button>
    </div>
  );
}

export default ThemeToggler;
