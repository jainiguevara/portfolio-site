import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ContactAvatars from './ContactAvatars'
import ProfileAvatar from '../ProfileAvatar'

// import Logo from '../Logo'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  space: {
    minHeight: '5vh'
  },
  alignment: {
    textAlign: 'center',
  },
  branding: {
    display: 'flex',
    alignItems: 'baseline',
  },
  intro: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
    textAlign: 'center',
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
        <Typography className={classes.alignment} variant="h3">
          {t('title')}
        </Typography>
        <Typography className={classes.alignment} variant="h2">
          <strong>{t('single-page')}</strong>
        </Typography>
        <Typography className={classes.alignment} variant="h5">
          {t('title2')}
        </Typography>
        <Typography className={classes.alignment} variant="h2">
          React.js &amp; Node.js
        </Typography>
        <br />
        <br />
        <ProfileAvatar />
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
