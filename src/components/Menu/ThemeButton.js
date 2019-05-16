import React from 'react'
import { Fab } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  avatar: {
    margin: 5,
    display: 'flex',
    // backgroundColor: 'white',
  },
  fab: {
    margin: theme.spacing.unit,
  },
}))

const ThemeButton = props => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Fab color="primary" aria-label="Add" className={classes.fab}>
      {/* <AddIcon /> */}
    </Fab>
  )
}

export default ThemeButton
