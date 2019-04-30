import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Logo from '../Logo'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    height: '40vmin',
  },
}))

const Home = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <Logo />
        <Typography variant="subtitle1">{t('welcome')}</Typography>
      </div>
    </Grid>
  )
}

export default Home
