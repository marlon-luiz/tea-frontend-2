import api from './api'

const getAutists = async () => {
  const response = await api.get('autists')

  return response.data
}

const addAutist = async data => {
  const response = await api.post('autists', data)

  return response.data
}

export { getAutists, addAutist }
