import React, { useState } from 'react'


const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const TableRowWrapper = ({WrappedComponent}) => {
  return (
    <tr>
      <td>
        {WrappedComponent}
      </td>
    </tr>
  )
}


const Statistics = ({listOfAllValues}) => {
  if (listOfAllValues.reduce((accumulator, current) => accumulator + current) === 0) return null

  const goodCat1 = listOfAllValues[0]
  const neutralCat2 = listOfAllValues[1]
  const badCat3 = listOfAllValues[2]

  return (
    <table>
      <tbody>
      <TableRowWrapper WrappedComponent={<Title text="Statistics"/>}/>
      <TableRowWrapper WrappedComponent={<Statistic text="good" valueToShow={goodCat1}/>}/>
      <TableRowWrapper WrappedComponent={<Statistic text="neutral" valueToShow={neutralCat2}/>}/>
      <TableRowWrapper WrappedComponent={<Statistic text="bad" valueToShow={badCat3}/>}/>
      <TableRowWrapper WrappedComponent={<Statistic text="all" valueToShow={sumAllIntsInList(listOfAllValues)}/>}/>
      <TableRowWrapper WrappedComponent={<Statistic text="average" valueToShow={getAverage(listOfAllValues)}/>}/>
      <TableRowWrapper WrappedComponent={<Statistic text="positive" valueToShow={(goodCat1 / sumAllIntsInList(listOfAllValues)) * 100 + "%"}/>}/>
      </tbody>
    </table>
  )
}


const sumAllIntsInList = (listOfInt) => {
  const valueAtEnd = listOfInt.reduce((accumulator, current) => accumulator + current)
  if (valueAtEnd === 0) {return 1}
  return valueAtEnd
}

const getAverage = (listOfCategories) => {
  const numberOf1Cat = listOfCategories[0]
  const numberOf2Cat = listOfCategories[1]
  const numberOf3Cat = listOfCategories[2]

  const valueOfCat1 = 1 
  const valueOfCat2 = 0
  const valueOfCat3 = -1

  return ((numberOf1Cat * valueOfCat1) + (numberOf2Cat * valueOfCat2) + (numberOf3Cat * valueOfCat3)) / sumAllIntsInList(listOfCategories)
}

const Statistic = ({text, valueToShow}) => {
  return (
    <p style={{margin: 0}}>{text} {valueToShow}</p>
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
      <Statistics listOfAllValues={listOfAllValues}/>
    </div>
  )
}

export default App