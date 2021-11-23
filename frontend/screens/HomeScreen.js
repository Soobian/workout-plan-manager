import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LoginScreen from './LoginScreen';
import SmallCalendar, { weekDays } from '../components/home/SmallCalendar'
import Greetings from '../components/home/Greetings'
import YourPlans, { asd} from '../components/home/YourPlans'

const { height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Greetings name='Maciek'/>
        <View style={styles.mainscreen}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <SmallCalendar days={weekDays}/>
            <YourPlans data = {asd}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 10,
  },
  mainscreen: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
  }
})

export default HomeScreen;