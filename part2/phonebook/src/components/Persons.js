import React from 'react'
import Person from './Person'
import phoneService from '../services/phonebook'


const Persons = (props) => {
    const personsToShow = props.persons.filter(person => person.name.toLowerCase().startsWith(props.newSearch.toLowerCase()))

    const deleteItem = (id) => {
        console.log('Id to delete is ', id)

        const eleman = props.persons.find(n => n.id === id)


        if (window.confirm(`Delete ${eleman.name}?`)) { 
            phoneService.remove(id)
            .then(response=>{
                console.log(response)
                props.setPersons(props.persons.filter(person=>person.id!==id))
            })

            
            
        }
    }

    return(
        <>
            {personsToShow.map(person=> <Person key = {person.name} person = {person} deletePerson={()=>deleteItem(person.id)}/>)}
        </>
    )
}

export default Persons