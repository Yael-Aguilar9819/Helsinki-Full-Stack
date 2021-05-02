import React from 'react'

const Header = (props) => {
  return (
    <>
    <h1>{props.course.name}</h1>
    </>
  )
}


const Part = (props) => {
  return (
    <p>{props.object_part.name} {props.object_part.exercises}</p>
  )
}

const Content = (props) => {
  const parts_of_course = props.course.parts
  let array_of_p = []
  for (let i = 0; i < parts_of_course.length; i++) {
    array_of_p.push(
      <Part key={parts_of_course[i].name} object_part={parts_of_course[i]}/>
      )
  }
  return (
    <>
    {array_of_p}
    </>
  )

}



const Total = (props) => {
  const array_of_numbers = props.course.parts.map(obj => obj.exercises)
  return (
    <>
    <p>Number of exercises {array_of_numbers.reduce((a, b) => a + b, 0)}</p>
    </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

export default App