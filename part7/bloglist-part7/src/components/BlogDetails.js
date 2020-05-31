import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import blogService from '../services/blogs'

const BlogDetails = ({ selectedBlog, updateBlog }) => {
  const [bblog, setBblog] = useState(selectedBlog)
  const [comment, setComment] = useState('')

  if (!selectedBlog) {
    return null
  }

  const like = async () => {
    const newObject = { ...selectedBlog }
    newObject.likes += 1
    setBblog(newObject)
    await updateBlog(selectedBlog.id, newObject)
  }

  if (!selectedBlog.comments) {
    selectedBlog.comments = []
  }

  const addComment = async () => {

    const newObject = { ...selectedBlog }
    newObject.comments = newObject.comments.concat(comment)
    setBblog(newObject)

    console.log('-------------xxxxxxxxx')
    console.log(selectedBlog)
    console.log(newObject)

    await updateBlog(selectedBlog.id, newObject)
    setComment('')
  }


  return (
    <div>
      <h1></h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>{selectedBlog.title}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><a href={selectedBlog.url}>{selectedBlog.url}</a></td></tr>
          <tr><td>has {selectedBlog.likes} likes <button onClick={like}>like</button></td></tr>
          <tr><td>added by {selectedBlog.user.name}</td></tr>
        </tbody>
      </Table>

      <h1>add comment</h1>


      <input
        id='comment'
        type="text"
        value={comment}
        name="Comment"
        onChange={({ target }) => setComment(target.value)}
      />
      <button onClick={addComment}>add comment</button>

      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>comments</th>
            </tr>
          </thead>
          <tbody>
            {selectedBlog.comments.map((blog, i) =>
              <tr key={blog.id + ' ' + i}>
                <td>
                  {blog}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default BlogDetails