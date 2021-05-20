import React from 'react'


const SearchBar = ({valueOfField, functionThatControlsChange}) => {
    return (
        <input value={valueOfField} onChange={functionThatControlsChange}></input>
    )
  }
  
  export default SearchBar