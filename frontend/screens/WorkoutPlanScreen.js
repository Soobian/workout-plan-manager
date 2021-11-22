import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { ExerciseStyles } from '../components/exercise/ExerciseStyles';


const ExerciseListScreen = () => {
    state = {
        workouts: []
    };

    const refreshList = () => {
        axios
        .get("/exercises/")
        .then((res) => this.setState({ exercises: res.data }))
        .catch((err) => console.log(err));
    };

    // on push go to the workout page
    const handleWorkout = (id) => {
        
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
                        <View>
                        <Text style={ExerciseStyles.exerciseItemContainerText}>
                            {item.index}
                        </Text>
                         <TouchableOpacity 
                        //onPress={handleExercise(item.id)} 
                        // on press it should display ExerciseScreen of proper exercise
                        style={ExerciseStyles.exerciseItemContainer}>
                        <Text style={ExerciseStyles.exerciseItemContainerText}>
                            {item.name}
                        </Text>
                        </TouchableOpacity>)
                        </View>
                        
                })}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ExerciseListScreen
