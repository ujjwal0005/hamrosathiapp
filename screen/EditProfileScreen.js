import React from 'react'
import { StyleSheet,TouchableOpacity,ImageBackground,TextInput, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{margin:20}}>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={()=>{}}>
              <View style ={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent:'center',
                alignItems:'center',
              }}>
                <ImageBackground source={require('../assets/doc.jpeg')} style={{height: 100,width:100}} imageStyle={{borderRadius:15}}>
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
          placeholderTextColor="#666666" />

          </View>
          <View style={styles.action}>
          <FontAwesome name="user-o" size={20} color="#000" />
          <TextInput style={styles.textInput} placeholder="Last Name"
          autoCorrect={false}
          placeholderTextColor="#666666" />

          </View>
          <View style={styles.action}>
          <Feather name="phone" size={20} color="#000" />
          <TextInput style={styles.textInput} 
          keyboardType="number-pad" placeholder="Phone Number"
          autoCorrect={false}
          placeholderTextColor="#666666" />

          </View>
          <View style={styles.action}>
          <FontAwesome name="envelope-o" size={20} color="#000" />
          <TextInput style={styles.textInput} keyboardType="email-address" placeholder="Email"
          autoCorrect={false}
          placeholderTextColor="#666666" />

          </View>

  
          <View style={styles.action}>
          <FontAwesome name="globe" size={20} color="#000" />
          <TextInput style={styles.textInput} placeholder="Country"
          autoCorrect={false}
          placeholderTextColor="#666666" />

          </View>

          <View style={styles.action}>
          <Icon name="map-marker-outline" size={20} color="#000" />
          <TextInput style={styles.textInput} placeholder="City"
          autoCorrect={false}
          placeholderTextColor="#666666" />
          </View>

          <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>


        </View>
    </View>
  )
}


export default EditProfileScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
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