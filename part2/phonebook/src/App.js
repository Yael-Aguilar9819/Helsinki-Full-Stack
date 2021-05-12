import React, { useState } from 'react'
import PersonName from './components/PersonName'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPersons = (event) => {
    event.preventDefault()
    console.log(persons)
    const newObjectPerson = {
      name : newName
    }
    setPersons(persons.concat(newObjectPerson))
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={addPersons}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <PersonName key={person.name} name={person.name}/>)}
      </ul>
    </div>
  )
}

export default App