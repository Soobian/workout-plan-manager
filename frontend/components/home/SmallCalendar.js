import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const weekDays = [
  {
    fullname: 'Sunday',
    shortname: 'Sun',
  },
  {
    fullname: 'Monday',
    shortname: 'Mon',
  },
  {
    fullname: 'Tuesday',
    shortname: 'Tue',
  },
  {
    fullname: 'Wednesday',
    shortname: 'Wed',
  },
  {
    fullname: 'Thursday',
    shortname: 'Thu',
  },
  {
    fullname: 'Friday',
    shortname: 'Fri',
  },
  {
    fullname: 'Saturday',
    shortname: 'Sat',
  },
]

const currentDay = new Date().getDay();

const SmallCalendar = ({ days }) => {
  const Day = ({ day, index }) => (
    <View style={index == currentDay ? styles.activeday : styles.inactiveday}>
      <View style={index == currentDay ? styles.activecircle : styles.circle} />
      <Text style={styles.dayname}>{day.shortname}</Text>
    </View>
  )
  return (
    <View style={styles.container}>
      {days.map((name, index) => (
        <Day key={index} day={name} index={index}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#03767b',
    borderRadius: 50/4,
    paddingTop: 10,
  },
  inactiveday : {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  circle : {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: "#038f96",
  },
  activecircle : {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: "#e6fdfe",
  },
  dayname : {
    fontSize: 12,
  },
  activeday : {
    padding: 0,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    borderColor: '#e6fdfe'
  }
})

export default SmallCalendar;
