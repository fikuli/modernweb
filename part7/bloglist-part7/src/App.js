import React, { useEffect } from 'react'
import Notification from './components/Notification'
import { useDispatch, useSelector } from 'react-redux'

import Blogs from './components/Blogs'
import Login from './components/Login'
import blogService from './services/blogs'
import loginService from './services/login'
import { updateErrorMessage } from './reducers/errorMessageReducer'
import { updateUser } from './reducers/userReducer'
import { updateBlogs } from './reducers/blogsReducer'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      //setBlogs(blogs)
      dispatch(updateBlogs(blogs))
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogsappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(updateUser(user))
      //setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const logout = () => {
    window.localStorage.removeItem('loggedBlogsappUser')
    //setUser(null)
    dispatch(updateUser(null))
    blogService.setToken(null)
  }




  const createBlog = async (title, author, url) => {
    try {
      const blog = await blogService.create({
        title, author, url
      })

      const result = await blogService.getAll()
      //setBlogs(result)
      dispatch(updateBlogs(result))

      //setErrorMessage(`success: a new blog added - ${blog.title}`)
      dispatch(updateErrorMessage(`success: a new blog added - ${blog.title}`))
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
      await blogService.update(id, newObject)

      const result = await blogService.getAll()
      //setBlogs(result)
      dispatch(updateBlogs(result))

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
      await blogService.remove(id)

      const result = await blogService.getAll()
      //setBlogs(result)
      dispatch(updateBlogs(result))
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
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogsappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      //setUser(user)
      dispatch(updateUser(user))
    } catch (exception) {
      dispatch(updateErrorMessage('error: wrong credentials'))
      //setErrorMessage('error: wrong credentials')
      setTimeout(() => {
        dispatch(updateErrorMessage(null))
        //setErrorMessage(null)
      }, 5000)
    }
  }

  const errorMessage = useSelector((eleman) => eleman.error)

  const user = useSelector((eleman) => eleman.user)

  const blogs = useSelector((eleman) => eleman.blogs)

  if (user === null) {
    return (
      <div className="loginClass">
        <Notification message={errorMessage} />
        <Login login={login} />
      </div>
    )
  }

  return (
    <div>
      <Notification message={errorMessage} />
      <Blogs user={user} logout={logout} createBlog={createBlog} blogs={blogs} updateBlog={updateBlog} deleteBlog={deleteBlog} />

    </div>
  )
}

export default App