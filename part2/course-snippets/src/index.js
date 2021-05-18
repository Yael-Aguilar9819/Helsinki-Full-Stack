import ReactDOM from 'react-dom'
import App from './App.js'

const ds = async url => {
  const resp = await fetch(url);
  if (resp.status !== 200) {
    throw new Error(`cannot fetch data with error code: ${resp.status}`);
  }
  return resp.json();
}
ds('http://localhost:3001/notes').then(data => console.log("from notes: ",data))


ds('http://localhost:3001/foobar')
  .then(data => console.log("from notes: ", data))
  .catch(err =>{
    console.log("and error happened: ", err)}
  )

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

ReactDOM.render(
  <App notes_arg={notes} />,
  document.getElementById('root')
)