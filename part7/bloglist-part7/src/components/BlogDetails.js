import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

const BlogDetails = ({ selectedBlog, updateBlog }) => {
  const [bblog, setBblog] = useState(selectedBlog)

  if (!selectedBlog) {
    return null
  }

  const like = async () => {
    const newObject = { ...selectedBlog }
    newObject.likes +=1
    setBblog(newObject)
    await updateBlog(selectedBlog.id, newObject)
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
    </div>
  )
}

export default BlogDetails