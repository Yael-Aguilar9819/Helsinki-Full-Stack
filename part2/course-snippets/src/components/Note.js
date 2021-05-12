import React from 'react'
// import {funcss, anotherfunc} from './tryds'


const Note = ({ note }) => {
  // funcss(note.id)
  // anotherfunc()
  return (
    <li>{note.content}</li>
  )
}

export default Note