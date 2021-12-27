import React, { Component , useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Picker, Image } from 'react-native'
import { CheckBox, Icon } from 'react-native-elements';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { COLORS } from '../components/colors/Colors';
import { AddWorkoutStyle } from '../components/workout/AddWorkoutStyle';

const AddExerciseToWorkoutScreen = ({navigation}) => {
    const [name, setName] = useState('')

    const handleAddExercise = () => {
        // returning to creation of the same workout
        navigation.navigate('AddWorkout');
    };

    const photos = [
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1076/articles/2016/10/woman-pushup-1522242407.jpg?crop=1xw:0.75xh;center,top&resize=980:*',
        'https://www.helpguide.org/wp-content/uploads/resistance-band-woman-doing-leg-workout-768.jpg',
        'https://images.medicinenet.com/images/article/main_image/stretches-for-tight-hips.jpg'
    ] ;


    exerciseList = [
        {id: 0, name: "pushups", photoUrl: photos[0], selected: false},
        {id: 1, name: "sth else", photoUrl: photos[1], selected: false},
        {id: 2, name: "have no idea", photoUrl: photos[2], selected: false}
    ];

    checklist = [];

    const handleSelection = (id) => {
        console.log(id);
        for(var i = 0; i < exerciseList.length; ++i){
            if(i==id){
                exerciseList[i].selected = true;
            }
            else{
                exerciseList[i].selected = false;
            } 
        }
    };

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
                            <View style={AddWorkoutStyle.checkboxContainer}>
                                <CheckBox
                                center={true}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                checked={item.selected}
                                onPress={() => handleSelection(index)}
                                />
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
