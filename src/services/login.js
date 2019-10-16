import api from './api'

const login = async data => {
  const response = await api.get('users/login', {
    headers: data
  })

  return response.data
}

export { login }
