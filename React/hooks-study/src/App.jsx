import Trial1 from "./components/Usestate";
import { MyComponent } from "./components/Useeffect";
import TitleUpdater from "./components/Useeffect";
import Trial2 from "./components/Useeffect";
import { UserProvider } from "./components/ContextUser";
import ComponentA from "./components/ComponentA";
import FocusInput from "./components/Useref";
import PrevValue from "./components/Useref";
import MiniTask from "./components/Useref";

export function App() {
  const user = { name: "Arnold", age: 22 };
  return (
    <div>
      <MiniTask />
      <PrevValue />
      <FocusInput />
      <Trial1 />
      <MyComponent />
      <TitleUpdater />
      <Trial2 />
      <UserProvider value={user}>
        <ComponentA />
      </UserProvider>
    </div>
  );
}

// function App() {
//   const user = { name: "Arnold", age: 22 };

//   return (
//     <userContext.Provider value={user}>
//       <ComponentA />
//     </userContext.Provider>
//   );
// }

export default App;
