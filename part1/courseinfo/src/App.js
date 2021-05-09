import React from 'react'

const Header = ({course}) => {
  return (
    <>
    <h1>{course.name}</h1>
    </>
  )
}


const Part = (props) => {
  return (
    <p>{props.object_part.name} {props.object_part.exercises}</p>
  )
}


const Content = ({course}) => {
  const partsOfCourse = course.parts
  const arrayOfParts = partsOfCourse.map(part => <Part key={part.name} object_part={part}/>)

  return (
    <>
    {arrayOfParts}
    </>
  )

}


const Course = ({course}) => {
  return(
  <>
    <Header course={course}/>
    <Content course = {course}/>
    <Total course = {course}/>
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
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <Course course={course} />
    // <div>
    //   <Header course={course}/>
    //   <Content course = {course}/>
    //   <Total course = {course}/>
    // </div>
  )
}

export default App