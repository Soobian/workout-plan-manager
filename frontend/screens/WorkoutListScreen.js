import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native'
import { WorkoutListStyle } from '../components/workout/WorkoutListStyle';

/**
 * Screen with workout list
 * @module Workout
 * @author Paulina Gacek
 * @param {route} - enables displaying proper workout
 * @param {navigation} - enables come back to previous screen
 */
const WorkoutListScreen = ({route, navigation}) => {
    const [workoutDays, setworkoutDays] = useState([]);

    useEffect(() => {
        setworkoutDays(route.params.workouts)
        console.log('....' + workoutDays)
    }, []);

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={WorkoutListStyle.container}>
            <View style={WorkoutListStyle.upperContainer}>
                <Text style={WorkoutListStyle.upperContainerText}>My workouts</Text>
            </View>

            <View style={WorkoutListStyle.workoutListContainer}> 
                <ScrollView contentContainerStyle={WorkoutListStyle.scrollView}
                centerContent>
                    {workoutDays.map((item, index) => {
                    console.log('../..' + JSON.stringify(item.workoutplanexercises, null, 4))
                    return(
                        <TouchableOpacity 
                        key={index}
                        style={WorkoutListStyle.singleWorkoutContainer}
                        onPress={() => navigation.navigate('Work', {name: item.name, description: item.description, 
                            exercises: item.workoutplanexercises, photoUrl: route.params.photoUrl})}>
                            <View style={WorkoutListStyle.imageContenerForExercise}>
                            <Image 
                                style={WorkoutListStyle.imageExercise}
                                source={{uri: route.params.photoUrl}}/>
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
                onPress={() => navigation.navigate('AddWorkout')}>
                    <Text style={WorkoutListStyle.buttonLabelText}>CREATE WORKOUT</Text>
                    </TouchableOpacity>
                    </View>
        </KeyboardAvoidingView>
    )
}

export default WorkoutListScreen
