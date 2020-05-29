import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  
  const response = await axios.get(baseUrl)
  console.log('viiiiy')
  console.log(response.data)
  return response.data
}

const createAnectode = async (content) => {
  const object = { content: content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const upVoteAnectode = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id.toString()}`, newObject)
  return response.data
}


export default { getAll, createAnectode, upVoteAnectode }