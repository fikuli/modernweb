const initialState = null


let timeOutId = null

export const updateMessage = (message) => {
  return {
    type: 'UPDATE',
    data: { message }
  }
}

export const showVoteNotification = (content, timeout) => {

  if(timeOutId !== null) clearTimeout(timeOutId)

  return async dispatch => {
    dispatch({
      type: 'UPVOTED',
      data: { content }
    }
    )

    timeOutId = await setTimeout(() => {
      dispatch({
        type: 'INIT',
        data: {}
      })
    }, timeout*1000)

  }
}

export const showAddNotification = (content, timeout) => {

  if(timeOutId !== null) clearTimeout(timeOutId)

  return async dispatch => {
    dispatch({
      type: 'ADDED',
    data: { content }
    }
    )

    timeOutId = await setTimeout(() => {
      dispatch({
        type: 'INIT',
        data: {}
      })
    }, timeout*1000)

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