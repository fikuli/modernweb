import React, { useState } from 'react'

const Filter = (props) => {

    return(
        <div>
          search: <input value = {props.newSearch} onChange={props.handleSearchChange}/>
        </div>
    )
}

export default Filter