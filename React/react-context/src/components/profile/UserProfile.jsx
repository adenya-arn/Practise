import ProfileContext from "./ProfileContext";
import { useContext } from "react";

function UserProfile() {
  const { profile, setProfile, submittedName, setSubmittedName } =
    useContext(ProfileContext);
  const changeProfile = (e) => {
    setProfile(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSubmittedName(profile);
    setProfile("");
  };

  return (
    <form onSubmit={handleChange}>
      <input
        type="text"
        value={profile}
        onChange={changeProfile}
        placeholder="Enter profile name"
      />
      <button type="submit">Submit</button>

      {submittedName && <p>Your name is: {submittedName}</p>}
    </form>
  );
}

export default UserProfile;
