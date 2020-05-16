import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')


  const addName = (event) => {
    event.preventDefault()

    function contains(person) { 
      return person.name === newName;
    }

    if(persons.findIndex(contains) != -1) {
      window.alert(`${newName} is already added to phonebook`);
      return
    }

    const person = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(person))

    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().startsWith(newSearch.toLowerCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      

        <div>
          search: <input value = {newSearch} onChange={handleSearchChange}/>
        </div>
      <h2>Add new</h2>
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
      <h2>Numbers</h2>
        {personsToShow.map(person=> <Person key = {person.name} person = {person} />)}
    </div>
  )
}

export default App