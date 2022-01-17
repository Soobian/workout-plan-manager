import React, { Component , useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard,Image,  ImageBackground, Picker, Alert } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { COLORS } from '../components/colors/Colors';
import { AddWorkoutStyle } from '../components/workout/AddWorkoutStyle';
import BaseApi from '../components/authentication/BaseApi'
import TokenApi from '../components/authentication/TokenApi';
import jwt_decode from "jwt-decode";
import * as SecureStore from 'expo-secure-store'

const AddWorkoutScreen = ({route, navigation}) => {
    const [name, setName] = useState('')
    const [workouts, setWorkouts] = useState('');
    const [exercises, setexercises] = useState([])

    const updateExerciseList = () => {
        if(route.params.exercises === undefined){
            console.log("undefined");
        }
        else{
            console.log("UPDATE EXERCISE" + JSON.stringify(route.params.exercises));
            setexercises(route.params.exercises);
        } 
    };

    useEffect(() => {
        console.log(route.params.workoutPlanId)
    }, [])

    useEffect(() => {
        updateExerciseList()
    }, [route.params.exercises])

    const defaultPhoto = 'https://globaljabar.com/wp-content/uploads/2021/02/xbreak-workout_602724-1.jpg.pagespeed.ic_.v8byD7su-e-1.jpg';

    const handleAddWorkout = () => {
        if(name == ''){
            console.log('workout name was not provided');
            Alert.alert('Ops!','workout name was not provided',[
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ]);
            }
        else if(exercises.length == 0){
            console.log('workout name was not provided');
            Alert.alert('Ops!','exercise list is empty',[
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ]);
        }
        else {
            SecureStore.getItemAsync('access_token')
            .then((token) => {
                const userId = jwt_decode(token).user_id;
                let workoutId;
                console.log("\nSEND SEND EXERCISE" + JSON.stringify(exercises))
                console.log('IDID' + route.params.workoutPlanId)
                TokenApi.post(
                    'workout/workoutplanday/', 
                    {
                        workoutPlanId: route.params.workoutPlanId,
                        name: name,
                        description: "description"
                    },
                    {
                        headers: {
                            Authorization: 'JWT ' + token,
                        }
                    }
                )
                .then(response => {
                    console.log(response.data)
                    workoutId = response.data.id
                    route.params.exercises.forEach((value) => {
                        let exerciseId;
                        TokenApi.post(
                            '/workout/set/', 
                            {
                                workoutPlanDayId: workoutId,
                                exerciseId: value.id
                            },
                            {
                                headers: {
                                    Authorization: 'JWT ' + token,
                                }
                            }
                        )
                        .then(response => {
                            console.log(response.data)
                            exerciseId = response.data.id
                            TokenApi.post(
                                '/workout/reps/', 
                                {
                                    workoutPlanDayExerciseId: exerciseId,
                                    series: value.series,
                                    reps: value.repeat,
                                },
                                {
                                    headers: {
                                        Authorization: 'JWT ' + token,
                                    }
                                }
                            )
                            .then(response => {
                                console.log(response.data)
                            })
                            .catch(error => {
                                console.log(error.message)
                            })
                        })
                        .catch(error => {
                            console.log(error.message)
                        })
                    })
                })
                .catch(error => {
                    console.log(error.message)
                })
            })
            navigation.navigate('Workout');
        }
    };

    const  handleAddExercise = () => {
        navigation.navigate('AddExerciseToWorkout', {workoutPlanId: route.params.workoutPlanId, exercises: exercises} );
    };


    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={AddWorkoutStyle.container}
        >
            <View style={AddWorkoutStyle.upperContener}>
                <Text style={AddWorkoutStyle.upperContenerText}>Create workout</Text>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={AddWorkoutStyle.untouchableContainer}>
                <View style={AddWorkoutStyle.labelsCointeiner}>
                    <FloatingLabelInput
                    value={name}
                    label='Workout name'
                    onChangeText={text => setName(text)}
                    containerStyles={AddWorkoutStyle.floatingLabelInputContainerStyle}
                    customLabelStyles={{
                        colorFocused: COLORS.midlle_gray,
                        fontSizeFocused: 10,
                    }}/>
                </View>
            </View>
            </TouchableWithoutFeedback>
            <Text style={AddWorkoutStyle.titleText}>    Exercises:              Repetitions:   Series:</Text>
            <View style={AddWorkoutStyle.addedExercisesContainer}> 
            <ScrollView contentContainerStyle={AddWorkoutStyle.scrollView}
            centerContent>
                {exercises.map((item, index) => {
                    return(
                        <View style={AddWorkoutStyle.singleExerciseContainer}> 
                            <View style={AddWorkoutStyle.rowDivisionContainer}> 
                                <View style={AddWorkoutStyle.exerciseNameContainer}>
                                <View style={AddWorkoutStyle.imageContenerAddWorkout}>
                                        <Image
                                        style={AddWorkoutStyle.imageAddWorkout}
                                        source={{uri: item.urlPhoto}}/>
                                    </View>
                                    <View style={AddWorkoutStyle.workoutNameContainer}>
                                    <Text style={AddWorkoutStyle.workoutNameText}> {item.name}</Text>
                                    </View>
                                    
                                </View>
                                <View style={AddWorkoutStyle.repeatAndSeriesContainer}>
                                    <Text style={AddWorkoutStyle.numberText}> {item.repeat}</Text>
                                </View>
                                <View style={AddWorkoutStyle.repeatAndSeriesContainer}>
                                    <Text style={AddWorkoutStyle.numberText}> {item.series}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
                <View style={AddWorkoutStyle.exerciseButtonContainer}>
                    <TouchableOpacity style={AddWorkoutStyle.exerciseButton}
                    onPress={handleAddExercise}>
                        <Text style={AddWorkoutStyle.exerciseButtonText}>ADD EXERCISE</Text>
                    </TouchableOpacity>
                </View> 
                </ScrollView>
            </View>
            <View style={AddWorkoutStyle.buttonContainer}>
                <TouchableOpacity style={AddWorkoutStyle.button}
                onPress={handleAddWorkout}>
                    <Text style={AddWorkoutStyle.buttonText}>CREATE WORKOUT</Text>
                </TouchableOpacity>
            </View> 
        </KeyboardAvoidingView>
    )
}

export default AddWorkoutScreen
