const initialState = null

export const updateErrorMessage = (message) => {
  return {
    type: 'UPDATE_ERROR_MESSAGE',
    data: { message }
  }
}


const errorMessageReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_ERROR_MESSAGE':
    return action.data.message
  default: return state
  }
}

export default errorMessageReducer