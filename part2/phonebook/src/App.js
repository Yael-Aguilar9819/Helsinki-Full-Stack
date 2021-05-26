import React, { useState, useEffect } from 'react'
import SubmitButton from './components/SubmitButton'
import InputText from './components/InputText'
import PersonForm from './components/PersonForm'
import PeopleDisplay from './components/PeopleDisplay'
import personsInfoService from './services/numbersBackend'

//This is the main App, when the logic lives
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')  
  const [ nameToSearch, setNameToSearch ] = useState('')

  
  //This is how the app starts, fetching all the persons info 
  useEffect(() => {
    personsInfoService.getAll()
      .then(personsJson => setPersons(personsJson))
      .catch(err => {
        console.log(err)
      })
  }, [])

  //This is using the controlled-component approach
  const handleSearchBoxChange = event => {
    setNameToSearch(event.target.value)
  }

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  //It's the same as before, just added the server communication 
  const addPerson = (event) => {
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
    personsInfoService.sendNewPersonInfo(newObjectPerson)
      .then(resp => console.log(resp))

    setPersons(persons.concat(newObjectPerson))
    setNewName("")
    setNewNumber("")
  }

  const deletePerson = (event) => {
    event.preventDefault()
    console.log(event.target.value);
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


  //The main app application rendering everything
  return (
    <div>
      <h2>Phonebook</h2>
      <InputText functionControlChange={handleSearchBoxChange} currentInputControl={nameToSearch} textDisplay={"filter shown with"}/>      
      <h2>Add a new person contact info</h2>
      <PersonForm
        textInput1={<InputText functionControlChange={handleNameChange} currentInputControl={newName} textDisplay={"name"}/>} 
        textInput2={<InputText functionControlChange={handleNumberChange} currentInputControl={newNumber} textDisplay={"number"}/>} 
        submitButton={<SubmitButton onClickFunc={addPerson} text={"add"}/>}
      />
      <h2>Numbers</h2>
      <PeopleDisplay personsArray={persons} functionDelete={deletePerson} filterToSearch={filterToSearch}/>
    </div>
  )
}

export default App