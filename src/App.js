import React from 'react'
import _ from 'lodash'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import GlobalStyle from './GlobalStyle'

import Login from './components/Login'
import UserForm from './components/User/Form'
import Main from './components/Main'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <>
        <Switch>
          <Route
            path="/login"
            render={props => {
              const userId = _.get(window.user, 'id')

              if (!userId) return <Login {...props} />

              props.history.push('/')
            }}
          />
          <Route
            path="/users/add"
            render={props => {
              const userId = _.get(window.user, 'id')

              if (!userId) return <UserForm {...props} />

              props.history.push('/')
            }}
          />
          <Route
            path="/"
            render={props => {
              const userId = _.get(window.user, 'id')

              if (userId) return <Main {...props} />

              props.history.push('/login')
            }}
          />
        </Switch>
        <GlobalStyle />
      </>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
