import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Title } from "react-native-paper";
import { AuthContext } from '../components/context';
import { getuserappointment } from "../api/DatApi";


export default function Detail() {
  const back = { uri: "../assets/logo.png" };
  const image = require("../assets/plub.jpg");
  const [Items, setItems] = useState([
    {
      // title: "Electrician Needed",
      // date: "2078-09-09",
      // price: "Nrs1000-1500",
      // publised_by: "Ujjwal Sapkota",
      // category: "Electricity",
      src: image,
    },
  ]);
  const {userData,authToken} = React.useContext(AuthContext);
  const [isLoading,setLoading] = useState(true)
  const [profiledata,setprofiledata] = useState()
  const [Refreshing, setRefreshing] = useState(false);

  const getuserappt = async() => {
    try {
      const {data , status } = await getuserappointment(authToken);
      console.log('dhdhdh:::::',data)
      setprofiledata(data)
      setLoading(false)
      
    } catch (error) {
      console.log('error::', error)
      setLoading(false)
    }
  }
  
  
    useEffect(() => {
      getuserappt();
    }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.appointment}>
        <Text style={{fontSize:20,color:"#fff"}}>Your Appointments</Text>
    </View>
    <Title style={{fontSize:16,marginLeft:10,marginTop:10}}>Upcoming Appointment</Title>
        <View style={styles.itemcard}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={profiledata?profiledata.slice(-1):[]}
            style={styles.body}
            refreshControl={
              <RefreshControl refreshing={Refreshing} colors={["#ff00ff"]} />
            }
            ListEmptyComponent={()=>(
              <Text style={{fontSize:18,color:"#fff",fontWeight:'bold',marginRight:10}}>You Have No Appointments</Text>
            )}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.carditem}>
                  <View style={styles.myappointment}>
                  <View style={styles.details}>
                    <Text style={styles.text}>Doctor Name : {item.doctor.name}</Text>
                    <Text style={styles.text}>Date : {item.date}</Text>
                    <Text style={styles.text}>Starting Time : {item.starttime}</Text>
                    <Text style={styles.text}>End Time :  {item.endtime}</Text>
                    <Text style={styles.text}>Description : haha</Text>
                    {item.endtime?
                    <Text style={styles.text}>Report : {item.endtime? "Yes": "No Report Uploaded" }</Text>
                    :null}

                  </View>
                  </View>
                 <Image style={styles.image} source={ require("../assets/doc.jpeg")}/>
                  <View>
                  </View>
                </View>
                {item.is_verified?
               <View>
               <TouchableOpacity>
                   <View style={styles.meeting}>
                   <Text style={{fontSize:18,color:"#fff",fontWeight:'bold',color:'white'}}>Join Meeting Link</Text>
                   </View>
               </TouchableOpacity>
               </View>
                : 
                <View style={styles.bookadmin}>
                <TouchableOpacity>
                    <View style={styles.accept}>
                    <Text style={{fontSize:18,color:"#fff",fontWeight:'bold',color:'black'}}>Edit</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.reject}>
                <Text style={{fontSize:18,color:"#fff",fontWeight:'bold'}}>Cancle</Text>
                </View>
                </TouchableOpacity>
              </View>
                }
             </View>

            )}
          />
        </View>
        <Title style={{fontSize:16,marginLeft:10}}>Your History</Title>
        <View style={styles.itemcard}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={profiledata}
            style={styles.body}
            refreshControl={
              <RefreshControl refreshing={Refreshing} colors={["#ff00ff"]} />
            }
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.carditem}>
                  <View style={styles.myappointment}>
                  <View style={styles.details}>
                    <Text style={styles.text}>Doctor Name : {item.doctor.name}</Text>
                    <Text style={styles.text}>Date : {item.date}</Text>
                    <Text style={styles.text}>Starting Time : {item.starttime}</Text>
                    <Text style={styles.text}>End Time :  {item.endtime}</Text>
                    <Text style={styles.text}>Remarks : All Good</Text>
                    <Text style={styles.text}>Status : Not Completed</Text>
                  </View>
                  </View>
                  <Image style={styles.image} source={ require("../assets/doc.jpeg")}/>
                </View>
              </View>
            )}
          />
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#247BA0",
  },
  details:{
    marginTop:10,
  },

  appointment:{
    flexDirection:'row',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom:10,
    backgroundColor:"#247BA0"
  },
  meeting:{
    alignItems: 'center', 
    justifyContent: 'center',
    width:"100%",
    paddingTop: 10,
    paddingBottom:10,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: "#ff0000",
  },
  accept:{
    alignItems: 'center', 
    justifyContent: 'center',
    width:100,
    paddingTop: 10,
    paddingBottom:10,
    marginTop: 20,
    borderRadius: 25,
    borderWidth:1,
    borderColor:"black",
    // backgroundColor: "#ff0000",
  },
  report:{
    alignItems: 'center', 
    justifyContent: 'center',
    width:100,
    paddingTop: 10,
    paddingBottom:10,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: "#006400",
  },

  reject:{
    alignItems: 'center', 
    justifyContent: 'center',
    width:100,
    paddingTop: 10,
    paddingBottom:10,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: "#ff0000",
  },

  bookadmin:{
    flexDirection:'row',
    alignItems: 'center', 
    justifyContent: 'space-around',
    paddingBottom:10,
    borderRadius: 25,
  },
  book:{
    flexDirection:'row',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom:10,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: "#ff0000",
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
    flexBasis: 'auto',
    padding:20,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: 'white'
  },
  carditem: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 5,
  },
  text: {
    // marginLeft: 20,
    marginRight: 40,
  },
  image: {
    borderRadius: 10,
    width: 120,
    aspectRatio: 1,
  },
});
