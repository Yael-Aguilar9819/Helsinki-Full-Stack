import React from 'react'

const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}


const Part = (props) => {
  return (
    <p>{props.object_part.name} {props.object_part.exercises}</p>
  )
}

const Content = (props) => {
  let array_of_p = []
  for (let i = 0; i < props.parts_of_course.length; i++) {
    // array_of_p.push({props.parts_of_course} {props.exercise_parts[i]})
    array_of_p.push(
      // <Part key={props.parts_of_course[i]} 
      // part_of_course={props.parts_of_course[i]} 
      // exercise_part={props.exercise_parts[i]}/>
      <Part key={props.parts_of_course[i].name} object_part={props.parts_of_course[i]}/>
      )
  }
  return (
    <>
    {array_of_p}
    </>
  )

}



const Total = (props) => {
  const array_of_numbers = props.parts_of_course.map(obj => obj.exercises)
  return (
    <>
    <p>Number of exercises {array_of_numbers.reduce((a, b) => a + b, 0)}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  let parts_of_course = [part1, part2, part3]

  return (
    <div>
      <Header course={course}/>
      <Content parts_of_course={parts_of_course}/>
      <Total parts_of_course = {parts_of_course}/>
    </div>
  )
}

export default App