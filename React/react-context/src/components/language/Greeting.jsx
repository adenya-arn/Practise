// Greeting.jsx
import { useContext } from "react";
import LanguageContext from "./language/LanguageContext";

function Greeting() {
  const { lang } = useContext(LanguageContext);

  return <p>{lang === "en" ? "Hello" : "¡Hola!"}</p>;
}

export default Greeting;
