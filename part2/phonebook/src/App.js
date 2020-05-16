import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }  ])

  const [ newSearch, setNewSearch ] = useState('')

  const personsToShow = persons.filter(person => person.name.toLowerCase().startsWith(newSearch.toLowerCase()))

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const copyPers = (eleman) =>{
    setPersons(eleman)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange}/>
      <h2>Add new</h2>
      <PersonForm persons={persons} copyPers={copyPers}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App