import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect} from "react";
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
import {blogs} from '../api/DatApi'
export default function Post() {
  const navigation = useNavigation();
  const {authToken, signOut} = React.useContext(AuthContext);
  const [Refreshing, setRefreshing] = useState(false);
  const [isLoading,setLoading] = useState(true)
  const [blogdata,setblogdata] = useState({
  })
  const baseUrl = "https://hamrosath.herokuapp.com";
  
  const getblogs = async() => {
  try {
    const {data , status } = await blogs(authToken);
    console.log('dhdhdh:::::',data)
    setblogdata(data)
    setLoading(false)   
  } catch (error) {
    console.log('error::', error)
    setLoading(false)
  }
}
  useEffect(() => {
    getblogs();
  }, [])

  
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
        data={blogdata}
        style={styles.body}
        refreshControl={
          <RefreshControl refreshing={Refreshing} colors={["#8dbafe"]} />
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.carditem}>
              <Image style={styles.image} source ={{uri:baseUrl+item.image}} />
              <View>
                <Title style={styles.title}>{item.title}</Title>
                <View style={styles.para}>
                <Text style={styles.paratext}>{item.content}</Text>
                </View>
                <TouchableOpacity
                  style={styles.bidbutton}
                  onPress = {() => getblogs()}
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
    paddingBottom:145,
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
    flexBasis: 'auto',
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4},
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: 'white'
  },
  carditem: {
    flex: 1,
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
