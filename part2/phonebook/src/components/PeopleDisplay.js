import React from 'react'
import PersonName from './PersonName'

const PeopleDisplay = ({personsArray, filterToSearch}) => {
    return (
        <ul>
        {personsArray.filter(filterToSearch()).map(person => <PersonName key={person.name} name={person.name} number={person.number}/>)}
      </ul>
    )
}
export default PeopleDisplay