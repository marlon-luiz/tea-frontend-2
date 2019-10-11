import React from 'react'
import ReactDOM from 'react-dom'
import base64 from 'base-64'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import App from './App'

library.add(faPlus)

const appKey = base64.encode('tea-routine')

if (!window.hasOwnProperty('user'))
  Object.defineProperty(window, 'user', {
    get() {
      // const encoded = window.localStorage.getItem(appKey)

      // return encoded ? JSON.parse(base64.decode(encoded)) : null
      return { id: 1 }
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
