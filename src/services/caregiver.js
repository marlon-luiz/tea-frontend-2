import api from './api'

const getCaregiver = async email => {
  const response = await api.get(`/caregivers?email=${email}`)

  return response.data
}

export { getCaregiver }
