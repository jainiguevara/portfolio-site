import React from 'react'
import Avatar from '@material-ui/core/Avatar'

import PhotoID from './../../images/profile-avatar.jpg'

const size = 150

const ProfileAvatar = () => {
  return (
    <Avatar src={PhotoID} style={{ width: size, height: size }} />
  )
}

export default ProfileAvatar