import React, {useEffect, useState} from 'react'
import { StyleSheet,TouchableOpacity,ImageBackground,TextInput, Text, View,ScrollView,ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../components/context'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { userprofile } from '../api/Auth';
import { editdoctor } from '../api/Auth';
const EditDoctorProfile = () => {
  const navigation = useNavigation();
  const [isLoading,setLoading] = useState(false)
  const [profiledata,setprofiledata] = useState({

  })
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const[experience, setExperience] =  useState('');
  const[education, setEducation] = useState('');

  const {authToken,signOut} = React.useContext(AuthContext);
  const getProfile = async() => {
  try {
    setLoading(true)
    const {data , status } = await userprofile(authToken);
    setprofiledata(data);
    setPhonenumber(data.number);
    setName(data.name);
    setEmail(data.email)
    setLoading(false)  
  } catch (error) {
    console.log('error::', error)
    setLoading(false)
  }
}
  useEffect(() => {
    getProfile();
  }, [])

  const doctoredit = async() => {
    try {
      setLoading(true)
      const {data , status} = await editdoctor(name,email,phonenumber,experience,education,blogimage,authToken);
      console.log(data);
      setLoading(false)  
    } catch (error) {
      console.log('error::', error)
      setLoading(false)
    }
  }

const [blogimage, setblogimage] = useState();
const opengallery = async() =>{
      const result = await launchImageLibrary({mediaType:'photo',quality:0.01});
      if(!result.didCancel){
      result.assets.map(({uri})=>{
      setblogimage(uri);
    })
  }
}


    return (
        <ScrollView>
          {isLoading? <ActivityIndicator size="small" color="#0000ff" />:
          <>
        <View style={styles.container}>
          <View style={{margin:20}}>
            <View style={{alignItems:'center'}}>
              <TouchableOpacity onPress={opengallery}>
                  <View style ={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent:'center',
                    alignItems:'center',
                  }}>
                    <ImageBackground source={{uri:blogimage}} style={{height: 100,width:100}}
                     imageStyle={{borderRadius:15}}>
                        <View style={{
                          flex:1,
                          justifyContent:'center',
                          alignItems:'center',
                         }}>
                        <Icon name="camera" size={35} color="#fff"  style={{
                          opacity:0.7,
                          alignItems:'center',
                          justifyContent:'center',
                          borderWidth: 1,
                          borderColor: '#fff',
                          borderRadius: 10,
                        }}/>
                        </View>
                      </ImageBackground>
                    </View>
                </TouchableOpacity>
                <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>User Name</Text>
            </View>
    
            <View style={styles.action}>
              <FontAwesome name="user-o" size={20} color="#000" />
              <TextInput style={styles.textInput} placeholder="First Name"
              autoCorrect={false}
              placeholderTextColor="#666666" 
              value={name}
              onChangeText={(name) => setName(name)}
              />

              </View>
        
              <View style={styles.action}>
              <Feather name="phone" size={20} color="#000" />
              <TextInput style={styles.textInput} 
              keyboardType="number-pad" placeholder="Phone Number"
              autoCorrect={false}
              value={phonenumber}
              onChangeText={(number) => setPhonenumber(number)}
              placeholderTextColor="#666666" />
    
              </View>
              <View style={styles.action}>
              <FontAwesome name="envelope-o" size={20} color="#000" />
              <TextInput style={styles.textInput} keyboardType="email-address" placeholder="Email"
              autoCorrect={false}
              placeholderTextColor="#666666" 
              value={email}
              onChangeText={(email) => setEmail(email)}
              />
              </View>
    
              <View style={styles.action}>
              <FontAwesome name="globe" size={20} color="#000" />
              <TextInput style={styles.textInput} placeholder="Experience"
              autoCorrect={false}
              placeholderTextColor="#666666"
              value={experience}
              onChangeText={(experience) => setExperience(experience)}
              />
              </View>

              <View style={styles.action}>
              <FontAwesome name="globe" size={20} color="#000" />
              <TextInput style={styles.textInput} placeholder="Education"
              autoCorrect={false}
              placeholderTextColor="#666666"
              value={education}
              onChangeText={(education) => setEducation(education)} />
              </View>
              <TouchableOpacity style={styles.commandButton}  onPress = {()=> doctoredit()}>
                        <Text style={styles.panelButtonTitle}>Submit</Text>
              </TouchableOpacity>
            </View>
        </View>
        </>
          }
        </ScrollView>
      )
    }
    

export default EditDoctorProfile
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom:100,
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
      },
      header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
      },
      actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
      },
      textInput: {
        flex: 1,
        marginTop: 0,
        paddingLeft: 10,
        color: '#05375a',
      },
})