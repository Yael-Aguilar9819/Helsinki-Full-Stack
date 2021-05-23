import React, { useState, useEffect } from 'react'
import Note from './components/Note'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true) 

  const methodToBackendReturnJson = async (url, method, body) => {
    const response = await fetch(url, {
                            method: method,
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                            },
                            body: body
                          })

    return response.json();

  }

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

    
  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    // fetch('http://localhost:3001/notes', {
    //   method: "POST",
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(noteObject)
    // }).then(resp => resp.json())
    //   .then(data => setNotes(notes.concat(data)))

      methodToBackendReturnJson('http://localhost:3001/notes', "POST", JSON.stringify(noteObject))
        .then(data => setNotes(notes.concat(data)))

    setNewNote("")
  }

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important}

    //The funciton works using the ol' async, then (pun intended) uses the Json response to check the notes and change it
    methodToBackendReturnJson(url, "PUT", JSON.stringify(changedNote))
      .then(data => setNotes(notes.map(note => note.id !== id ? note : data)))
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
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
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