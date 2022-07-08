import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { Title} from 'react-native-paper'
import { AuthContext } from '../components/context';
import { useNavigation } from "@react-navigation/native";

export default function Post() {
  const navigation = useNavigation();
  const {signOut} = React.useContext(AuthContext);
  const back = { uri: "../assets/logo.png" };
  const image = require("../assets/doc.jpeg");
  const [Items, setItems] = useState([
    {
      name : "Dr. Vishal Shrestha",
      experience : "Psychologist",
      availabe_time: "10am - 5am",
      src: image,
    },

  ]);

  const [Refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.container}>
    <View>
      <TouchableOpacity onPress = {() => navigation.navigate('Createblog')}>
        <View style={styles.bookappointmnet}>
              <Text style={styles.boonwo}>Create Blogs</Text>
        </View>
        </TouchableOpacity>
    </View>
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
            <View style={styles.carditem}>
              <Image style={styles.image} source={item.src} />
              <View>
                <Title style={styles.title}>Title Name</Title>
                <View style={styles.para}>
                <Text style={styles.paratext}>They may go by different labels—About, Story, 
                Mission—but these types of pages generally serve the same key purpose: to be the page for a brand to say,
                When a visitor wants to learn more about you or your business, the About page is the page they’ll look for. “This is who we are.”</Text>
                </View>
                <TouchableOpacity
                  style={styles.bidbutton}
                  onPress = {() => navigation.navigate('Appointment')}
                >
                  <Text style={styles.bidbuttontext}>Read More.....</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookappointmnet:{
    marginTop: 10, 
    borderRadius: 10,
    height: 40,
    width:"80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf:"center",
    borderColor:"#247BA0",
    borderWidth:1,
    // margin:5,
    backgroundColor:"#ffff",
    marginRight:20
  },
  boonwo:{
    color:"#247BA0",
  },
  para:{
    width:"80%",
    marginLeft:5,
  },
  paratext:{
    textAlign:"justify",
  },
  bidbuttontext:{
      color:"#247BA0"
  },
  bidbutton: {
    marginLeft: 5,
    borderColor:"#247BA0",
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
    backgroundColor: "#FFF",
    borderRadius: 10,
    // justifyContent: "center",
    // alignItems:"center",
  },
  carditem: {
    flex: 1,
    // justifyContent: "center",
    // alignItems:"center",
    flexDirection: "row",
  },
  title:{
    marginLeft: 5,
    marginRight: 5,
    color:"#247BA0",
  },
  text: {
    marginLeft: 20,
  },
  image: {
    margin:10,
    borderRadius: 10,
    width: 80,
    height: 80,
    aspectRatio: 1,
  },
});
