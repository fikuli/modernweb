import React, {useEffect} from 'react'
import AnectodeForm from './components/AnectodeForm'
import AnectodeList from './components/AnectodeList'
import Notification from './components/Notification'
import { initAns } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initAns())
  }, [dispatch])

  return (
    <div>
      <Notification />
      <AnectodeList />
      <AnectodeForm />
    </div>
  )
}

export default App