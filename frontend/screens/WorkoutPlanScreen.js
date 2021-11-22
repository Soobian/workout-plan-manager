import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { WorkoutStyles } from '../components/workout/WorkoutStyles';


const WorkoutPlanScreen = () => {
    state = {
        planId: 0,
        name: "my first workout plan",
        workouts: [
            {
                id: 0,
                name: "Power push"
            },
            {
                id: 1,
                name: "Power push"
            },
            {
                id: 2,
                name: "Power push"
            },

        ]
    };

    const weekDays = [
        {name: 'Monday'},
        {name: 'Tuesday'},
        {name: 'Wednesday'},
        {name: 'Thursday'},
        {name: 'Friday'},
        {name: 'Saturday'},
        {name: 'Sunday'},
    ]

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
            <ScrollView contentContainerStyle={WorkoutStyles.scrollView}
            centerContent>
                {state.workouts.map((item, index) => {
                    return(
                        <View>
                            <Text style={WorkoutStyles.workDayContainer}>
                                {weekDays[index].name}
                            </Text>

                            <TouchableOpacity 
                            //onPress={handleWorkout(item.id)} 
                            // on press it should display WorkoutScreen of the proper workout
                            style={WorkoutStyles.workoutItemContainer}>
                                <Text style={WorkoutStyles.workoutItemContainerText}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        </View>)
                })}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default WorkoutPlanScreen
