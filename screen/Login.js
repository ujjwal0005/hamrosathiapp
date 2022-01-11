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

export default function Login() {
  const back = { uri: "../assets/logo.png" };
  const [number, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground  source={require('../assets/logo.png')} resizeMode="cover" style={styles.back}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setPhonenumber(number)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress = {() => console.log("hello")}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerbtn}>
        <Text style={styles.registerText}>Register Here</Text>
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
    height: '400%'
  },

  inputView: {
    backgroundColor: "#FFFF",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    color:"#FFFF",
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});