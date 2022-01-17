import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import { WorkoutListStyle } from '../components/workout/WorkoutListStyle';
import { useIsFocused } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store'
import TokenApi from '../components/authentication/TokenApi';


const WorkoutPlanScreen = ({route, navigation}) => {
    
    const photos = [
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F35%252F2010%252F07%252F28170650%252Ffb-interval-training-workouts.jpg&q=85',
        'https://globaljabar.com/wp-content/uploads/2021/02/xbreak-workout_602724-1.jpg.pagespeed.ic_.v8byD7su-e-1.jpg',
        'https://www.incimages.com/uploaded_files/image/1920x1080/getty_901096798_200013332000928080_415454.jpg'
    ];

    const isFocused = useIsFocused();
    const [plans, setplans] = useState([]);


    useEffect(() => {
        if(isFocused){
            SecureStore.getItemAsync('access_token')
            .then((token) => {
                TokenApi.get(
                    'workout/workoutplan/', 
                    {
                        headers: {
                            Authorization: 'JWT ' + token,
                        }
                    }
                )
                .then(response => {
                    setplans(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
            })
            .catch(error => {
                console.log(error)
            })
        }
    }, [isFocused]);

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={WorkoutListStyle.container}>
            <View style={WorkoutListStyle.upperContainer}>
                <Text style={WorkoutListStyle.upperContainerText}>My workout plans</Text>
            </View>
            <View style={WorkoutListStyle.workoutListContainer}> 
                <ScrollView contentContainerStyle={WorkoutListStyle.scrollView}
                centerContent>
                    {plans.map((item, index) => {
                    return(
                        <TouchableOpacity 
                        key={index}
                        style={WorkoutListStyle.singleWorkoutContainer}
                        onPress={() => navigation.navigate('WorkoutList', {id: item.id, name: item.name, level: item.level, photoUrl: item.photo_link, 
                        workouts: item.workoutplanday})}>
                            <View style={WorkoutListStyle.imageContenerForExercise}>
                            <Image 
                                style={WorkoutListStyle.imageExercise}
                                source={{uri: item.photo_link }}/>
                            </View>
                            <View style={WorkoutListStyle.workoutNameContainer}>
                                <Text style={WorkoutListStyle.workoutNameText}>{item.name}</Text>
                                <Text style={WorkoutListStyle.workoutLevelText}>{item.level}</Text>
                            </View>  
                    </TouchableOpacity>)
                })}
                </ScrollView>
            </View>
            <View style={WorkoutListStyle.buttonContainer}>
                <TouchableOpacity style={WorkoutListStyle.button}
                    onPress={() => navigation.navigate('AddWorkoutPlan')}>
                    <Text style={WorkoutListStyle.buttonLabelText}>CREATE WORKOUT PLAN</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default WorkoutPlanScreen
