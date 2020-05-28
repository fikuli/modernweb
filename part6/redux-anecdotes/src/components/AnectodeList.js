import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { upvote } from '../reducers/anecdoteReducer'
import { showVoteNotification, init } from '../reducers/notificationReducer'
import Filter from './Filter'

const _ = require("lodash")


const AnectodeList = () => {

  
  const anecdotes = useSelector(({anecdotes, notification, filter})=>{
    console.log(anecdotes)
    console.log(notification)
    console.log(filter)
    return anecdotes.filter(anectode=>_.startsWith(anectode.content.toLowerCase(), filter.toLowerCase()))
  })

  

  const dispatch = useDispatch()

  const vote = (id, content) => {
    console.log('vote', id)
    dispatch(upvote(id))
    dispatch(showVoteNotification(content))

    setTimeout(() => {
      dispatch(init())
    }, 5000)
  }


  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}


export default AnectodeList