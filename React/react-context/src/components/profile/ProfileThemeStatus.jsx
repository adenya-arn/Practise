import { useContext } from "react";
import ProfileThemeContext from "./ProfileThemeContext";

function ProfileThemeStatus() {
  const { theme } = useContext(ProfileThemeContext);

  return (
    <div>
      <p>Your selected theme is {theme}</p>
    </div>
  );
}

export default ProfileThemeStatus;
