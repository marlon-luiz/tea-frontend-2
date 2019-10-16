import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './components/Home'
import ActivityForm from './components/Activity/Form'
import AutistForm from './components/Autist/Form'
import AutistList from './components/Autist/List'
import UserForm from './components/User/Form'

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route
      path={['/activities/add', '/activities/:id']}
      component={ActivityForm}
    />
    <Route path={['/autists/add', '/autists/:id']} component={AutistForm} />
    <Route path="/autists" component={AutistList} />
    <Route path="/user/add" component={UserForm} />
    <Redirect to="/" />
  </Switch>
)
