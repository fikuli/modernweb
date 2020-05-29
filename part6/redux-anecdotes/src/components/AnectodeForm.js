import React from 'react'
import { connect } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import {showAddNotification} from '../reducers/notificationReducer'


const AnectodeForm = (props) => {

  const create = async (event) => {
    event.preventDefault()
    console.log('create')

    const content = event.target.anectode.value
    event.target.anectode.value = ''

    props.createNew(content)
    props.showAddNotification(content,5)
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

const mapDispatchToProps = {
  createNew,
  showAddNotification,
}


const ConnectedAnectodeForm = connect(null, mapDispatchToProps)(AnectodeForm)
export default ConnectedAnectodeForm

