import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import {
  Image,
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { Title} from 'react-native-paper'
import { AuthContext } from '../components/context';
import { useNavigation } from "@react-navigation/native";
import { doctors } from "../api/DatApi";
export default function Home() {
  const {authToken} = React.useContext(AuthContext);
  const navigation = useNavigation();
  const [isLoading,setLoading] = useState(true)
  const [profiledata,setdoctordata] = useState({

  })


  const getdoctors = async() => {
  try {
    console.log('authtokdata',authToken);
    setLoading(true)
    const {data , status } = await doctors(authToken);
    console.log(data)
    setdoctordata(data)
    setLoading(false)
  } catch (error) {
    console.log('error::', error)
    setLoading(false)
  }
}
useEffect(() => {
  getdoctors();
}, [authToken])

  const [Refreshing, setRefreshing] = useState(false);
  return (
    <View style={styles.container}>
          {isLoading? <ActivityIndicator size="small" color="#0000ff" />:
          <>
      <View style={styles.appointment}>
        <Text style={{fontSize:20,color:"#fff"}}>Book Your Appointment</Text>
      </View>
        <View style={styles.itemcard}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={profiledata}
            style={styles.body}
            refreshControl={
              <RefreshControl refreshing={Refreshing} colors={["#8dbafe"]} />
            }
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.carditem}>
                  <Image style={styles.image} source={require('../assets/doc.jpeg')}/>
                  <View>
                    <Title style={styles.title}>{item.name}</Title>
                    <Text style={styles.text}>Phone : {item.number}</Text>
                    <Text style={styles.text}>Email : {item.email}</Text>
                    <Text style={styles.text}>Experience : {item.doctor_profile.work_experience}</Text>
                    <Text style={styles.text}>Work Place : {item.doctor_profile.office_name}</Text>
                    <TouchableOpacity
                      style={styles.bidbutton}
                      onPress = {() => navigation.navigate('Appointment',{id:item.id})}
                    >
                      <Text style={styles.bidbuttontext}>Book Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        </>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appointment:{
    flexDirection:'row',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom:10,
    backgroundColor:"#247BA0"
  },
  itemcard:{
    paddingBottom:90,
   
  },
  bidbuttontext:{
      color:"#247BA0"
  },
  bidbutton: {
    marginLeft: 20,
    marginRight: 20,
    width: "80%",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop:20,
    borderColor:"#247BA0",
    borderWidth:1,
  },
  available:{
    marginLeft: 20,
    marginRight: 20,
    marginTop:10,
    color:"red"
  },
  scroll: {
    marginTop: 10,
    marginBottom: 5,
  },
  list: {
    height: 20,
    marginLeft: 5,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  listtext: {
    color: "#fff",
    marginLeft: 10,
    marginRight: 10,
  },
  back: {
    zIndex: 0,
    flex: 1,
    width: "100%",
  },
  item: {
    height: 40,
    margin: 5,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  card: {
    height: 200,
    margin: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 4},
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: "center",
    alignItems:"center",
  },
  carditem: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    flexDirection: "row",
  },
  title:{
    marginLeft: 20,
    marginRight: 20,
    color:"#247BA0",
  },
  text: {
    marginLeft: 20,
  },
  image: {
    borderRadius: 10,
    width: 160,
    height: 80,
    aspectRatio: 1,
  },
});
