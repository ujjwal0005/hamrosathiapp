import { StatusBar } from "react-native";
import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  FlatList,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import DatePicker from 'react-native-date-picker'
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../components/context";
import { Title } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Appointment = () => {
  const navigation = useNavigation();
  const {signOut} = React.useContext(AuthContext);
  const [Refreshing, setRefreshing] = useState(false);
  const back = { uri: "../assets/logo.png" };
  const image = require("../assets/doc.jpeg");
  const [Items, setItems] = useState([
    {
      name : "Dr. Vishal Shrestha",
      experience : "Psychologist",
      availabe_time: "10am - 5am",
      phone: "986133690",
      src: image,
    },
  ]);

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View style={styles.container}>
        <View style={styles.itemcard}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={Items}
            style={styles.body}
            refreshControl={
              <RefreshControl refreshing={Refreshing} colors={["#8dbafe"]} />
            }
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={{width:"95%"}}>
                <View style={styles.carditem}>
                  <Image style={styles.image} source={item.src} />
                  <View>
                    <Title style={styles.title}>Doctor Name</Title>
                    <Text style={styles.text}>{item.experience}</Text>
                    <View style={styles.phone}>
                    <FontAwesome name="phone" size={20} style={styles.icon} />
                    <Text>{item.phone}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.data}>
                  <View style={styles.inputView}>
                    <Text style={styles.exp}>Expericen Years</Text>
                    <Text style={styles.tex} >25 yrs</Text>
                  </View>
                  <View style={[styles.inputView,{marginBottom:30}]}>
                    <Text style={[styles.exp,{marginTop:0}]}>Qualification</Text>
                    <Text style={styles.tex}>Degree Phd in Mbbs</Text>
                  </View>
                </View>
                <View style={styles.bookappoint}>
                  <Text style={styles.appoint}>Book Your Appointment</Text>
                    <DatePicker
                        mode="date"
                        style={{height:50,alignSelf:"center"}}
                        date={date}                  
                      />
                      <View style={styles.available}>
                         
                      <TouchableOpacity>
                        <View style={styles.bidbutton}>
                          <Text style={styles.bidbuttontext}>6am - 9am</Text>
                        </View>
                        </TouchableOpacity>
                         
                        <TouchableOpacity>
                        <View style={styles.bidbutton}>
                          <Text style={styles.bidbuttontext}>6am - 9am</Text>
                        </View>
                        </TouchableOpacity>
                          
                        <TouchableOpacity>
                        <View style={styles.bidbutton}>
                          <Text style={styles.bidbuttontext}>6am - 9am</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.bidbutton}>
                          <Text style={styles.bidbuttontext}>6am - 9am</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.bidbutton}>
                          <Text style={styles.bidbuttontext}>6am - 9am</Text>
                        </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                  <View style={styles.bookappointmnet}>
                        <Text style={styles.boonwo}>Create Appointment</Text>
                  </View>
                  </TouchableOpacity>
              </View>
              
            )}
          />
        </View>
    </View>
  );
}

export default Appointment

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookappointmnet:{
    marginTop: 30, 
    borderRadius: 10,
    height: 40,
    width:"80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf:"center",
    borderColor:"#247BA0",
    borderWidth:1,
    // margin:5,
    marginRight:20
  },
  boonwo:{
    color:"#247BA0",
  },
  exp:{
    marginBottom:5,
  },
  data:{
    marginTop:10,
  },
  tex:{
    color:"#247BA0",
  },
  appoint:{
    marginLeft:20,
    color:"#247BA0",
    marginBottom:10,
    fontSize:15
  },
  bookappoint:{
    alignSelf:"center"
  },
  inputView: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignSelf:"center",
    width: "90%",
    marginBottom: 20,
    // alignItems: "center",
    // padding:10,
  },
  textInput: {
    height: 40,
    flex: 1,
    fontSize: 16,
    marginTop: 0,
    color: 'black',
  },
  bidbuttontext:{
      color:"#247BA0",
      padding:10,
  },
  bidbutton: {
    marginTop: 10, 
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor:"#247BA0",
    borderWidth:1,
    margin:5,
  },
  available:{
    marginTop:10,
    marginLeft:25,
    alignSelf:"center",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: 'row',
    flexWrap:"wrap",
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
    margin: 10,
    borderRadius: 10,
  },
  carditem: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  title:{
    marginLeft: 20,
    marginRight: 20,
    color:"#247BA0",
  },
  phone:{
    marginTop:20,
    marginRight: 20,
    justifyContent: "center",
    textAlign:"center",
    flexDirection: "row",
  },
  icon:{
    marginRight: 5,
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
})