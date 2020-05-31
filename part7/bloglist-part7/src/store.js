import { createStore, combineReducers,applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import errorMessageReducer from './reducers/errorMessageReducer'
import userReducer from './reducers/userReducer'
import blogsReducer from './reducers/blogsReducer'
import allUsersReducer from './reducers/allUsersReducer'


const reducer = combineReducers({
  error: errorMessageReducer,
  user: userReducer,
  blogs: blogsReducer,
  allUsers: allUsersReducer
})


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store