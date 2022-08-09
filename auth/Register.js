import { ScrollView, StatusBar } from "react-native";
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function Register() {  
  const {signUp} = React.useContext(AuthContext);
  const navigation = useNavigation();
  const back = { uri: "../assets/logo.png" };
  const [number, setPhonenumber] = useState('9861000000');
  const [password, setPassword] = useState('admin123@');
  const [confirm_password, setConfirm_password] = useState('admin123@');
  const [email, setEmail] = useState('janak@gmail.com');
  const [gender, setGender] = useState('male');
  const [name, setName] = useState('janak');
  const [dob, setDob] = useState('1999-10-10');

  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <FontAwesome name="user-o" size={30} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
            value={name}
            placeholderTextColor="black"
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
        <FontAwesome name="envelope" size={25} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            placeholderTextColor="black"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <View style={styles.inputView}>
        <FontAwesome name="phone" size={30} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            value={number}
            placeholderTextColor="black"
            onChangeText={(number) => setPhonenumber(number)}
          />
        </View>
        <View style={styles.inputView}>
        <FontAwesome name="lock" size={30} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={styles.inputView}>
        <FontAwesome name="lock" size={30} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            value={confirm_password}
            placeholder="Confirm Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={(confirm_password) => setConfirm_password(confirm_password)}
          />
        </View>
        <View style={styles.inputView}>
        <FontAwesome name="user-o" size={30} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Gender"
            value={gender}
            placeholderTextColor="black"
            onChangeText={(val) => setGender(val)}
          />
        </View>
        <View style={styles.inputView}>
        <FontAwesome name="calendar-minus-o" size={25} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            value={dob}
            placeholder="YYYY-MM-DD"
            placeholderTextColor="black"
            onChangeText={(val) => setDob(val)}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress = {()=> signUp(name,email,number,password,confirm_password,gender,dob,false)}
        >
          <Text style={styles.registerText}>Sign Up as User</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          style={styles.loginBtn}
          onPress = {()=> signUp(name,email,number,password,confirm_password,gender,dob,true)}
        >
          <Text style={styles.registerText}>Sign Up as Doctor</Text>
        </TouchableOpacity> 
        {/* <TouchableOpacity
          style={styles.loginBtn}
          onPress = {()=> signUp(name,password,confirm_password,email,number,gender,dob)}
        >
          <Text style={styles.registerText}>Register Here</Text>
        </TouchableOpacity>  */}

         <TouchableOpacity style={styles.loginText} onPress = {() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#247BA0",
  },
  icon:{
    color:"black"
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
    marginBottom: 15,
    alignItems: "center",
    padding:10,
  },
  loginText:{
    fontStyle: 'italic',
    fontSize:18,
    color:'black',
    textDecorationLine: 'underline',
    marginTop:5,
  },

  //  forgot_button: {
  //   color:"#fff",
  //   height: 30,
  //   marginBottom: 30,
  //   fontStyle: 'italic',
  //   fontSize: 15,
  //   marginTop: 8,
  //   textDecorationLine: 'underline',
  // },

  loginBtn: {
    width: "50%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
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
    color: "#fff",
    fontSize: 18,
    alignItems: "center",
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
