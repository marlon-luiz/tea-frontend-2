import React from 'react'
import ReactDOM from 'react-dom'
import base64 from 'base-64'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import {
  faCalendarAlt,
  faPencilAlt,
  faPlus,
  faSignOutAlt,
  faTrash,
  faUser,
  faArrowCircleLeft
} from '@fortawesome/free-solid-svg-icons'

import App from './App'

library.add(
  far,
  faCalendarAlt,
  faPencilAlt,
  faPlus,
  faSignOutAlt,
  faTrash,
  faUser,
  faArrowCircleLeft
)

const appKey = base64.encode('tea-routine')

if (!window.hasOwnProperty('user'))
  Object.defineProperty(window, 'user', {
    get() {
      const encoded = window.localStorage.getItem(appKey)

      return encoded ? JSON.parse(base64.decode(encoded)) : null
    },
    set(value) {
      if (value === null) {
        window.localStorage.removeItem(appKey)
      } else {
        const encoded = base64.encode(JSON.stringify(value))

        window.localStorage.setItem(appKey, encoded)
      }
    }
  })

ReactDOM.render(<App />, document.getElementById('root'))
