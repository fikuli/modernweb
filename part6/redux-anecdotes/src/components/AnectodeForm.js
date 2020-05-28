import React from 'react'
import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import {showAddNotification, init} from '../reducers/notificationReducer'


const AnectodeForm = () => {

  const dispatch = useDispatch()

  const create = (event) => {
    event.preventDefault()
    console.log('create')

    const content = event.target.anectode.value
    event.target.anectode.value = ''
    dispatch(createNew(content))
    dispatch(showAddNotification(content))

    setTimeout(() => {
      dispatch(init())
    }, 5000)

  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name="anectode" /></div>
        <button>create</button>
      </form>
    </div>
  )

}

export default AnectodeForm