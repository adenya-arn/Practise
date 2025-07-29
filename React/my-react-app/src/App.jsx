// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
import Greeting from './Greeting';
import ProfileCard from './ProfileCard';
import ActionButton from './ActionButton';
import {greet} from './utils'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


function App() {
  return (
    <div>
      <h1>Welcome to My First React App</h1>
      <Greeting name="Alice>" />
      <Greeting name="Arnold>" />
      <Greeting name="Adenya>" />
      <Greeting name="Mido>" />
    </div>
  );
}


function Profile() {
  return (
    <div>
      <h1>Team Members</h1>
      <ProfileCard name="Luffy" age={19} role="Captain" />
      <ProfileCard name="Zoro" age={21} role="Swordsman" />
      <ProfileCard name="Sanji" age={21} role="Cook" />
      <ProfileCard name="Nami" age={20} role="Navigator" />
    </div>
  );
}

// export default App;
// export default Profile;

function ActionBtn() {
  const handleGreet = () => {
    alert('Hello from the Captain..')
  };

  return (
    <div>
      <h1>Props Practise</h1>
      <ActionButton label="Greet" onClick={handleGreet} />
    </div>
  );
}

//export default ActionBtn;

function UtilTrial () {
  return <h1>{greet("Arnold")}</h1>
}