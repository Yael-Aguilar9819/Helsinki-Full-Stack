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

export {Course}