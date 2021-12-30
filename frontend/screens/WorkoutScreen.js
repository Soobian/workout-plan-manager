import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { WorkoutStyles } from '../components/workout/WorkoutStyles';


const WorkoutScreen = () => {
    state = {
        workoutId: 0,
        name: "a random workout",
        exercises: [
            {
                id: 0,
                name: "Power push",
                repeat: 2
            },
            {
                id: 1,
                name: "Squts",
                repeat: 5
            },
            
        ]
    };

    // on push go to the workout page
    const handleWorkout = (id) => {
        
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={WorkoutStyles.container}>
            <View style={WorkoutStyles.workoutContainer}>
            <Text style={WorkoutStyles.workoutContainerText}>
                    {state.name}</Text>
            </View>
                <Text style={WorkoutStyles.topLabelsExercise}>
                    Exercise                  Repetitions
                </Text>
            
            <ScrollView contentContainerStyle={WorkoutStyles.scrollView}
            centerContent>
                {state.exercises.map((item, index) => {
                    return(
                        <View
                        style={WorkoutStyles.exerciseWithReapeatContainer}>
                            <TouchableOpacity 
                            //onPress={handleWorkout(item.id)} 
                            // on press it should display WorkoutScreen of the proper workout
                            style={WorkoutStyles.exerciseItemContainer}>
                                <Text style={WorkoutStyles.exerciseItemContainerText}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                            <Text style={WorkoutStyles.repeatItemCOntainer}>
                                    {item.repeat}
                            </Text>
                        </View>)
                })}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default WorkoutScreen
