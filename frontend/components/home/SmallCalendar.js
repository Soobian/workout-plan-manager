import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../colors/Colors';

/**
 * @module Home
 * @author Maciej Ciepał
 */

/**
 * Array with weekdays names in full and abbreviated form
 */
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

/**
 * @param {days} - week days to include
 * @returns small vertical calendar
 */
const SmallCalendar = ({ days }) => {
  const Day = ({ day, index }) => (
    <View style={index == currentDay ? styles.activeday : styles.inactiveday}>
      <View style={index == currentDay ? styles.activecircle : styles.circle} />
      <Text style={index == currentDay ? styles.activeDayname : styles.dayname}>{day.shortname}</Text>
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
  /**
   * whole page
   */
  container : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: 50/4,
    paddingTop: 10,
    shadowColor: COLORS.dark_gray,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
  },
  inactiveday : {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  circle : {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: COLORS.middle_blue,
    opacity: 0.5
  },
  activecircle : {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: "#e6fdfe",
  },
  dayname : {
    fontSize: 12,
    color: COLORS.middle_blue
  },
  activeDayname : {
    fontSize: 12,
    color: COLORS.white
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
