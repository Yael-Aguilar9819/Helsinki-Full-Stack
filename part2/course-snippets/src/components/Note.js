import React from 'react'
// import {funcss, anotherfunc} from './tryds'

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'
 
  const buttonStyle = {
    marginLeft: 5,
    maxHeight: 20
  }

  return (
    <li className='note'>
      {note.content}
      <button onClick={toggleImportance} style={buttonStyle}>{label}</button>
    </li>
  )
}

export default Note