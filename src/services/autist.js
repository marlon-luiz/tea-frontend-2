import api from './api'

const getAutists = async () => {
  const response = await api.get('autists')

  return response.data
}

const findAutist = async id => {
  const response = await api.get(`autists/${id}`)

  return response.data
}

const addAutist = async data => {
  const response = await api.post('autists', data)

  return response.data
}

const updateAutist = async (id, data) => {
  const response = await api.put(`autists/${id}`, data)

  return response.data
}

const deleteAutist = async id => {
  const response = await api.delete(`autists/${id}`)

  return response.data
}

export { getAutists, findAutist, addAutist, updateAutist, deleteAutist }
