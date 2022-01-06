import React from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { COLORS } from '../colors/Colors'

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
    paddingTop: 1,
  },
  text: {
    marginTop: 3,
    fontSize: 19,
    left: 20,
    color:COLORS.white,
  }
})

export default Greetings
