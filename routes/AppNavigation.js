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
import Profile from "../screen/Profile";
import Appointment from "../screen/Appointment";
import Post from "../screen/Post";
import EditProfileScreen from "../screen/EditProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CreateBlog from "../screen/CreateBlog";


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
        backgroundColor:'#247BA0'
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
            <appHomeStack.Screen name="Profile" component={Profile} />
            <appHomeStack.Screen name="EditProfile" component={EditProfileScreen} />
            <appHomeStack.Screen name="Appointment" component={Appointment} />
            <appHomeStack.Screen name="Post" component={Post} />
            <appHomeStack.Screen name="Createblog" component={CreateBlog} />
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
                }}
              >
                <FontAwesome name="user-md" size={35} color={focused ? "#FF2400" : "#247BA0"} />
                <Text
                  style={{
                    color: focused ? "#FF2400" : "#247BA0",
                    fontSize: 12,
                  }}
                >
                 Experts
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen name="Post" component={Post}
        options={{
          tabBarIcon: ({ focused }) => (  
            <FontAwesome name="plus" size={35}  color={focused ? "yellow" : "#ffff"} />
          ),
          tabBarButton:(props)=>(
            <CustomTabBarButton {...props}/>
          )
        }}/>
        <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
           <FontAwesome name="user" size={35} color={focused ? "#FF2400" : "#247BA0"} />
                <Text
                  style={{
                    color: focused ? "#FF2400" : "#247BA0",
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
