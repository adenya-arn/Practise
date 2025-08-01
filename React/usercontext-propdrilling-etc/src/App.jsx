import React from "react";
import { CounterProvider } from "./components/CounterContext";
import { Parent } from "./components/Parent";
// import { LanguageProvider } from "./components/LanguageContext";
import { LanguageToggle } from "./components/LanguageToggle";

function App1() {
  return (
    <CounterProvider>
      <h1>Context Counter Example</h1>
      <Parent />
    </CounterProvider>
  );
}
// export default App;

function App() {
  return (
    <LanguageToggle />

    // <LanguageProvider>
    //   <h1>Language Toggler</h1>
    //   {/* <LanguageToggle /> */}
    // </LanguageProvider>
  );
}

export default App;
