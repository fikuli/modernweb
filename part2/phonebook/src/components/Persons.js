import React, { useState } from 'react'
import Person from './Person'

const Persons = (props) => {
    const personsToShow = props.persons.filter(person => person.name.toLowerCase().startsWith(props.newSearch.toLowerCase()))

    return(
        <>
            {personsToShow.map(person=> <Person key = {person.name} person = {person} />)}
        </>
    )
}

export default Persons