import React, { Component , useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, CheckBox, Picker, Image } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { COLORS } from '../components/colors/Colors';
import { AddWorkoutStyle } from '../components/workout/AddWorkoutStyle';

const AddExerciseToWorkoutScreen = ({navigation}) => {
    const [name, setName] = useState('')

    const handleAddExercise = () => {
        // returning to creation of the same workout
        navigation.navigate('AddWorkout');
    };

    const photo = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1076/articles/2016/10/woman-pushup-1522242407.jpg?crop=1xw:0.75xh;center,top&resize=980:*';

    exerciseList = [
        {id: 0, name: "pushups", photoUrl: photo},
        {id: 1, name: "sth else", photoUrl: photo},
        {id: 2, name: "have no idea", photoUrl: photo}
    ];

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={AddWorkoutStyle.container}
        >
            <View style={AddWorkoutStyle.upperContener}>
                <Text style={AddWorkoutStyle.upperContenerText}>Select exercise</Text>
            </View>
            
            <Text style={AddWorkoutStyle.titleExerciseText}>Exercises:</Text>
            <View style={AddWorkoutStyle.exercisesToSelectContainer}> 
            <ScrollView contentContainerStyle={AddWorkoutStyle.scrollView}
            centerContent>
                    {exerciseList.map((item, index) => {
                    return(
                        <View style={AddWorkoutStyle.singleExerciseWithPhotoContainer}> 
                        <View style={AddWorkoutStyle.rowDivisionContainer}> 
                            <View style={AddWorkoutStyle.exerciseNameContainer}>
                                <Text style={AddWorkoutStyle.nameText}> {item.name}</Text>
                            </View>
                            <View style={AddWorkoutStyle.imageContener}>
                                <Image
                                style={AddWorkoutStyle.image}
                                source={{uri: item.photoUrl}}/>
                            </View>
                        </View>
                    </View>)
                })}
                </ScrollView>
            </View>
            <View style={AddWorkoutStyle.buttonContainer}>
                <TouchableOpacity style={AddWorkoutStyle.button}
                onPress={handleAddExercise}>
                    <Text style={AddWorkoutStyle.buttonText}>ADD EXERCISE TO WORKOUT</Text>
                </TouchableOpacity>
            </View> 
        </KeyboardAvoidingView>
    )
}

export default AddExerciseToWorkoutScreen
