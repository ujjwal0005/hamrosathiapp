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
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default function Login() {
  const {signIn} = React.useContext(AuthContext);
  const navigation = useNavigation();
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [username, setUsername] = useState('ujjwalsapkota005@gmail.com');
  const [password, setPassword] = useState('ujjwal123@');


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
       <FontAwesome name="user-o" size={30} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Email"
          placeholderTextColor="#ffff"
          value={username}
          onChangeText={(number) => setUsername(number)}
        />
      </View>
      <View style={styles.inputView}>
      <FontAwesome name="lock" size={35} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#ffff"
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
      {/* <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#247BA0",
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
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: "75%",
    marginBottom: 40,
    alignItems: "center",
    padding:10,
  },
  loginText:{
    fontSize:18,
    // marginTop:5,
    color:"#fff"
  },
  loginBtn: {
    width: "50%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#247BA0",
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
    color: "black",
    fontStyle: 'italic',
    fontSize: 15,
    marginTop: 8,
    textDecorationLine: 'underline',
  },
  textInput: {
    height: 40,
    padding: 10,
    flex: 1,
    fontSize: 16,
    marginTop: 0,
    paddingLeft: 30,
    color: 'black',
  },
});