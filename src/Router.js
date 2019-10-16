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
    <Route path="/activity/add" component={ActivityForm} />
    <Route path="/autist/add" component={AutistForm} />
    <Route path="/autist" component={AutistList} />
    <Route path="/user/add" component={UserForm} />
    <Redirect to="/" />
  </Switch>
)
