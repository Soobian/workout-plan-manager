import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LoginScreen from './LoginScreen';
import SmallCalendar, { weekDays } from '../components/home/SmallCalendar'
import Greetings from '../components/home/Greetings'
import YourPlans, { asd} from '../components/home/YourPlans'
import TokenApi from '../components/authentication/TokenApi';
import jwt_decode from "jwt-decode";
import * as SecureStore from 'expo-secure-store'

const { height } = Dimensions.get('window');


const HomeScreen = () => {
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
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Greetings name={firstname}/>
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