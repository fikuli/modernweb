import React from 'react'
import { Table } from 'react-bootstrap'

const UserDetails = ({ selectedUser }) => {

  if (!selectedUser) {
    return null
  }


  console.log(selectedUser)
  return (
    <div>
      <h1>{selectedUser.name}</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>added blogs</th>
          </tr>
        </thead>
        <tbody>
          {selectedUser.blogs.map(blog =>
            <tr key={blog.id}>
              <td>
                {blog.title}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default UserDetails