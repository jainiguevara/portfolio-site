import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import NoSsr from '@material-ui/core/NoSsr'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import Home from './../components/Home'

const tabs = [
  {
    label: 'Home',
    component: <Home />,
    href: 'home'
  },
  {
    label: 'Skills',
    component: null,
    href: 'skills'
  },
  {
    label: 'Timeline',
    component: null,
    href: 'timeline'
  },
]

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))

function NavigationTab() {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }
  const children = tabs[value].component
  return (
    <NoSsr>
      <div className={classes.root}>
        <AppBar position="static"  elevation={1}>
          <Tabs variant="fullWidth" value={value} onChange={handleChange}>
            {tabs.map((t, i) => (
              <LinkTab key={i} label={t.label} href={t.href} />
            ))}
          </Tabs>
        </AppBar>
        <TabContainer>{children}</TabContainer>
      </div>
    </NoSsr>
  )
}

export default NavigationTab