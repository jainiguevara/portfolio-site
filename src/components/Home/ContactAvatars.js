import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import green from '@material-ui/core/colors/green'
import Avatar from '@material-ui/core/Avatar'
import EmailIcon from '@material-ui/icons/Email'
import { Typography, Button } from '@material-ui/core'

import SkypeLogo from './../../images/skype-logo.svg'
import LinkedInLogo from './../../images/linkedin-logo.svg'

const useStyles = makeStyles(() => ({
  avatar: {
    margin: 5,
    width: 60,
    height: 60,
  },
  greenAvatar: {
    margin: 5,
    width: 80,
    height: 80,
  },
  text: {
    paddingRight: 10,
    paddingLeft: 5,
  }
}))

const ContactAvatars = props => {
  const classes = useStyles()
  const { t } = useTranslation('contact')

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="mailto:jaini.g@yahoo.com">
          <Avatar className={classes.greenAvatar} style={{ backgroundColor: green[400] }}>
            <EmailIcon />
          </Avatar>
        </a>
        <a href="skype:jaini.guevara?chat">
          <Avatar alt="Skype: jaini.guevara" className={classes.avatar} src={SkypeLogo} />
        </a>
        <a href="https://www.linkedin.com/in/jainiguevara/" rel="noopener noreferrer" target="_blank">
          <Avatar alt="LinkedIn: jainiguevara" className={classes.avatar} src={LinkedInLogo} />
        </a>
        <Typography className={classes.text}>or</Typography>
        <Button component="a" href="https://www.upwork.com/fl/jainig" rel="noopener noreferrer" target="_blank" variant="contained" color="secondary">{t('upwork')}</Button>
      </div>
    </>
  )
}

export default ContactAvatars