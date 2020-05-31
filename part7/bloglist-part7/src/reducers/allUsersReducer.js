import userService from '../services/users'

const initialState = []


export const getAllUsers = () => {

  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'ALL_USERS',
      data: users,
    })
  }
}


const allUsersReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ALL_USERS':
    return action.data
  default: return state
  }
}

export default allUsersReducer