import React from 'react';

const Header = ({ course }) => {
    return (
      <h1>{course}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Total = ({ course }) => {
    let sum = course.reduce((accumulator, currentValue)=>accumulator+currentValue.exercises,0 )
  
    return(
      <p><b>total of {sum} exercises</b></p>
    ) 
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.map(item=><Part key={item.id} part={item} />)}
      </div>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name} />
        <Content course={course.parts} />
        <Total course={course.parts} />
      </div>
    )
  }
  
  export default Course