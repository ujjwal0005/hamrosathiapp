import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AuthContext } from '../components/context';

export default function Post() {
  const {signOut} = React.useContext(AuthContext);
  const [Refreshing, setRefreshing] = useState(false);
  return (
    <View style={styles.container}>
        <Text>Create Blog</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
