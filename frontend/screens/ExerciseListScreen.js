import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { ExerciseStyles } from '../components/exercise/ExerciseStyles';

/**
 * @module Exercise
 * @author Paulina Gacek, Maciej Ciepał
 * @param {route} - enables displaying proper exercise
 * @param {navigation} - enables come back to previous screen
 */
const ExerciseListScreen = () => {
    state = {}

    const refreshList = () => {
        axios
        .get("/exercises/")
        .then((res) => this.setState({ exercises: res.data }))
        .catch((err) => console.log(err));
    };

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
