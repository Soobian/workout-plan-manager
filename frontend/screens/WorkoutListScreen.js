import React from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import { WorkoutListStyle } from '../components/workout/WorkoutListStyle';

const WorkoutListScreen = ({navigation}) => {

    const photos = [
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F35%252F2010%252F07%252F28170650%252Ffb-interval-training-workouts.jpg&q=85',
        'https://globaljabar.com/wp-content/uploads/2021/02/xbreak-workout_602724-1.jpg.pagespeed.ic_.v8byD7su-e-1.jpg',
        'https://www.incimages.com/uploaded_files/image/1920x1080/getty_901096798_200013332000928080_415454.jpg'
    ];
    workoutList = [
        {name: 'ABS workout', level: 'medium', urlPhoto: photos[0]},
        {name: 'Killer', level: 'medium', urlPhoto: photos[1]},
        {name: 'Hot body', level: 'hard', urlPhoto: photos[2]},
        {name: 'Skalpel',  level: 'easy', urlPhoto: photos[1]},
    ];

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
                    {workoutList.map((item, index) => {
                    return(
                        <TouchableOpacity style={WorkoutListStyle.singleWorkoutContainer}>
                            <ImageBackground 
                                style={WorkoutListStyle.image}
                                source={{uri: item.urlPhoto}}/>
                            
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
