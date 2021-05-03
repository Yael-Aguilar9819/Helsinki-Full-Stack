import React, { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const Display = ({counter}) => <div>{counter}</div>
    
  

  const Button = ({handleClick, text}) => <button onClick={handleClick}> {text} </button>

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text={"plus"}/>
      <br></br>
      <Button handleClick={setToZero} text={"zero"}/>
      <br></br>
      <Button handleClick={decreaseByOne} text={"minus"}/>

    </div>
  )
}
export default App