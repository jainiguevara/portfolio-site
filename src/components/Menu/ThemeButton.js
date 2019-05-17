import React from 'react'
import { Fab } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'

import DarkIcon from './../../images/sun-on.svg'
import LightIcon from './../../images/sun-off.svg'

const useStyles = makeStyles(theme => ({
  fab: {
    bottom: theme.spacing.unit * 2,
    left: theme.spacing.unit * 2,
  }
}))

const ThemeButton = () => {
  const classes = useStyles()
  const theme = useTheme()
  
  return (
    <Fab
      size="small"
      color="secondary"
      className={classes.fab}
      style={{ position: 'fixed' }}
    >
      {
        theme.palette.type === 'dark' ?
          <img src={DarkIcon} alt="Dark" /> :
          <img src={LightIcon} alt="Light" />
      }
    </Fab>
  )
}

export default ThemeButton
