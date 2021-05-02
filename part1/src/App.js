import React from 'react'
// console.log("staring to know")




function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const Hello = (props) => {
  return (
    <div>
      Hello {props.name}, you are {props.age} years old
    </div>
  )
}

let user23 = {avatarUrl:"www.htsd.com", name:"Joe", age:50, eyeColor:"blue"}; 
function Avatar(props) {
  return (
    <div>
      <p>Hello {props.avatarUrl}</p>
      <p>hi mr {props.name}</p>
    </div>  
  );
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <Avatar {...user23}/>
      <Welcome name="josh"/>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10}/>
      <Hello name={name} age={age}/>
    </>
  )
}

export default App


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
