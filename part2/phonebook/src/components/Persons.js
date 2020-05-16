import React, { useState } from 'react'
import Person from './Person'

const Persons = (props) => {
    return(
        <>
        {props.personsToShow.map(person=> <Person key = {person.name} person = {person} />)}
        </>
    )
}

export default Persons