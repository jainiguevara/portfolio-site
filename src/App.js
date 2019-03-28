import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './containers/Main'
import Home from './components/Home'
import GettingStarted from './components/GettingStarted'

const App = () => (
  <Main>
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />

      <Route
        path="/start"
        component={GettingStarted}
      />
    </Switch>
  </Main>
)

export default App
