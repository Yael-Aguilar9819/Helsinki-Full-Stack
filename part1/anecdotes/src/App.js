import React, { useState } from 'react'



const ButtonSelectRandomNumber = ({text, functionThatChangeState}) => {
  return (
    <div>
    <button onClick={functionThatChangeState}>{text}</button>
    </div>
  )
}


const randomNumberFrom0ToRange = (numberExceptTheLastOne) => Math.floor(Math.random() * numberExceptTheLastOne)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)

  const changeSelection = () => {
    setSelected(randomNumberFrom0ToRange(anecdotes.length))
  }

  return (
    <div>
      {anecdotes[selected]}
      <ButtonSelectRandomNumber text="Next anecdote" functionThatChangeState={changeSelection}/>
    </div>
  )
}

export default App