import React from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { WorkoutListStyle } from '../components/workout/WorkoutListStyle';

const WorkoutListScreen = ({route, navigation}) => {

    const updateWorkoutList = () => {
        console.log("====== update workoutlist =======");
        if(typeof route.params === 'undefined'){
            console.log("workout list: undefined");
            // load current workout list from data base
        }
        else{
            console.log("newWorkout was added: ");
            if(route.params.newWorkout.name != ''){
                console.log("Newworkout params:", route.params.newWorkout);
                const newworkout = {
                    name: route.params.newWorkout.name, 
                    level: route.params.newWorkout.level, 
                    urlPhoto: route.params.newWorkout.urlPhoto,
                    exercises: route.params.newWorkout.exerciseList
                };
                workoutList.push(newworkout);
                console.log(workoutList);
            }
        } 
    };

    const photos = [
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F35%252F2010%252F07%252F28170650%252Ffb-interval-training-workouts.jpg&q=85',
        'https://globaljabar.com/wp-content/uploads/2021/02/xbreak-workout_602724-1.jpg.pagespeed.ic_.v8byD7su-e-1.jpg',
        'https://www.incimages.com/uploaded_files/image/1920x1080/getty_901096798_200013332000928080_415454.jpg'
    ];

    const workoutList = [
        {name: 'ABS workout', level: 'medium', urlPhoto: photos[0], exercises: [
            {id: 0, name: "pushups", 
            photoUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1076/articles/2016/10/woman-pushup-1522242407.jpg?crop=1xw:0.75xh;center,top&resize=980:*', series: 3, repeat: 6},
            {id: 1, name: "sth else", photoUrl: 'https://www.helpguide.org/wp-content/uploads/resistance-band-woman-doing-leg-workout-768.jpg', series: 13, repeat: 6},
            {id: 2, name: "have no idea", photoUrl: 'https://images.medicinenet.com/images/article/main_image/stretches-for-tight-hips.jpg', series: 10, repeat: 6}
        ]},
        {name: 'Killer', level: 'medium', urlPhoto: photos[1], exercises : []},
        {name: 'Hot body', level: 'hard', urlPhoto: photos[2], exercises : []},
        {name: 'Skalpel',  level: 'easy', urlPhoto: photos[1], exercises: []},
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
                        <TouchableOpacity 
                        style={WorkoutListStyle.singleWorkoutContainer}
                        onPress={() => navigation.navigate('Work', {name: item.name, level: item.level, photoUrl: item.urlPhoto, 
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
