import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import light from './themes/light'
import dark from './themes/dark'

const themesHash = {
  light,
  dark
}

const buildTheme = currentTheme => {
  return createMuiTheme(themesHash[currentTheme])
}

const ThemeWrapper = props => {
  const { children, currentTheme } = props  
  return (
    <ThemeProvider theme={buildTheme(currentTheme)}>
      <MuiThemeProvider theme={buildTheme(currentTheme)}>
        {children}
      </MuiThemeProvider>
    </ThemeProvider>
  )
}

ThemeWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  currentTheme: PropTypes.string.isRequired
}

export default ThemeWrapper
