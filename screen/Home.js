import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { AuthContext } from '../components/context';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const {signOut} = React.useContext(AuthContext);
  const back = { uri: "../assets/logo.png" };
  const image = require("../assets/doc.jpeg");
  const [Items, setItems] = useState([
    {
      name : "Dr. Vishal Shrestha",
      experience : "2078-09-09",
      Appointment : "Nrs1000-1500",
      publised_by: "Ujjwal Sapkota",
      src: image,
    },

    {
      name :"Dr. Vishal Shrestha",
      date: "2078-09-09",
      price: "Nrs1000-1500",
      publised_by: "Ujjwal Sapkota",
      src: image,
    },
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  return (
    <View style={styles.container}>
        <View>
          <FlatList
            horizontal
            keyExtractor={(item, index) => index.toString()}
            data={Items}
            // renderItem={({ item }) => (
            //   <View style={styles.item}>
            //     <Text style={styles.text}>{item.category}</Text>
            //   </View>
            // )}
            style={styles.body}
            refreshControl={
              <RefreshControl refreshing={Refreshing} colors={["#8dbafe"]} />
            }
          />
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
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.text}>Experience: {item.date}</Text>
                    <Text style={styles.text}>Client: {item.publised_by}</Text>
                    <Text style={styles.text}>PriceRange: {item.price}</Text>
                    <TouchableOpacity
                      style={styles.bidbutton}
                      onPress = {() => navigation.navigate('Appointment')}
                    >
                      <Text style={styles.loginText}>Bid your price</Text>
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
    backgroundColor: "#247BA0",
  },
  itemcard: {},
  bidbutton: {
    marginLeft: 20,
    marginRight: 20,
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 34,
    backgroundColor: "#FF1493",
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
    height: 250,
    margin: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  carditem: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 5,
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    borderRadius: 10,
    width: 160,
    height: 80,
    aspectRatio: 1,
  },
});
