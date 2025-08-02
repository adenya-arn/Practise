import { useContext } from "react";
import ProfileThemeContext from "./ProfileThemeContext";

function ProfileThemeToggle() {
  const { theme, setTheme } = useContext(ProfileThemeContext);
  const switchProfileTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={switchProfileTheme}>Change Theme</button>;
}

export default ProfileThemeToggle;
