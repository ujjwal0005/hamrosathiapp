import { View, Text } from 'react-native'
import React from 'react'
import RootNavigation from './routes/RootNavigation'
import Splash from './screen/Splash'
import Login from './auth/Login'
import Profile from './screen/Profile'
import EditProfileScreen from './screen/EditProfileScreen'
import Detail from './screen/Detail'
import DoctorDetails from './screen/DoctorDetails'


const App = () => {
  return (
    // <DoctorDetails/>
    <RootNavigation />
    // <Detail/>
    // <Profile/>
    // <EditProfileScreen/>
  )
}

export default App