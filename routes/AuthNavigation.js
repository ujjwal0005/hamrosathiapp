import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from '../auth/Login';
import Register from '../auth/Register';
import { AuthContext } from '../components/context';

const RootStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <RootStack.Navigator headerMode="none" screenOptions={()=>({headerShown:false})}>
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="Register" component={Register} />
    </RootStack.Navigator>
  )
}

export default AuthNavigation

