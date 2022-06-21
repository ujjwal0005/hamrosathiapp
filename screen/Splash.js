import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Image,Animated,Easing, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const spinValue = new Animated.Value(0);

const Splash = () => {
  const navigation = useNavigation();
  React.useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
        <Animated.Image
            style={{ transform: [{ rotate: spin }], resizeMode: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            width: 400,
            height: 300, }}

            source={require('../assets/sath.png')}
        />
        <TouchableOpacity
        style={styles.button}
        onPress = {() => navigation.navigate('Login')}
      >
        <Text style={styles.buttontxt}>Get Started</Text>
      </TouchableOpacity>

      <Image
      style={styles.bottomimg}
      source={require('../assets/lag.png')} />

    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#247BA0",
      },
    button: {
      width: "50%",
      borderRadius: 5,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#ffffe0",
      shadowColor: "#52006A",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    buttontxt: {
      color: "black",
      fontSize: 18,
    },
    bottomimg:{
      justifyContent: "center",
      position: "relative",
      marginTop:80,
      bottom: 0,
      alignSelf: 'flex-start',
    }
})