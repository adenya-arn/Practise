import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeStatus() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p>{theme} is selected</p>
    </div>
  );
}

export default ThemeStatus;
