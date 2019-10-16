import axios from 'axios'
import _ from 'lodash'

const api = axios.create({
  baseURL: 'https://tea-backend.herokuapp.com'
})

api.interceptors.request.use(config => {
  const user = _.get(window.user, 'id', null)
  config.headers.user = user

  return config
}, window.console.log)

export default api
