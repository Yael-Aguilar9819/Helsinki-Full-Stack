import React, { useState } from 'react'
import SubmitButton from './components/SubmitButton'
import InputText from './components/InputText'
import PersonForm from './components/PersonForm'
import PeopleDisplay from './components/PeopleDisplay'

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
      <PersonForm
        textInput1={<InputText functionControlChange={handleNameChange} currentInputControl={newName} textDisplay={"name"}/>} 
        textInput2={<InputText functionControlChange={handleNumberChange} currentInputControl={newNumber} textDisplay={"number"}/>} 
        submitButton={<SubmitButton onClickFunc={addPersons} text={"add"}/>}
      />
      <h2>Numbers</h2>
      <PeopleDisplay personsArray={persons} filterToSearch={filterToSearch}/>
    </div>
  )
}

export default App