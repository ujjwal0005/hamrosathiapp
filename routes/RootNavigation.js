import { StyleSheet, Text, View,ActivityIndicator} from 'react-native'
import React, { useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './AuthNavigation';
import { AuthContext } from '../components/context'
import AppNavigation from './AppNavigation';
import {handleLogin} from "../api/Auth";

const RootNavigation = () => {

      const[isLoading,setIsLoading] = React.useState(true);
      const[userToken,setUserToken] = React.useState(null);  
      const authContext = React.useMemo(() => ({
          signIn: async(username,password) => { 
            try {
              const res = await handleLogin(username,password);
              console.log(res)
              
            } catch (error) {
              console.log("error aayo",error)
            }
            // setUserToken('fgkj')

            // setIsLoading(false);
          },
          signOut: () => {
            setUserToken(null)
            setIsLoading(false);
        },
        signUp: () => {
          setUserToken('fgkj')
          setIsLoading(false);
        },
      }));

      useEffect(() => {
          setTimeout(()=>{
              setIsLoading(false);
          },1000);   
      },[]);

      if(isLoading){
          return(
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <ActivityIndicator size="large"/>
              </View>
          );
      }

  return (  
      <AuthContext.Provider value={authContext}>
      <NavigationContainer>
      { userToken != null ?  <AppNavigation /> : <AuthNavigation/> }
      </NavigationContainer>
    </AuthContext.Provider>
     
  )
}

export default RootNavigation
