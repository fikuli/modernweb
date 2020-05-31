const initialState = null

export const updateUser = (user) => {
  return {
    type: 'UPDATE_USER',
    data: { user }
  }
}


const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_USER':
    return action.data.user
  default: return state
  }
}

export default userReducer