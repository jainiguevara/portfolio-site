import React from 'react'
import { makeStyles } from '@material-ui/styles'

import './index.css'
import logo from './logo.svg'

const useStyles = makeStyles(() => ({
  logo: {
    height: '40vmin',
    animation: 'logo-spin 20s infinite linear',
  },
}))

const Logo = () => {
  const classes = useStyles()
  return (
    <img className={classes.logo} src={logo} alt="logo" />
  )
}

export default Logo