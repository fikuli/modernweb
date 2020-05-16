import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import Results from './components/Results'

const App = () => {
  const [ results, setResults ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const [ nerden, setNerden] = useState(-1)


  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setResults(response.data)
      })
  }, [])

  console.log(newFilter)

  const sifirla = (hede) =>{
    setNerden(hede)
  }

  const filteredresults = results.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <SearchForm setNewFilter={setNewFilter} nerden={nerden} sifirla={sifirla}/>
      <Results results={filteredresults} nerden={nerden} sifirla={sifirla}/>
    </div>
  )
}

export default App