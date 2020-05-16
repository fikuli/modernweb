import React, { useState } from 'react'

const SearchForm = (props) => {
    const [ newName, setNewName ] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
        props.setNewFilter(event.target.value)
        props.sifirla(-1)
      }
    
    return(
        <div>
            name: <input value = {newName} onChange={handleNameChange}/>
        </div>
    )

}

export default SearchForm