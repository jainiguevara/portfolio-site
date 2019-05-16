import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './containers/Main'
import Home from './components/Home'

const App = () => (
  <Main>
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
    </Switch>
  </Main>
)

export default App
