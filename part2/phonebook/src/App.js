import React, { useState } from 'react'
import PersonName from './components/PersonName'
import SubmitButton from './components/SubmitButton'

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
    
    const found = trueIfStringFound(newName, persons.map(person => person.name))
    if (found) {
      window.alert(`${newName} is already added to phonebook`) 
      return 0
    }

    const newObjectPerson = {
      name : newName
    }
    setPersons(persons.concat(newObjectPerson))
    setNewName("")
  }

  const trueIfStringFound = (stringToFind, arrayOfString) => {
    if (arrayOfString.findIndex(elem => elem === stringToFind) === -1) return false
    return true 
  }

  // const throwAlertIfTrue = booleanValue => 

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <SubmitButton onClickFunc={addPersons} text={"add"}/>
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