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
import { useIsFocused } from "@react-navigation/native";


const { height } = Dimensions.get('window');


const HomeScreen = (props) =>  {
    const isFocused = useIsFocused();
    const [firstname, setfirstname] = useState('')
    const [plans, setplans] = useState([]);
    const [exercises, setexercises] = useState([]);
    
    useEffect(() => {
        SecureStore.getItemAsync('access_token')
        .then((token) => {
            console.log("access_token", token)
            const userId = jwt_decode(token).user_id
            console.log(userId)
            TokenApi.get(
                'user/parameters/' + userId + '/', 
                {
                    headers: {
                        Authorization: 'JWT ' + token,
                    }
                }
            )
            .then(response => {
                console.log(response.data.firstname)
                setfirstname(response.data.firstname)
            })
            .catch(error => {
                console.log(error)
            })
            
            TokenApi.get(
                'workout/exercise/', 
                {
                    headers: {
                        Authorization: 'JWT ' + token,
                    }
                }
            )
            .then(response => {
                console.log(response.data)
                setexercises(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        })
    }, []);

    useEffect(() => {
        if(isFocused){
            console.log(isFocused)
            SecureStore.getItemAsync('access_token')
            .then((token) => {
                console.log("access_token", token)
                TokenApi.get(
                    'workout/workoutplan/', 
                    {
                        headers: {
                            Authorization: 'JWT ' + token,
                        }
                    }
                )
                .then(response => {
                    console.log(response.data)
                    setplans(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
                TokenApi.get(
                    'workout/exercise/', 
                    {
                        headers: {
                            Authorization: 'JWT ' + token,
                        }
                    }
                )
                .then(response => {
                    console.log(response.data)
                    setexercises(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
            })
        }
    }, [isFocused]);
    
    return (
        <SafeAreaView style={HomeScreenStyles.container}>
        <View style={HomeScreenStyles.upperContainer}>
            <Greetings name={firstname}/>
        </View>
        <ScrollView style={HomeScreenStyles.scrollView}>
            <View style={HomeScreenStyles.mainscreen}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <SmallCalendar days={weekDays}/>
                    <YourPlans data={plans} navigation={props.navigation}/>
                </View>
            </View>
        <LastMeasurement data = {asd} navigation={props.navigation}/>
        <ExerciseListComponent data = {exercises} navigation={props.navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;