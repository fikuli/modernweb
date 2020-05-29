import React from 'react'

const Anecdote = ({ selectedAnecdote }) => {
  return (
    <div>
      <h2>{selectedAnecdote.content} by {selectedAnecdote.author}</h2>
      <div>has {selectedAnecdote.votes} votes</div>
      <div>for more info see <a href={selectedAnecdote.info}>{selectedAnecdote.info}</a></div>
    </div>
  )
}


export default Anecdote