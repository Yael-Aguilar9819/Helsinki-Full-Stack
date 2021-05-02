import React from 'react'

const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  let array_of_p = []
  for (let i = 0; i < props.parts_of_course.length; i++) {
    array_of_p.push(<p>{props.parts_of_course[i]} {props.exercise_parts[i]}</p>)

  }
    return (
      <>
      {array_of_p}
      </>
    )
  
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.exercises_array.reduce((a, b) => a + b, 0)}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 

  let parts_of_course = [part1, part2, part3]
  let exercises_array = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course}/>
      <Content parts_of_course={parts_of_course} exercise_parts={exercises_array}/>
      <Total exercises_array = {exercises_array}/>
    </div>
  )
}

export default App