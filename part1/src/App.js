import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const Display = props => <div>{props.value}</div>


const App = () => {

  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => {
    return () => {
      setValue(newValue)
    }
  }
  

  return (
    <div>
      <Display value={value}/>
      <Button handleClick={setToValue(1000)} text="thousand" />
      <Button handleClick={setToValue(0)} text="reset" />
      <Button handleClick={setToValue(value + 1)} text="increment" />

    </div>
  )



//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

  

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L")) 
//     // setClicks({ ...clicks, left: clicks.left + 1 })
//     setLeft(left + 1)
//     console.log(allClicks)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"))
//     // setClicks({...clicks, right: clicks.right + 1})
//     setRight(right + 1)
//     console.log(allClicks)
//   }


// const Button = ({handleClick, text}) => <button onClick={handleClick}> {text} </button>

//   const History = (props) => {
//     if (props.allClicks.length === 0) {
//       return (
//         <div>
//           the app is used by pressing the buttons
//         </div>
//       )
//     }
//     return (
      
//       <div>
//         button press history: {props.allClicks.join(' ')}
//       </div>
//     )
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text="left"/>
//       <Button handleClick={handleRightClick} text="right"/>
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )







  // const [ counter, setCounter ] = useState(0)

  // const increaseByOne = () => setCounter(counter + 1)
  // const decreaseByOne = () => setCounter(counter - 1)
  // const setToZero = () => setCounter(0)

  // const Display = ({counter}) => <div>{counter}</div>
    
  

  // const Button = ({handleClick, text}) => <button onClick={handleClick}> {text} </button>

  // return (
  //   <div>
  //     <Display counter={counter}/>
  //     <Button handleClick={increaseByOne} text={"plus"}/>
  //     <br></br>
  //     <Button handleClick={setToZero} text={"zero"}/>
  //     <br></br>
  //     <Button handleClick={decreaseByOne} text={"minus"}/>

  //   </div>
  // )
}
export default App