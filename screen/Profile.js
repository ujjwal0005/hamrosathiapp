import { StyleSheet, View,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import { Avatar,Title,Caption,Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../components/context'

export default function Profile(){
  const navigation = useNavigation();
  const {signOut} = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row',marginTop: 15 }}>
                <Avatar.Image
                    source={require('../assets/sath.png')}
                    size={80}
                />
            <View style={{ marginLeft: 20 }}>
                <Title style={[styles.title, {marginTop:15,marginBottom:5}]}>User Name</Title>
                  <TouchableOpacity  onPress = {() => navigation.navigate('EditProfile')}>
          <View style={styles.menuhead}>
            <Icon name="pen" color="yellow" size={25}/>
            <Text style={styles.menuheadtext}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 100 }}>
                  <TouchableOpacity   style={styles.bidbutton}
                      onPress={()=>{signOut()}}>
                  <View style={styles.menuhead}>
                    <Icon name="logout" color="yellow" size={25}/>
                  </View>
        </TouchableOpacity>
            </View>
            </View>
        </View>

        <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#ffff" size={20}/>
          <Text style={{color:"#ffff", marginLeft: 20}}>Kathmandu, Nepal</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#ffff" size={20}/>
          <Text style={{color:"#ffff", marginLeft: 20}}>+977-9861336901</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#ffff" size={20}/>
          <Text style={{color:"#ffff", marginLeft: 20}}>ujjwalsapkot@email.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox,{
            borderRightColor:'#dddddd',
            borderRightWidth:1
        }]}>
            <Title style={{color:"#ffff"}}>$140</Title>
            <Caption style={{color:"#ffff"}}>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
            <Title  style={{color:"#ffff"}}>12</Title>
            <Caption  style={{color:"#ffff"}}>Screens</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#ffff" size={25}/>
            <Text style={styles.menuItemText}>Your History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#ffff" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#ffff" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="rocket" color="#ffff" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView> 
  )
}



const styles = StyleSheet.create({
    container: {
      backgroundColor: "#247BA0",
      flex: 1,
      },
      userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        color: "#ffff",
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
        color: 'yellow',
        marginLeft: 5,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
      menuItemText: {
        color: '#ffff',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
})