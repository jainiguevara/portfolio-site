import React from 'react'
import PropTypes from 'prop-types'

const Main = props => {
  const { children } = props
  return (
    <div>
      {children}
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Main
