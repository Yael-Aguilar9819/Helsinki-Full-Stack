import React, { useState } from 'react'
import PersonName from './components/PersonName'
import SubmitButton from './components/SubmitButton'
import InputText from './components/InputText'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    {name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Isaac Asimov', number: '12-43-234345' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [nameToSearch, setNameToSearch] = useState('')

  const handleSearchBoxChange = event => {
    setNameToSearch(event.target.value)
  }

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const addPersons = (event) => {
    event.preventDefault()

    const found = trueIfStringFound(newName, persons.map(person => person.name))
    if (found) {
      window.alert(`${newName} is already added to phonebook`) 
      return 0
    }

    const newObjectPerson = {
      name : newName,
      number : newNumber
    }
    setPersons(persons.concat(newObjectPerson))
    setNewName("")
    setNewNumber("")
  }

  const trueIfStringFound = (stringToFind, arrayOfString) => {
    if (arrayOfString.findIndex(elem => elem === stringToFind) === -1) return false
    return true 
  }

  const falseIfStringEmpty = str => str.length === 0 ? false : true

  const filterToSearch = () => {
    if (!falseIfStringEmpty(nameToSearch)) return elem => elem

    return elem => elem.name.toLowerCase().substr(0, nameToSearch.length) === nameToSearch
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <InputText functionControlChange={handleSearchBoxChange} currentInputControl={nameToSearch} textDisplay={"filter shown with"}/>      
      <h2>Add a new person contact info</h2>
      <form>
        <InputText functionControlChange={handleNameChange} currentInputControl={newName} textDisplay={"name"}/>
        <InputText functionControlChange={handleNumberChange} currentInputControl={newNumber} textDisplay={"number"}/>
        <div>
          <SubmitButton onClickFunc={addPersons} text={"add"}/>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(filterToSearch()).map(person => <PersonName key={person.name} name={person.name} number={person.number}/>)}
      </ul>
    </div>
  )
}

export default App