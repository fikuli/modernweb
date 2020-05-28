import anecdoteService from '../services/anectodes'

const _ = require("lodash")


const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const upvote = (xxx) => {
  return async dispatch => {
    const newNote = await anecdoteService.upVoteAnectode(xxx.id, xxx)
    dispatch({
      type: 'UPVOTE',
      data: newNote
    })
  }

}

export const createNew = (content) => {

  return async dispatch => {
    const newNote = await anecdoteService.createAnectode(content)
    dispatch({
      type: 'CREATENEW',
      data: newNote,
    })
  }
}

export const initAns = () => {


  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch({
      type: 'INITANECDOTES',
      data: notes,
    })
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'UPVOTE':
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        votes: noteToChange.votes + 1
      }
      const aa = state.map(note =>
        note.id !== id ? note : changedNote
      )
      const sorted = _.orderBy(aa, ['votes'], ['desc']);
      return sorted
    case 'CREATENEW':
      const abim = {
        content: action.data.content,
        id: action.data.id,
        votes: action.data.votes
      }
      const ab = [...state, abim]
      const ret = _.orderBy(ab, ['votes'], ['desc']);
      return ret
    case 'INITANECDOTES':
      return action.data
    default: return state
  }
}

export default anecdoteReducer