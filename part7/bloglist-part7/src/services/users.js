import axios from 'axios'
const baseUrl = '/api/users'


let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}


export default { getAll, setToken }