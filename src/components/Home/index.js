import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Branding from './Branding'


const Home = props => {
  const { value, index } = props
  const [component, setComponent] = useState(null)

  useEffect(() => {
    if (value === index) {
      setComponent(<Branding {...props} />)
    }
    return () => {
      setComponent(null)
    }
  }, [value])

  return component

}

Home.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
}

export default Home
