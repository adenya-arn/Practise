import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={switchTheme}>Change Theme</button>
    </div>
  );
}

export default ThemeToggle;
