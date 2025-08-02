import { useContext } from "react";
import LanguageContext from "./LanguageContext";
import { use } from "react";

function Language() {
  const { lang, setLang } = useContext(LanguageContext);
  const toggleLang = () => {
    setLang(lang === "en" ? "es" : "en");
  };
  return (
    <div>
      <p>Current Language</p>
      <button onClick={toggleLang}>Change Language</button>
    </div>
  );
}

export default Language;
