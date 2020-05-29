import React from 'react'
import { connect } from 'react-redux'
import { upvote } from '../reducers/anecdoteReducer'
import { showVoteNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

const _ = require("lodash")


const AnectodeList = (props) => {

  const vote = (id, content, votes) => {
    console.log('vote', id)
    const aaa = {
      id,
      content,
      votes
    }
    props.upvote(aaa)
    props.showVoteNotification(content, 5)

  }


  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {props.anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content, anecdote.votes)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { anecdotes: state.anecdotes.filter(anectode => _.startsWith(anectode.content.toLowerCase(), state.filter.toLowerCase())) }
}

const mapDispatchToProps = {
  upvote,
  showVoteNotification,
}

const ConnectedAnectodeList = connect(mapStateToProps, mapDispatchToProps)(AnectodeList)
export default ConnectedAnectodeList
