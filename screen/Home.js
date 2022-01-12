import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Button,
  Linking,
  FlatList,
  Text,
  TextInput,
  SectionList,
  View,
  RefreshControl,
} from "react-native";

export default function Home() {
  const back = { uri: "../assets/logo.png" };
  const [Items, setItems] = useState([
    { name: "ALL" },
    { name: "Electricity" },
    { name: "Plumbing" },
    { name: "Development" },
    { name: "Tution" },
    { name: "Item 6" },
    { name: "Item 7" },
    { name: "Item 8" },
    { name: "Item 9" },
    { name: "Item 10" },
    { name: "Item 11" },
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/logo.png")}
        resizeMode="cover"
        style={styles.back}
      >
        <View>
          <FlatList
            horizontal
            keyExtractor={(item, index) => index.toString()}
            data={Items}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            )}
            style={styles.body}
            refreshControl={
              <RefreshControl refreshing={Refreshing} colors={["#ff00ff"]} />
            }
          />
        </View>
        <View style={styles.itemcard}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={Items}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            )}
            style={styles.body}
            refreshControl={
              <RefreshControl refreshing={Refreshing} colors={["#ff00ff"]} />
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemcard: {
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    zIndex: 0,
    flex: 1,
    width: "100%",
    // height: "400%",
  },
  item: {
    height: 40,
    width: 100,
    margin: 5,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  card: {
    height: 200,
    width: 350,
    margin: 10,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    // alignSelf: "center",
  },
});
