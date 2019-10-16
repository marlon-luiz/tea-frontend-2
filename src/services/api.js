import axios from 'axios'
import _ from 'lodash'

const user = _.get(window.user, 'id', null)

export default axios.create({
  baseURL: 'https://tea-backend.herokuapp.com',
  headers: {
    user
  }
})
