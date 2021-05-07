import React, { useState } from 'react'

const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const ButtonUsingFunction = ({text, functionThatChangeState}) => {
  return (
    <>
    <button onClick={functionThatChangeState}>{text}</button>
    </>
  )
}

const VoteStatistic = ({numberOfVotes}) => {
  return (
    <p>Has {numberOfVotes} votes.</p>
  )
}

const randomNumberFrom0ToRange = (numberExceptTheLastOne) => Math.floor(Math.random() * numberExceptTheLastOne)

const createArrayFilledWith0 = (lengthOfArray) => Array(lengthOfArray).fill(0)

const getIndexOfBiggestArrayOfInt = (arrayOfInts) => {
  // arrayOfInts.reduce((currentBiggest, nextElem) => currentBiggest = Math.max(currentBiggest, nextElem))
  return arrayOfInts.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
}

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
  const [NB, setVotes] = useState(createArrayFilledWith0(anecdotes.length))
  // const NB = createArrayFilledWith0(anecdotes.length)

  const changeSelectionRandomly = () => {
    setSelected(randomNumberFrom0ToRange(anecdotes.length))
  }

  const biggestNumberInArrayIndex = getIndexOfBiggestArrayOfInt(NB)

  const vote = () => {
    const copy = [...NB]
    copy[selected] += 1 
    setVotes(copy)
  }

  return (
    <div>
      <Title text="Anecdote of the day."/>
      {anecdotes[selected]}
      <VoteStatistic numberOfVotes={NB[selected]}/>
      <ButtonUsingFunction text="Vote" functionThatChangeState={vote}/>
      <ButtonUsingFunction text="Next anecdote" functionThatChangeState={changeSelectionRandomly}/>
      <Title text="Anecdote with most votes"/>
      {anecdotes[biggestNumberInArrayIndex]}
      <VoteStatistic numberOfVotes={NB[biggestNumberInArrayIndex]}/>
    </div>
  )
}

export default App