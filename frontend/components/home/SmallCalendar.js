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
    shortname: 'Thu',
  },
  {
    fullname: 'Saturday',
    shortname: 'Fri',
  },
]

const currentDay = new Date().getDay();

const SmallCalendar = ({ days }) => {
  const Day = ({ day, index }) => (
    <View style={styles.container}>
      <View style={index == currentDay ? styles.todaycircle : styles.circle} />
      <Text style={styles.dayname}>{day.shortname}</Text>
    </View>
  )
  return (
    <View style={styles.container}>
      {days.map((name, index) => (
        <Day day={name} index={index}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    width: 50,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#03767b',
    padding: 5,
    borderRadius: 50/4,
  },
  circle : {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: "#038f96",
  },
  todaycircle : {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#e6fdfe",
  },
  dayname : {
    fontSize: 12,
    padding: 5,
  }
})

export default SmallCalendar;
