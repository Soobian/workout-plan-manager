import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LoginScreen from './LoginScreen';
import SmallCalendar, { weekDays } from '../components/home/SmallCalendar'
import Greetings from '../components/home/Greetings'
import YourPlans, { asd} from '../components/home/YourPlans'
import { HomeScreenStyles } from '../components/home/HomeScreenStyles';
import LastMeasurement from '../components/home/LastMeasurements';
import ExerciseListComponent from '../components/home/ExerciseList';
import TokenApi from '../components/authentication/TokenApi';
import jwt_decode from "jwt-decode";
import * as SecureStore from 'expo-secure-store'

const { height } = Dimensions.get('window');


const HomeScreen = ({navigation}) =>  {
    const [firstname, setfirstname] = useState('')

    useEffect(() => {
        SecureStore.getItemAsync('access_token')
        .then((response) => {
            console.log("access_token", response)
            const userId = jwt_decode(response).user_id
            console.log(userId)
            TokenApi.get('user/parameters/' + userId + '/')
            .then(response => {
                console.log(response.data.firstname)
                setfirstname(response.data.firstname)
            })
            .catch(error => {
                console.log(error)
            })
        })
    }, []);
    /*
    useEffect(() => {

    })
    */
    return (
      <SafeAreaView style={HomeScreenStyles.container}>
      <View style={HomeScreenStyles.upperContainer}>
        <Greetings name='Maciek'/>
      </View>
      <ScrollView style={HomeScreenStyles.scrollView}>
        <View style={HomeScreenStyles.mainscreen}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <SmallCalendar days={weekDays}/>
            <YourPlans data = {asd}/>
          </View>
        </View>
        <LastMeasurement data = {asd} navigation={navigation}/>
        <ExerciseListComponent data = {asd} navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;