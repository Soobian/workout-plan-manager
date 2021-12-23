import React from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity,  Dimensions } from 'react-native'
import { COLORS } from '../components/colors/Colors';
import { WorkoutListStyle } from '../components/workout/WorkoutListStyle';

const WorkoutListScreen = ({navigation}) => {
    workoutList = [
        {name: 'ABS workout', duration: '1h', level: 'medium', type: 'ABS'},
        {name: 'Killer', duration: '45min', level: 'medium', type: 'Cardio'},
        {name: 'Hot body', duration: '40min', level: 'hard', type: 'Legs'},
        {name: 'Skalpel', duration: '30min', level: 'easy', type: 'Cardio'},
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
                        <TouchableOpacity style={WorkoutListStyle.singleMeasurementContainer}>
                        <View style={WorkoutListStyle.workoutNameContainer}> 
                            <Text style={WorkoutListStyle.workoutNameText}>{item.name}</Text>
                        </View>
                        <View style={WorkoutListStyle.specificsContainer}> 
                            <View style={WorkoutListStyle.specificsOneItemContainer}>
                                    <Text style={WorkoutListStyle.specificText}>DURATION</Text>
                                    <Text style={WorkoutListStyle.numbersText}>{item.duration}</Text>
                            </View>
                            <View style={WorkoutListStyle.specificsOneItemContainer}>
                                    <Text style={WorkoutListStyle.specificText}>LEVEL</Text>
                                    <Text style={WorkoutListStyle.numbersText}>{item.level}</Text>
                            </View>
                            <View style={WorkoutListStyle.specificsOneItemContainer}>
                                    <Text style={WorkoutListStyle.specificText}>TYPE</Text>
                                    <Text style={WorkoutListStyle.numbersText}>{item.type}</Text>
                            </View>
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
