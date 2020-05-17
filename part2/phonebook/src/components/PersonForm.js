import React, { useState } from 'react'
import phoneService from '../services/phonebook'

const PersonForm = (props) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const addName = (event) => {
      event.preventDefault()
  
      function contains(person) { 
        return person.name === newName;
      }
  
      if(props.persons.findIndex(contains) != -1) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          console.log(newName, '  hhe ', newNumber)
          const eleman = props.persons.find(n => n.name === newName)

          console.log(eleman)
          const updatedEleman = {...eleman, number: newNumber}
          console.log(updatedEleman)

          phoneService.update(eleman.id, updatedEleman)
          .then(response=>{
            console.log(response)
            const uu = props.persons.map(n=>n.name!==newName?n:response)
            console.log(uu)
            props.copyPers(uu)
            setNewName('')
            setNewNumber('')
          })
        }
        setNewName('')
        setNewNumber('')
      }
      else{
        const person = {
          name: newName,
          number: newNumber
        }

        phoneService
        .create(person)
        .then(response => {
        props.copyPers(props.persons.concat(response))

        setNewName('')
        setNewNumber('')
      })
      }
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