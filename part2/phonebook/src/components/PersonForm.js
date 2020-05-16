import React, { useState } from 'react'

const PersonForm = (props) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const addName = (event) => {
      event.preventDefault()
  
      function contains(person) { 
        return person.name === newName;
      }
  
      if(props.persons.findIndex(contains) != -1) {
        window.alert(`${newName} is already added to phonebook`);
        return
      }
  
      const person = {
        name: newName,
        number: newNumber
      }
  
      props.copyPers(props.persons.concat(person))

      setNewName('')
      setNewNumber('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }
    

    return(
        <form onSubmit={addName}>
        <div>
            name: <input value = {newName} onChange={handleNameChange}/>
          </div>
          <div>
            number: <input value = {newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
  
    )

}

export default PersonForm