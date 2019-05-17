import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles, useTheme } from '@material-ui/styles'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
import green from '@material-ui/core/colors/green'
import Avatar from '@material-ui/core/Avatar'
import EmailIcon from '@material-ui/icons/Email'
import { Typography, Button } from '@material-ui/core'

import SkypeLogo from './../../images/skype-logo.svg'
import LinkedInLogo from './../../images/linkedin-logo.svg'

const useStyles = makeStyles(() => ({
  avatar: {
    margin: 2.5,
    width: 60,
    height: 60,
  },
  greenAvatar: {
    margin: 2.5,
    width: 80,
    height: 80,
  },
  text: {
    paddingRight: 10,
    paddingLeft: 5,
  },
}))

const ContactAvatars = () => {
  const classes = useStyles()
  const theme = useTheme()
  const { t } = useTranslation('contact')
  const xs = useMediaQuery(theme.breakpoints.down('xs'))
  const xxs = useMediaQuery('(max-width: 361px)')
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
        <Button
          component="a"
          href="https://www.upwork.com/fl/jainig"
          rel="noopener noreferrer"
          target="_blank"
          variant="contained"
          color="secondary"
          style={{ 
            ...(xs && { fontSize: 10 }),
            ...(xxs && { fontSize: 9 })
          }}
        >
          {t('upwork')}
        </Button>
      </div>
    </>
  )
}

export default ContactAvatars