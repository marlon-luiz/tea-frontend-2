import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './components/Home'
import ActivityForm from './components/Activity/Form'
import AutistForm from './components/Autist/Form'
import AutistList from './components/Autist/List'

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/activity/add" component={ActivityForm} />
    <Route path="/autist/add" component={AutistForm} />
    <Route path="/autist" component={AutistList} />
    <Redirect to="/" />
  </Switch>
)
