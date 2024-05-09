import React from 'react'
import EditProfile from './EditProfile'
import Preferences from './Preferences'
import Security from './Security'

const Mainsetting = () => {
  return (
    <div className='m-80'>
      <EditProfile />
      <Preferences />
      <Security />
    </div>
  )
}

export default Mainsetting
