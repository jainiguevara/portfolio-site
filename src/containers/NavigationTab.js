import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import Home from './../components/Home'
import Skills from './../components/Skills'

const tabs = [
  {
    label: 'Skills',
    component: Skills,
  },
  {
    label: 'Home',
    component: Home,
  },
  // {
  //   label: 'Timeline',
  //   component: Skills,
  // },
]

const TabContainer = ({ children, dir }) => (
  <Typography
    component="div"
    dir={dir}
    style={{ padding: 8 * 3 }}
  >
    {children}
  </Typography>
)

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
}

const useStyles = makeStyles(() => ({
  root: { width: '100%' },
}))

const NavigationTab = props => { 
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={1}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
        >
          {tabs.map(t => <Tab key={t.label} label={t.label} />)}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map(t => 
          <TabContainer key={t.label} dir={theme.direction}>
            <t.component {...props} />
          </TabContainer>
        )}
      </SwipeableViews>
    </div>
  )
}

export default NavigationTab
