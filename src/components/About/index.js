import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AboutSteppers from './AboutSteppers'


const About = props => {
  const { value, index } = props
  const [component, setComponent] = useState(null)

  useEffect(() => {
    if (value === index) {
      setComponent(<AboutSteppers {...props} />)
    }
    return () => {
      setComponent(null)
    }
  }, [value])

  return component

}

About.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
}

export default About
