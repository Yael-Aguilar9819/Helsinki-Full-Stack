import React, { useState, useEffect } from 'react'
import Note from './components/Note'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true) 

  const getJson = async url => {
    const resp = await fetch(url)
    if (resp.status !== 200) {
      throw new Error(`cannot fetch data with error code: ${resp.status}`);
    }
    return resp.json();
  }
  
  useEffect(() => {
    getJson('http://localhost:3001/notes')
      .then(response => setNotes(response))
      .catch(err => {
        console.log(err)
        setNotes([])
        })
  }, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    const newArrayOfNotes = notes.concat(noteObject)
    setNotes(newArrayOfNotes)
    setNewNote("")
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
          )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form> 
    </div>
  )
}

export default App