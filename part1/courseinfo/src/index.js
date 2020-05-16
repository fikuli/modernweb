import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  const items = []
  
  props.course.parts.forEach(value=>{
    items.push(<Part part={value} />)
  })

  return(
    <div>
      {items}
    </div>
  )
}


const Total = (props) => {
  let total = 0;

  props.course.parts.forEach(value=>{
    total+=value.exercises
  })

  return(
    <p>Number of exercises {total}</p>
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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))