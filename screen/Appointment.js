import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Appointment = () => {
  return (
    <View style={styles.container}>
      <Text>Create Appointment</Text>
    </View>
  )
}

export default Appointment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})