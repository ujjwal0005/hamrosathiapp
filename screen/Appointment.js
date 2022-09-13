import { ActivityIndicator,ScrollView} from "react-native";
import React, { useEffect,useState } from "react";
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
import { useNavigation,useRoute } from "@react-navigation/native";
import { AuthContext } from "../components/context";
import { Title,Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { getdoctor } from '../api/DatApi';
import { bookappointment } from "../api/DatApi";

const Appointment = () => {
  const navigation = useNavigation();
  const {authToken,signOut,userData} = React.useContext(AuthContext);
  const [Refreshing, setRefreshing] = useState(false);
  const back = { uri: "../assets/logo.png" };
  const [Items, setItems]= useState({

  })
  const image = require("../assets/doc.jpeg");
  const route = useRoute();
  const {id} = route.params;
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const [isLoading,setLoading] = useState(true)
  const [profiledata,setprofiledata] = useState()
  const [starttime,setStartTime] = useState()
  const[endtime,setendTime]=useState()
  const[desc,setDesc]=useState('numberskjdfhsjhdsjkhdsjkh');
  const [report, setReport] = useState();
  const opengallery = async() =>{
    const result = await launchImageLibrary({mediaType:'photo',quality:0.01});
    console.log(result);
    if(!result.didCancel){
      result.assets.map(({uri})=>{
        setReport(uri);
  })
}
}
  

  const doctordataget = async() => {
    try {
      console.log(authToken,id)
      const {data , status } = await getdoctor(authToken,id);
      console.log('dhdhdh:::::',data)
      setprofiledata(data)
      setLoading(false)
      
    } catch (error) {
      console.log('error::', error)
      setLoading(false)
    }
  }

    useEffect(() => {
      doctordataget();
    }, [])


    const appointementcreate = async() => {
     const dd = (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
     const userid = userData.id
     const doctor = id

      try {
        setLoading(true)
        const {data , status} = await bookappointment(authToken,userid,dd,starttime,endtime,doctor,report,desc);
        if (data){
          navigation.navigate('Detail')
        }
        setLoading(false)  
      } catch (error) {
        console.log('error::', error)
        setLoading(false)
      }
    }
  return (

    <View style={styles.container}>
      <ScrollView style={{marginBottom:120}}>
      { profiledata? (
        <View style={styles.itemcard}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row',marginTop: 15 }}>
            <Image style={styles.image} source={require('../assets/doc.jpeg')}/>
            <View style={{ marginLeft: 5 }}>
              <View style={styles.userInfoSection}>
              <Title style={[styles.title]}>{profiledata.name}</Title>
              <View style={styles.row}>
                <Icon name="phone" style={styles.icon} size={20}/>
                <Text  style={styles.userdetails}>{profiledata.number}</Text>
              </View>
              <View style={styles.row}>
                <Icon name="email" style={styles.icon} size={20}/>
                <Text  style={styles.userdetails}>{profiledata.email}</Text>
              </View>
            </View> 
            </View>
            </View>
        </View>

              <View style={styles.card}> 
                <View style={styles.data}>
                  <View style={styles.inputView}>
                    <Text style={styles.exp}>Qualification</Text>
                    <Text style={styles.tex} >{profiledata.doctor_profile.college_passed_outdate}</Text>
                  </View>
                  <View style={[styles.inputView,{marginBottom:30}]}>
                    <Text style={[styles.exp,{marginTop:0}]}>Work Experience</Text>
                    <Text style={styles.tex}>{profiledata.doctor_profile.work_experience}</Text>
                  </View>
                </View>
                <View style={styles.bookappoint}>
                  <Text style={styles.appoint}>Book Your Appointment</Text>
                    <DatePicker
                        mode="date"
                        style={{height:50,alignSelf:"center"}}
                        date={date}
                        onDateChange={setDate}                  
                      />
                      <View style={styles.available}>
                         
                      <TouchableOpacity onPress={()=> {
                        setStartTime('6:00');
                        setendTime('7:00');
                      }}>
                        <View style={styles.bidbutton}>
                          <Text style={styles.bidbuttontext
                          
                          }>6am - 7am</Text>
                        </View>
                        </TouchableOpacity>
                         
                        <TouchableOpacity
                        onPress={()=> {
                          setStartTime('8:00');
                          setendTime('9:00');
                        }}>
                        <View style={styles.bidbutton}>
                          <Text style={styles.bidbuttontext}>8am - 9am</Text>
                        </View>
                        </TouchableOpacity>
                          
                        <TouchableOpacity onPress={()=> {
                          setStartTime('9:00');
                          setendTime('10:00');
                        }}>
                        <View style={styles.bidbutton}>
                          <Text style={styles.bidbuttontext}>9am - 10am</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                         onPress={()=> {
                          setStartTime('16:00');
                          setendTime('17:00');
                        }}>
                        <View style={styles.bidbutton}>
                          <Text style={styles.bidbuttontext}>4pm - 5pm</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                         onPress={()=> {
                          setStartTime('17:00');
                          setendTime('18:00');
                        }}>
                        <View style={styles.bidbutton}>
                          <Text style={styles.bidbuttontext}>5pm - 6pm</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                         onPress={()=> {
                          setStartTime('18:00');
                          setendTime('19:00');
                        }}>
                        <View style={styles.bidbutton}>
                          <Text style={styles.bidbuttontext}>6pm - 7pm</Text>
                        </View>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.description}>
                      <Text style={styles.desc}>Description</Text>
                      <TextInput
                        multiline
                        numberOfLines={5}
                        style={styles.textin}
                        placeholder="Write your  Descrption here"
                        placeholderTextColor="#247BA0"
                        value={desc}
                        onChangeText={(desc) => setDesc(desc)}
                      />
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.bidbuttontext}>Upload Your Report (Image Only)</Text>
                        <View style={styles.imgupload}>
                        <TouchableOpacity onPress={opengallery}>
                        {report? <Image source={{uri:report}}
                            style={{
                              height: 100,
                              width: 100,
                              marginTop:0,
                              marginLeft:10,
                              // alignSelf: 'center'
                            }}
                            /> :null}
                            <View>
                                <Text style={styles.bidbuttontext}>Upload Report</Text>
                            </View>
                            </TouchableOpacity>

                        </View>
                  </View>
                  </View>
                  <TouchableOpacity onPress = {()=> appointementcreate()}>
                  <View style={styles.bookappointmnet}>
                        <Text style={styles.boonwo}>Create Appointment</Text>
                  </View>
                  </TouchableOpacity>
              </View>
        ): null}
        </ScrollView>
    </View>
  );
}

export default Appointment

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgupload:{
    flex:1,
    flexDirection: 'row',
    // justifyContent:'space-around'
  },
    textin:{
        borderWidth:1,
        padding:10,
        borderRadius:5,
        borderColor:"#247BA0"
    },
    description:{
      marginTop:10,
      width:"95%", 
      // alignItems: "center",
      alignSelf:"center",
    },
  bookappointmnet:{
    marginTop: 30, 
    borderRadius: 10,
    height: 40,
    width:"80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf:"center",
    backgroundColor: "#ff0000",
    marginRight:20
  },
  boonwo:{
    color:"white",
    fontFamily:"bold",
    fontSize:18,
  },
  exp:{
    marginBottom:5,
  },

  tex:{
    color:"#247BA0",
  },
  appoint:{
    marginLeft:20,
    color:"#247BA0",
    marginBottom:10,
    fontSize:20,
    fontWeight: "bold"
  
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
  wallet:{
    color:"black",
  },
  icon:{
    color:"black"
  },
  userdetails:{
    color:"black",
    marginLeft: 20
  },
  userInfoSection: {
    paddingHorizontal: 30,
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    color: 'yellow',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor:'#dddddd',
    borderRightWidth:1
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuhead: {
    flexDirection: 'row',
  },
  menuheadtext: {
    color: 'black',
    marginLeft: 5,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  menuItemText: {
    color: 'black',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
})