import api from './api'

const getActivities = async autistId => {
  const response = await api.get(`autists/${autistId}/activities`)

  return response.data
}

const addActivity = async data => {
  const response = await api.post('activities', data)

  return response.data
}

export { getActivities, addActivity }
