import React from 'react'
import { View, Text , StyleSheet, Dimensions } from 'react-native'

const Greetings = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text>Hi, {name}</Text>
      <Text>LET'S START DAY ACTIVE!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    padding: 5,
  }
})

export default Greetings
