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

    const newObjectPerson = {
      name : newName,
      number : newNumber
    }

    //We will change the functionaly of this part of the function
    const found = trueIfStringFound(newName, persons.map(person => person.name))
    if (found) {
      window.alert(`${newName} is already added to phonebook`) 
      return 0
    }


    //Changed this, so the personObject will have the ID from the start
    personsInfoService.sendNewPersonInfo(newObjectPerson)
      .then(resp => {
        newObjectPerson.id = resp.id
      })

    setPersons(persons.concat(newObjectPerson))
    setNewName("")
    setNewNumber("")
  }

  //This functions deletes person info, complete
  const deletePerson = (personObject) => {
    const userConfirmation = window.confirm(`Delete ${personObject.name}?`)
    //will suspend the funciton if the user says simply no
    if (!userConfirmation) return 0;

    personsInfoService.deletePerson(personObject.id)
      .then(resp => console.log("Success!"))
      .catch(err => console.log(err))

    const newPersons = persons.filter(person => person.id !== personObject.id);
    setPersons(newPersons);
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
      <PeopleDisplay personsArray={persons} deleteFunction={deletePerson} filterToSearch={filterToSearch}/>
    </div>
  )
}

export default App