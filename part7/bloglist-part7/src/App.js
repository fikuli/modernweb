import React, { useEffect } from 'react'
import Notification from './components/Notification'
import { useDispatch, useSelector } from 'react-redux'

import Blogs from './components/Blogs'
import Users from './components/Users'
import Login from './components/Login'
import blogService from './services/blogs'
import userService from './services/users'
import { updateErrorMessage } from './reducers/errorMessageReducer'
import { updateUser, userLogin } from './reducers/userReducer'
import { initializeBlogs, createNewBlog, modifyBlog, removeBlog } from './reducers/blogsReducer'
import { getAllUsers } from './reducers/allUsersReducer'



import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'


const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((eleman) => eleman.user)

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(getAllUsers())
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogsappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(updateUser(user))
      //setUser(user)
      blogService.setToken(user.token)
      userService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    console.log('uuuuuuuuuu')
    console.log(user)
    if (user !== null) {
      if (user.wrongPwd) {
        dispatch(updateErrorMessage('error: wrong credentials'))
        //setErrorMessage('error: wrong credentials')
        setTimeout(() => {
          dispatch(updateErrorMessage(null))
          //setErrorMessage(null)
        }, 5000)
      }
      else {
        window.localStorage.setItem(
          'loggedBlogsappUser', JSON.stringify(user)
        )

        blogService.setToken(user.token)
        userService.setToken(user.token)
      }

    }
  }, [user])

  const logout = () => {
    window.localStorage.removeItem('loggedBlogsappUser')
    //setUser(null)
    dispatch(updateUser(null))
    blogService.setToken(null)
    userService.setToken(null)
  }


  const createBlog = async (title, author, url) => {
    try {
      dispatch(createNewBlog({
        title, author, url
      }))

      //setErrorMessage(`success: a new blog added - ${blog.title}`)
      dispatch(updateErrorMessage(`success: a new blog added - ${title}`))
      setTimeout(() => {
        dispatch(updateErrorMessage(null))
        //setErrorMessage(null)
      }, 5000)
    } catch (exception) {
      //setErrorMessage(`error: ${exception.response.data.error}`)
      dispatch(updateErrorMessage(`error: ${exception.response.data.error}`))
      setTimeout(() => {
        //setErrorMessage(null)
        dispatch(updateErrorMessage(null))
      }, 5000)
    }
  }


  const updateBlog = async (id, newObject) => {
    try {
      console.log('aaaaaaaaaaa')
      console.log(id)
      console.log(newObject)
      dispatch(modifyBlog(id, newObject))

    }
    catch (exception) {
      //setErrorMessage(`error: ${exception.response.data.error}`)
      dispatch(updateErrorMessage(`error: ${exception.response.data.error}`))
      setTimeout(() => {
        //setErrorMessage(null)
        dispatch(updateErrorMessage(null))
      }, 5000)
      return 0
    }
  }

  const deleteBlog = async (id) => {
    try {
      dispatch(removeBlog(id))
    }
    catch (exception) {
      dispatch(updateErrorMessage(`error: ${exception.response.data.error}`))
      //setErrorMessage(`error: ${exception.response.data.error}`)
      setTimeout(() => {
        dispatch(updateErrorMessage(null))
        //setErrorMessage(null)
      }, 5000)
      return 0
    }
  }

  const login = async (username, password) => {
    dispatch(userLogin(username, password))
  }

  const errorMessage = useSelector((eleman) => eleman.error)


  const blogs = useSelector((eleman) => eleman.blogs)
  const allUsers = useSelector((eleman) => eleman.allUsers)

  if (user === null || user.wrongPwd) {
    return (
      <div className="loginClass">
        <Notification message={errorMessage} />
        <Login login={login} />
      </div>
    )
  }
  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">blogs</Link>
        <Link style={padding} to="/users">users</Link>
      </div>

      <Notification message={errorMessage} />
      <h2>blogs</h2>
      <p>{user.name} logged in <button onClick={logout}>logout</button></p>
      <Switch>
        <Route path="/users">
          <Users allUsers={allUsers}/>
        </Route>
        <Route path="/">
          <Blogs user={user} createBlog={createBlog} blogs={blogs} updateBlog={updateBlog} deleteBlog={deleteBlog} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App