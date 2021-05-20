import React, { useState, useEffect } from 'react'
import SubmitButton from './components/SubmitButton'
import InputText from './components/InputText'
import PersonForm from './components/PersonForm'
import PeopleDisplay from './components/PeopleDisplay'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [nameToSearch, setNameToSearch] = useState('')

  
  const getJson = async url => {
    const resp = await fetch(url)
    if (resp.status !== 200) {
      throw new Error(`cannot fetch data with error code: ${resp.status}`);
    }
    return resp.json();
  }
  useEffect(() => {
    getJson('http://localhost:3001/persons')
      .then(personsJson => setPersons(personsJson))
      .catch(err => {
        console.log(err)
      })
  }, [])

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