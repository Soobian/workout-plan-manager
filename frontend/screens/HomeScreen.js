import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LoginScreen from './LoginScreen';
import SmallCalendar, { weekDays } from '../components/home/SmallCalendar'
import Greetings from '../components/home/Greetings'
import YourPlans, { asd} from '../components/home/YourPlans'
import { HomeScreenStyles } from '../components/home/HomeScreenStyles';
import LastMeasurement from '../components/home/LastMeasurements';

const { height } = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={HomeScreenStyles.container}>
      <ScrollView style={HomeScreenStyles.scrollView}>
        <Greetings name='Maciek'/>
        <View style={HomeScreenStyles.mainscreen}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <SmallCalendar days={weekDays}/>
            <YourPlans data = {asd}/>
          </View>
        </View>
        <LastMeasurement data = {asd} navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
}


export default HomeScreen;