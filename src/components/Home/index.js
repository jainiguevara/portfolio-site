import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ContactAvatars from './ContactAvatars'

// import Logo from '../Logo'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  space: {
    minHeight: '15vh'
  },
  branding: {
    display: 'flex',
    alignItems: 'baseline',
  },
  intro: {
    width: '50%',
    alignItems: 'center',
  },
  contact: {
    alignItems: 'center',
  },
  logo: {
    height: '40vmin',
  },
}))


const Home = () => {
  const classes = useStyles()
  const { t } = useTranslation('branding')
  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        {/* <Logo /> */}
        <div className={classes.space}>&nbsp;</div>
        <Typography variant="h3">
          {t('title')}
        </Typography>
        <Typography variant="h2">
          <strong>{t('single-page')}</strong>
        </Typography>
        <Typography variant="h5">
          {t('title2')}
        </Typography>
        <Typography variant="h2">
          React.js &amp; Node.js
        </Typography>
        <br />
        <br />
        <Typography className={classes.intro} variant="h6">
          {t('intro')}
        </Typography>
        <br />
        <Typography className={classes.contact}>
          {t('contact')}
        </Typography>
        <ContactAvatars />
      </div>
    </Grid>
  )
}

export default Home
