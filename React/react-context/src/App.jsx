import React, { useState } from "react";
// import Greeting from "./components/language/Greeting";
// import Language from "./components/language/Language";
// import LanguageContext from "./components/language/LanguageContext";
// import ThemeContext from "./components/theme/ThemeContext";
// import ThemeToggle from "./components/theme/ThemeToggle";
// import ThemeStatus from "./components/theme/ThemeStatus";
import ProfileContext from "./components/profile/ProfileContext";
import ProfileThemeContext from "./components/profile/ProfileThemeContext";
import ProfileThemeStatus from "./components/profile/ProfileThemeStatus";
import ProfileThemeToggle from "./components/profile/ProfileThemeToggle";
import UserProfile from "./components/profile/UserProfile";

function App2() {
  const [profile, setProfile] = useState("");
  const [theme, setTheme] = useState("light");
  const [submittedName, setSubmittedName] = useState("");

  return (
    <ProfileContext.Provider
      value={{ profile, setProfile, submittedName, setSubmittedName }}
    >
      <ProfileThemeContext.Provider value={{ theme, setTheme }}>
        <UserProfile />
        <ProfileThemeStatus />
        <ProfileThemeToggle />
      </ProfileThemeContext.Provider>
    </ProfileContext.Provider>
  );
}

function App1() {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <h2>Language Greetings</h2>
      <Language lang={lang} setLang={setLang} />
      <Greeting lang={lang} />
    </LanguageContext.Provider>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <h2>This is a theme toggler</h2>
      <ThemeToggle />
      <ThemeStatus />
    </ThemeContext.Provider>
  );
}
export default App2;
