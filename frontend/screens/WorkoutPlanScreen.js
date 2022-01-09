import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import { WorkoutListStyle } from '../components/workout/WorkoutListStyle';


const WorkoutPlanScreen = ({route, navigation}) => {
    
    const photos = [
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F35%252F2010%252F07%252F28170650%252Ffb-interval-training-workouts.jpg&q=85',
        'https://globaljabar.com/wp-content/uploads/2021/02/xbreak-workout_602724-1.jpg.pagespeed.ic_.v8byD7su-e-1.jpg',
        'https://www.incimages.com/uploaded_files/image/1920x1080/getty_901096798_200013332000928080_415454.jpg'
    ];

    const planList = [
        {name: "Plan 1 ", level: 'medium', urlPhoto: photos[0] },
        {name: "Plan 2", level: 'medium', urlPhoto: photos[1]},
        {name: "Plan 3", level: 'hard', urlPhoto: photos[2]},
        {name: "Plan 4",  level: 'easy', urlPhoto: photos[1]},
    ];

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
                    {planList.map((item, index) => {
                    return(
                        <TouchableOpacity 
                        key={index}
                        style={WorkoutListStyle.singleWorkoutContainer}
                        onPress={() => navigation.navigate('WorkoutList', {name: item.name, level: item.level, photoUrl: item.urlPhoto, 
                        exercises: item.exercises})}>
                            <View style={WorkoutListStyle.imageContenerForExercise}>
                            <Image 
                                style={WorkoutListStyle.imageExercise}
                                source={{uri: item.urlPhoto}}/>
                            </View>
                            <View style={WorkoutListStyle.workoutNameContainer}>
                                <Text style={WorkoutListStyle.workoutNameText}>{item.name}</Text>
                                <Text style={WorkoutListStyle.workoutLevelText}>{item.level}</Text>
                            </View>  
                    </TouchableOpacity>)
                })}
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

export default WorkoutPlanScreen
