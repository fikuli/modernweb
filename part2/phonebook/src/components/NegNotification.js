import React from 'react'

const NegNotification = ({ message }) => {

    const errorStyle = {
        color: 'red',
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
      <div style={errorStyle}>
        {message}
      </div>
    )
  }

  export default NegNotification