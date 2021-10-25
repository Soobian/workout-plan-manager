import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import SmallCalendar, { weekDays } from '../components/home/SmallCalendar'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainscreen}>
        <SmallCalendar days={weekDays}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  mainscreen: {
    padding:10,
  }
})

export default HomeScreen;
