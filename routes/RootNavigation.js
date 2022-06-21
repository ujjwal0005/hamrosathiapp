import { StyleSheet, Text, View,ActivityIndicator} from 'react-native'
import React, { useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './AuthNavigation';
import { AuthContext } from '../components/context'
import AppNavigation from './AppNavigation';
import { Alert } from 'react-native';
import {handleLogin, handleRegister} from "../api/Auth";

const RootNavigation = () => {
      const[isLoading,setIsLoading] = React.useState(true);
      const[userToken,setUserToken] = React.useState(null);  
      const [responseMsg, setResponseMsg] = React.useState("");
      const [dialogVisible, setDialogVisible] = React.useState(false);

      const authContext = React.useMemo(() => ({
          signIn: async(username,password) => { 
            console.log(username,password)
            try {
              const res = await handleLogin(username,password);
              console.log(username,password,res.status)
              setUserToken('fgkj')
              setIsLoading(false);
              // if (res.status == 200) {
              //   if (res.data.token) {
              //     setUserToken(res.data.token);
              //     Alert.alert('Logged In','Successfully')
              //     setResponseMsg("Logged in successfully!");			
              //   } else {
              //     console.log('res.message1231',res.data.message)
              //     setResponseMsg(res.data.message);
              //     setDialogVisible(true);
              //   }
              // } else if (res.status == "failed") {
              //   console.log('res.message',res.message)
              //   Alert.alert('Data Incorrect')
              //   setResponseMsg(res.message);
              //   setDialogVisible(true);
              // }
            } catch (error) {
              console.log("error aayo",error)
            }
          },
          signOut: () => {
            setUserToken(null)
            setIsLoading(false);
        },
        signUp: async(name,email,number,confirm_password,gender,dob,password) => { 
          try {
            const res = await handleRegister(name,email,number,confirm_password,gender,dob,password);
            console.log(res)
            
          } catch (error) {
            console.log("error aayo",error)
          }
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
