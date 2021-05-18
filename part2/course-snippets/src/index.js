import ReactDOM from 'react-dom'
import App from './App.js'

const ds = async url => {
  const resp = await fetch(url)
  return resp
}

// ds('http://localhost:3001/notes').then(cs => console.log(cs.json()))

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  console.log(notes)
})

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)

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