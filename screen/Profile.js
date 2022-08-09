import { StyleSheet, View,SafeAreaView,TouchableOpacity,ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import { Avatar,Title,Caption,Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../components/context'
import { userprofile } from '../api/Auth';
export default function Profile(){
  const navigation = useNavigation();
  const [isLoading,setLoading] = useState(true)
  const [profiledata,setprofiledata] = useState({

  })
  
  const {authToken,signOut} = React.useContext(AuthContext);
  const getProfile = async() => {
  try {
    const {data , status } = await userprofile(authToken);
    console.log('dhdhdh:::::',data)
    setprofiledata(data)
    setLoading(false)
    
  } catch (error) {
    console.log('error::', error)
    setLoading(false)
  }
}


  useEffect(() => {
    getProfile();
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
       {isLoading? <ActivityIndicator size="small" color="#0000ff" />:
       <>
        <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row',marginTop: 15 }}>
                <Avatar.Image
                    source={require('../assets/sath.png')}
                    size={80}
                />
            <View style={{ marginLeft: 20 }}>
                <Title style={[styles.title, {marginTop:15,marginBottom:5}]}>{profiledata.name}</Title>
                  <TouchableOpacity  onPress = {() => navigation.navigate('DoctorProfile')}>
          <View style={styles.menuhead}>
            <Icon name="pen" style={styles.icon} size={25}/>
            <Text style={styles.menuheadtext}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 100 }}>
                  <TouchableOpacity   style={styles.bidbutton}
                      onPress={()=>{signOut()}}>
                  <View style={styles.menuhead}>
                    <Icon name="logout" style={styles.icon} size={25}/>
                  </View>
        </TouchableOpacity>
            </View>
            </View>
        </View>

        <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" style={styles.icon} size={20}/>
          <Text  style={styles.userdetails}>Kathmandu, Nepal</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" style={styles.icon} size={20}/>
          <Text  style={styles.userdetails}>{profiledata.number}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" style={styles.icon} size={20}/>
          <Text  style={styles.userdetails}>{profiledata.email}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
            <Title  style={styles.wallet} >$140</Title>
            <Caption style={styles.wallet}>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
            <Title style={styles.wallet}>12</Title>
            <Caption style={styles.wallet}>Screens</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline"  style={styles.icon} size={25}/>
            <Text style={styles.menuItemText}>Your History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card"style={styles.icon} size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.menuItem}>
            <Icon name="share-outline"style={styles.icon} size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="rocket" style={styles.icon} size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableOpacity>
      </View>
      </>}
    </SafeAreaView> 
  )
}



const styles = StyleSheet.create({
    container: {
      // backgroundColor: "#247BA0",
      flex: 1,
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
        marginBottom: 25,
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