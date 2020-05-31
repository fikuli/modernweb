import React from 'react'
import { Alert } from 'react-bootstrap'

const Notification = ({ message }) => {

  const errorStyle = {
    color: 'rgb(0, 0, 255)',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderTadius: 5,
    padding: 10,
    marginBottom: 10
  }


  if (message === null) {
    return null
  }

  return (
    <div>
      <Alert variant="info">
        {message}
      </Alert>
    </div>
  )
}

export default Notification