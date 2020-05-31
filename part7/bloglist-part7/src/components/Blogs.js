import React from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import { Table } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'


const Blogs = ({ user, createBlog, blogs, updateBlog, deleteBlog }) => {
  const blogsRef = React.createRef()


  const createBlogx = async (title, author, url) => {
    createBlog(title, author, url)
    blogsRef.current.toggleVisibility()
  }

  blogs.sort(function (a, b) {
    return b.likes - a.likes
  })

  /** 
      <div className="blogsClass">
        {blogs.map(blog =>
          <Blog user={user} key={blog.id} blog={blog} updateBlog={updateBlog} deleteBlog={deleteBlog} />
        )}
      </div>
      ****/

  return (
    <div>

      <Togglable buttonLabel='create new' ref={blogsRef}>
        <BlogForm createBlog={createBlogx} />
      </Togglable>


      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>blogs</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog =>
              <tr key={blog.id}>
                <td>
                  <Link to={`/blogs/${blog.id}`}>
                    {blog.title}
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>



    </div>

  )
}

export default Blogs