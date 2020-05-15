import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <h1>{props.value}</h1>
const Statistic = props => <tr><td>{props.name}</td><td>{props.value}</td></tr>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {

  if(props.all === 0) return <>No feedback given</>
  
  return(
    <table>
      <tbody>
        <Statistic name="good" value={props.good} />
        <Statistic name="neutral" value={props.neutral} />
        <Statistic name="bad" value={props.bad} />
        <Statistic name="all" value={props.all} />
        <Statistic name="average" value={props.average} />
        <Statistic name="positive" value={props.posaverage + " %"} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)

  const goodClick = () =>{
    setGood(good+1)
    setAll(all+1)
    setSum(sum+1)
  }

  const neutralClick = () =>{
    setNeutral(neutral+1)
    setAll(all+1)
  }

  const badClick = () =>{
    setBad(bad+1)
    setAll(all+1)
    setSum(sum-1)
  }

  let average = sum/all;

  let posaverage = good/all;

  return (
    <div>
      <Display value="Give Feedback" />
      <Button handleClick={goodClick} text="good" />
      <Button handleClick={neutralClick} text="neutral" />
      <Button handleClick={badClick} text="bad" />
      <Display value="Statistics" />
      <Statistics good={good} neutral={neutral} all={all} bad={bad} average={average} posaverage={posaverage}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)