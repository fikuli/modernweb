import loginService from '../services/login'

const initialState = null

export const updateUser = (user) => {
  return {
    type: 'UPDATE_USER',
    data: { user }
  }
}

export const userLogin = (username, password) => {
  return async dispatch => {
    try {
      const user = await loginService.login({
        username, password,
      })
      dispatch({
        type: 'LOGIN',
        data: user,
      })
    } catch (e) {
      const a = Date.now()
      const user = { date: a, wrongPwd:true }
      dispatch({
        type: 'LOGIN',
        data: user,
      })
    }

  }
}



const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_USER':
    return action.data.user
  case 'LOGIN':
    return action.data
  default: return state
  }
}

export default userReducer