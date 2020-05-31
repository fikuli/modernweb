import { createStore, combineReducers,applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import errorMessageReducer from './reducers/errorMessageReducer'
import userReducer from './reducers/userReducer'
import blogsReducer from './reducers/blogsReducer'


const reducer = combineReducers({
  error: errorMessageReducer,
  user: userReducer,
  blogs: blogsReducer
})


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store