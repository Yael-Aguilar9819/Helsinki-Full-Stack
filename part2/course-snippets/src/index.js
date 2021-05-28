import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'

// const returnJson = async url => {
//   const resp = await fetch(url);
//   if (resp.status !== 200) {
//     throw new Error(`cannot fetch data with error code: ${resp.status}`);
//   }
//   return resp.json();
// }
// returnJson('http://localhost:3001/notes')
  // .then(notesJson => {
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)