import React from 'react'


const SearchBar = ({valueOfField, functionThatControlsChange}) => {
    // funcss(note.id)
    // anotherfunc()
    return (
        <input value={valueOfField} onChange={functionThatControlsChange}></input>
    )
  }
  
  export default SearchBar