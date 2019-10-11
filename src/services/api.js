import axios from 'axios'
import _ from 'lodash'

console.log(window.user)

const user = _.get(window.user, 'id', 1)

export default axios.create({
  baseURL: 'https://tea-backend.herokuapp.com',
  headers: {
    user
  }
})
