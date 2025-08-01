import React, { useState, useContext, createContext } from "react";

export const LanguageContext = createContext();

export function LanguageProvider() {
  const [current, selectLanguage] = useState("en");

  return <LanguageContext.Provider></LanguageContext.Provider>;
}
