import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { ExerciseStyles } from '../components/exercise/ExerciseStyles';


const ExerciseListScreen = () => {
    state = {
        exercises: [
            {
                id: 1,
                name: "Pushup"
            },
            {
                id: 2,
                name: "Squats"
            },
            {
                id: 3,
                name: "Walking"
            },
            {
                id: 4,
                name: "Dancing"
            },
            {
                id: 5,
                name: "Lunges"
            },
            {
                id: 6,
                name: "Abdominal Crunches"
            },
            {
                id: 7,
                name: "Pushup"
            },
            {
                id: 8,
                name: "Squats"
            },
            {
                id: 9,
                name: "Pushup"
            },
            {
                id: 10,
                name: "Squats"
            },
            {
                id: 8,
                name: "Squats"
            },
            {
                id: 9,
                name: "Pushup"
            },
            {
                id: 10,
                name: "Squats"
            },
        ]
    };

    const refreshList = () => {
        axios
        .get("/exercises/")
        .then((res) => this.setState({ exercises: res.data }))
        .catch((err) => console.log(err));
    };

    const handleExercise = (id) => {

    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={ExerciseStyles.container}>
            <View style={ExerciseStyles.exerciseContainer}>
            <Text style={ExerciseStyles.exerciseText}>
                    Exercises</Text>
            </View>
            <ScrollView contentContainerStyle={ExerciseStyles.scrollView}
            centerContent>
                {state.exercises.map((item, index) => {
                    return(
                        // button with exercise name displayed
                         <TouchableOpacity 
                        //onPress={handleExercise(item.id)} 
                        // on press it should display ExerciseScreen of proper exercise
                        style={ExerciseStyles.exerciseItemContainer}>
                        <Text style={ExerciseStyles.exerciseItemContainerText}>
                            {item.name}
                        </Text>
                        </TouchableOpacity>)
                })}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ExerciseListScreen
