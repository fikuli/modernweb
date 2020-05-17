import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import phoneService from './services/phonebook'

const App = () => {
  const [ persons, setPersons ] = useState([])

  const [ newSearch, setNewSearch ] = useState('')

  const copyPers = (eleman) =>{
    console.log(eleman)
    setPersons(eleman)
  }

  useEffect(() => {
    console.log('effect')
    phoneService
    .getAll()
    .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewSearch={setNewSearch}/>
      <h2>Add new</h2>
      <PersonForm persons={persons} copyPers={copyPers}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newSearch={newSearch} setPersons={setPersons}/>
    </div>
  )
}

export default App