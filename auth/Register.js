import { StatusBar } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
import { AuthContext } from "../components/context";
import {handleRegister} from "../api/Auth";

export default function Register() {  
  const {signUp} = React.useContext(AuthContext);
  const navigation = useNavigation();
  const back = { uri: "../assets/logo.png" };
  const [number, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  return (
    <View style={styles.container}>
     <ImageBackground source={require("../assets/back.jpeg")} style={styles.back}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Full Name"
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Phone Number"
            placeholderTextColor="#003f5c"
            onChangeText={(number) => setPhonenumber(number)}
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
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(confirm_password) => setConfirm_password(confirm_password)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Gender"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(val) => setGender(val)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Date of Birth"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(val) => setDob(val)}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress = {()=> signUp(name,password,confirm_password,email,number,gender,dob)}
        >
          <Text style={styles.registerText}>Register Here</Text>
        </TouchableOpacity> 

         <TouchableOpacity style={styles.loginText} onPress = {() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Log In</Text>
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
    width: "80%",
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
    marginLeft: 20,
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
  loginText: {
    color: "#fff",
    fontStyle: 'italic',
    fontSize: 15,
    marginTop: 8,
    textDecorationLine: 'underline',
  },
  registerText: {
    color: "#333",
  },
});
