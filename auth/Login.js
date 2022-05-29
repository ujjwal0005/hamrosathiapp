import { StatusBar } from "react-native";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../components/context";
import {handleLogin} from "../api/Auth";


export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("sujeet92@gmail.com");
  const [password, setPassword] = useState("ujjwal123@");
  const {signIn} = React.useContext(AuthContext);


  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/back.jpeg")} style={styles.back}>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          value={username}
          onChangeText={(number) => setUsername(number)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
    
      <TouchableOpacity style={styles.loginBtn} onPress = {()=> signIn(username,password)}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerbtn} onPress = {() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Don't Have an Account?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
   </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  back: {
    zIndex: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '100%', 
    height: '100%'
  },

  inputView: {
    backgroundColor: "#FFFF",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#52006A",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,

  },

  forgot_button: {
    color:"#fff",
    height: 30,
    marginBottom: 30,
    fontStyle: 'italic',
    fontSize: 15,
    marginTop: 8,
    textDecorationLine: 'underline',
  },

  loginBtn: {
    width: "50%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8dbafe",
    shadowColor: "#52006A",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  registerText:{
    color: "#fff",
    fontStyle: 'italic',
    fontSize: 15,
    marginTop: 8,
    textDecorationLine: 'underline',
  }
});