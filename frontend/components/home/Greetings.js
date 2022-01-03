import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

const Greetings = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, {name}</Text>
      <Text style={styles.text}>LET'S START DAY ACTIVE!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    padding: 5,
  },
  text: {
    fontSize: 18,
    left: 10,
  }
})

export default Greetings
