import React, { useState } from 'react'
import { useField } from '../hooks/index'
import { omit } from 'lodash';

import {
  useHistory
} from "react-router-dom"

const CreateNew = (props) => {

  const history = useHistory()

  const [btn, setBtn] = useState(0)

  const content = useField('content')
  const author = useField('author')
  const info = useField('info')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (btn === 0) {
      props.addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
      props.setMessage(`new anecdote added: ${content.value}`);
      history.push('/')
    }
    else{
      content.clear()
      author.clear()
      info.clear()
    }
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...omit(content, 'clear')} />
        </div>
        <div>
          author
          <input {...omit(author, 'clear')} />
        </div>
        <div>
          url for more info
          <input {...omit(info, 'clear')} />
        </div>
        <button onClick={() => (setBtn(0))}>create</button>
        <button onClick={() => (setBtn(1))}>reset</button>
      </form>
    </div>
  )

}
export default CreateNew