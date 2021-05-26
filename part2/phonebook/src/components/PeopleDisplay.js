import React from 'react'
import PersonName from './PersonName'

//This is the component that display the list, then it renders another component with the info of each person
const PeopleDisplay = ({personsArray, filterToSearch}) => {
    return (
        <ul>
        {personsArray.filter(filterToSearch()).map(person => <PersonName key={person.name} name={person.name} number={person.number}/>)}
      </ul>
    )
}
export default PeopleDisplay