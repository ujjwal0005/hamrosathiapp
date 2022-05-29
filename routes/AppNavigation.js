import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  Linking,
  FlatList,
  Text,
  TextInput,
  SectionList,
  View,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import Home from "../screen/Home";
import Detail from "../screen/Detail";
import Dashboard from "../screen/Dashboard";
import Post from "../screen/Post";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "../components/context";

const Tab = createBottomTabNavigator();
const appHomeStack = createNativeStackNavigator();
const CustomTabBarButton = ({children,onPress}) =>(
    <TouchableOpacity
    style={{
      top: -30,
      justifyContent:'center',
      alignItems: 'center',
      ...StyleSheet.elevation,
    }}
      onPress={onPress}
    >
      <View
      style={{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#3EB489'
      }}>
        {children}
      </View>
    </TouchableOpacity>
);

const AppNavigationStack = () => {
    return (
        <appHomeStack.Navigator headerMode="none" screenOptions={()=>({headerShown:false})}>
            <appHomeStack.Screen name="Home" component={Home} />
            <appHomeStack.Screen name="Detail" component={Detail} />
            <appHomeStack.Screen name="Profile" component={Dashboard} />
        </appHomeStack.Navigator>
    );
}


const AppNavigation = () => {

  return (
      
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            bottom: 0 ,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#ffff",
            borderRadius: 15,
            height: 90,
            ...StyleSheet.elevation,
          },
        }}
      >
        <Tab.Screen
          name="AppNavigationStack"
          component={AppNavigationStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
              <Image source={require("../assets/doc.png")}
                resizeMode="contain"
                style={{
                  width:40,
                  height:40,
                  tintColor:focused?'#246EE9':'#FF2400',
                }}
              />
                <Text
                  style={{
                    color: focused ? "#246EE9" : "#FF2400",
                    fontSize: 12,
                  }}
                >
                 Experts
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => (  
            <Image source={require("../assets/more.png")}
              resizeMode="contain"
              style={{
                width:30,
                height:30,
                tintColor:'#fff',
              }}
            />
          ),
          tabBarButton:(props)=>(
            <CustomTabBarButton {...props}/>
          )
        }}/>
        <Tab.Screen name="Post" component={Post} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
            <Image source={require("../assets/user.png")}
              resizeMode="contain"
              style={{
                width:30,
                height:30,
                tintColor:focused?'#246EE9':'#FF2400',
              }}
            />
              <Text
                style={{
                  color:focused?'#246EE9':'#FF2400',
                  fontSize: 12,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}/>
      </Tab.Navigator>
   
  );
};

const style = StyleSheet.create({
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  }
});

export default AppNavigation;
