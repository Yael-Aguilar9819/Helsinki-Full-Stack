import React, { useState } from 'react'


const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const sumAllIntsInList = (listOfInt) => listOfInt.reduce((accumulator, current) => accumulator + current)

const getAverage = (listOfCategories) => {
  const numberOf1Cat = listOfCategories[0]
  const numberOf2Cat = listOfCategories[1]
  const numberOf3Cat = listOfCategories[2]

  const valueOfCat1 = 1 
  const valueOfCat2 = 0
  const valueOfCat3 = -1

  return ((numberOf1Cat * valueOfCat1) + (numberOf2Cat * valueOfCat2) + (numberOf3Cat * valueOfCat3)) / sumAllIntsInList(listOfCategories)

}

const LabelInfo = ({text, valueToShow}) => {
  return (
    <p>{text} {valueToShow}</p>
  )
}


const ButtonIncreaseByOne = ({functionToCall, buttonText, valueToChange}) => {
  // console.log(valueToChange)
  return (
    <button onClick={() => functionToCall(valueToChange + 1)}>{buttonText}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 
  const listOfAllValues = [good, neutral, bad]

  return (
    <div>
      <Title text="Give feedback"/>
      <ButtonIncreaseByOne buttonText="good" functionToCall={setGood} valueToChange={good}/>
      <ButtonIncreaseByOne buttonText="neutral" functionToCall={setNeutral} valueToChange={neutral}/>
      <ButtonIncreaseByOne buttonText="bad" functionToCall={setBad} valueToChange={bad}/>
      <Title text="Statistics"/>
      <LabelInfo text="good" valueToShow={good}/>
      <LabelInfo text="neutral" valueToShow={neutral}/>
      <LabelInfo text="bad" valueToShow={bad}/>
      <LabelInfo text="all" valueToShow={sumAllIntsInList(listOfAllValues)}/>
      <LabelInfo text="average" valueToShow={getAverage(listOfAllValues)}/>
      <LabelInfo text="positive" valueToShow={(good / sumAllIntsInList(listOfAllValues)) * 100 + "%"}/>
    </div>
  )
}

export default App