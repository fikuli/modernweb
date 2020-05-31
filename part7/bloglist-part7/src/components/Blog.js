import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Blog = ({ user, blog, updateBlog, deleteBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }


  const [bblog, setBblog] = useState(blog)

  const [visible, setVisible] = useState(false)
  const [view, setView] = useState('view')

  const like = async () => {
    const newObject = { ...bblog }
    newObject.likes +=1
    setBblog(newObject)
    await updateBlog(bblog.id, newObject)
  }

  const showDetails = () => {
    if (!visible) setView('hide')
    else setView('view')
    setVisible(!visible)
  }

  const deleteEntry = () => {
    if (window.confirm(`Delete ${bblog.title}?`)) {
      deleteBlog(bblog.id)
    }
  }

  console.log(user)
  console.log(bblog)

  if (visible && user.username === bblog.user.username) {
    return (
      <div style={blogStyle} className='blog'>
        <p>{bblog.title} - {bblog.author} <Button onClick={showDetails}>{view}</Button></p>
        <p>{bblog.url}</p>
        <p>likes {bblog.likes} <Button onClick={like}>like</Button></p>
        <p>{bblog.user.name}</p>
        <p><Button onClick={deleteEntry}>delete</Button></p>
      </div>
    )
  }
  else if(visible){
    return (
      <div style={blogStyle} className='blog'>
        <p>{bblog.title} - {bblog.author} <Button onClick={showDetails}>{view}</Button></p>
        <p>{bblog.url}</p>
        <p>likes {bblog.likes} <Button onClick={like}>like</Button></p>
        <p>{bblog.user.name}</p>
      </div>
    )
  }
  return (
    <div style={blogStyle} className='blog'>
      {bblog.title} - {bblog.author} <Button onClick={showDetails}>{view}</Button>
    </div>
  )
}
export default Blog
