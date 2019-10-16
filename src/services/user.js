import api from './api'

const getUsers = async () => {
  const response = await api.get('users')

  return response.data
}

const addUser = async data => {
  const response = await api.post('users', data)

  return response.data
}

export { getUsers, addUser }
