import axios from 'axios'
const baseUrl = '/api/blogs'


let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}


const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}


const update = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  console.log(`${baseUrl}/${id.toString()}`)
  console.log(newObject)

  const response = await axios.put(`${baseUrl}/${id.toString()}`, newObject, config)
  return response.data
}

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${id.toString()}`, config)
  return response.data
}



export default { getAll, create, setToken, update, remove }