import React, { useState } from 'react'

const Filter = (props) => {
    const [ newSearch, setNewSearch ] = useState('')

    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
        props.setNewSearch(event.target.value)
    }

    return(
        <div>
          search: <input value = {newSearch} onChange={handleSearchChange}/>
        </div>
    )
}

export default Filter