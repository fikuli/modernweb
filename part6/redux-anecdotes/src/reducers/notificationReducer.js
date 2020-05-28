const initialState = null


export const updateMessage = (message) => {
  return {
    type: 'UPDATE',
    data: { message }
  }
}

export const showVoteNotification = (content) => {
  return {
    type: 'UPVOTED',
    data: { content }
  }
}

export const showAddNotification = (content) => {
  return {
    type: 'ADDED',
    data: { content }
  }
}

export const init = () => {
  return {
    type: 'INIT',
    data: {}
  }
}



const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'UPDATE':
      return action.data.content
    case 'UPVOTED':
      return `you have upvoted "${action.data.content}"`
    case 'ADDED':
      return `you have created "${action.data.content}"`
    case 'INIT':
      return null
    default: return state
  }
}

export default notificationReducer