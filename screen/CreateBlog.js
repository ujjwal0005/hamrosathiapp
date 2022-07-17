import { StyleSheet,Text,ScrollView,TouchableOpacity, View,Image,TextInput } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, { useState } from "react";


const CreateBlog = () => {
    const image = require("../assets/doc.jpeg");
    const [blogimage, setblogimage] = useState();
    const opengallery = async() =>{
        const result = await launchImageLibrary({mediaType:'photo',quality:0.01});
        console.log(result);
        if(!result.didCancel){
			result.assets.map(({uri})=>{
                setblogimage(uri);
			})
		}
    }
  return (
      <View style={styles.container}>
        <ScrollView style={{marginBottom:120}}>
           
            <Text style={styles.here}>
                Write Your thoughts Here?
            </Text>
        <View style={styles.title}>
            <Text style={styles.tile}>Title</Text>
            <TextInput
            style={styles.textin}
              placeholder="Write your title here"
              placeholderTextColor="black"
             />
        </View>
        <View style={styles.title}>
            <Text style={styles.tile}>Write your blog here</Text>
            <TextInput
            multiline
            numberOfLines={15}
            style={styles.textin}
              placeholder="Write your blog here"
              placeholderTextColor="black"
             />
        </View>
        <View style={styles.title}>
            <Text style={styles.tile}>Image</Text>
            <TouchableOpacity onPress={opengallery}>
                <View style={styles.bidbutton}>
                    <Text style={styles.bidbuttontext}>Upload Image</Text>
                </View>
             </TouchableOpacity>
             {blogimage? <Image source={{uri:blogimage}}
                style={{
                    height: 50,
                    width: 50,
                    marginTop:10,
                    marginLeft:10,
                    // alignSelf: 'center'
                }}
             />:null}
            
        </View>
        <View style={styles.title}>
            <TouchableOpacity>
                <View style={styles.submit}>
                    <Text style={styles.bidbuttontext}>Submit Now</Text>
                </View>
             </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  )
}

export default CreateBlog

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    tile:{
    fontSize:20,
    marginBottom:10
    },
    here:{
        marginTop:15,
        alignSelf:"center",
        color:"#247BA0"
    },
    textarea:{
        borderWidth:1,
        borderRadius:5,
    },
    textin:{
        borderWidth:1,
        padding:10,
        borderRadius:5,
    },
    textareamain:{
        alignSelf:"center",
        width:"80%",
    },
    title:{
        width:"80%",
        alignSelf:"center",
        marginTop:10
    },
    bidbuttontext:{
        color:"#247BA0"
    },
    submit: {
        marginLeft: 5,
        marginRight: 20,
        width: "80%",
        borderRadius: 10,
        height: 40,
        alignSelf:"flex-end",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#fff",
        marginTop: 15,
        borderColor:"#247BA0",
        borderWidth:1,
    },
    bidbutton: {
      marginLeft: 5,
      marginRight: 20,
      width: "50%",
      borderRadius: 10,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
    //   marginTop: 34,
      borderColor:"#247BA0",
      borderWidth:1,
    },
})