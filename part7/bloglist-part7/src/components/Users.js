import React from 'react'
import { Table } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

const Users = ({ allUsers }) => {

  console.log(allUsers)
  return (
    <div>
      <h1>users</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Number of blogs</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map(user =>
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>
                  {user.name}
                </Link>
              </td>
              <td>
                {user.blogs.length}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Users