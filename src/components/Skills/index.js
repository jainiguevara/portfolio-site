import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import SkillsInfo from './SkillsInfo'
import { frontEndObjects, backEndObjects } from './data.js'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}))

const Skills = props => {
  const classes = useStyles()

  return (
    <Grid item xs={12} className={classes.root}>
      <SkillsInfo objects={frontEndObjects()} {...props} />
      <SkillsInfo objects={backEndObjects()} {...props} />
    </Grid>
  )
}

export default Skills
