import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './i18n'
import App from './App'
import ThemeWrapper from './theme'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <ThemeWrapper currentTheme="dark">
        <App />
      </ThemeWrapper>
    </BrowserRouter>
  </Suspense>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
