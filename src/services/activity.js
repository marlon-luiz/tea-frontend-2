import api from './api'

const getActivities = async autistId => {
  const response = await api.get(`autists/${autistId}/activities`)

  return response.data
}

const findActivity = async id => {
  const response = await api.get(`activities/${id}`)

  return response.data
}

const addActivity = async data => {
  const response = await api.post('activities', data)

  return response.data
}

const updateActivity = async (id, data) => {
  const response = await api.put(`activities/${id}`, data)

  return response.data
}

const deleteActivity = async id => {
  const response = await api.delete(`activities/${id}`)

  return response.data
}

const concludeActivity = async id => {
  const response = await api.put(`activities/${id}/status`)

  return response.data
}

export {
  getActivities,
  findActivity,
  addActivity,
  updateActivity,
  deleteActivity,
  concludeActivity
}
