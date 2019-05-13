import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/styles'
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
    component: <></>,
    href: 'skills'
  },
  {
    label: 'Timeline',
    component: <></>,
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
  const theme = useTheme()
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
            {tabs.map(t => (
              <LinkTab key={t.href} label={t.label} href={t.href} />
            ))}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChange}
        >
          <TabContainer>{children}</TabContainer>
        </SwipeableViews>
      </div>
    </NoSsr>
  )
}

export default NavigationTab