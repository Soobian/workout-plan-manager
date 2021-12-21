import React from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity,  Dimensions } from 'react-native'
import { COLORS } from '../components/colors/Colors';
import { WorkoutListStyle } from '../components/workout/WorkoutListStyle';

const WorkoutListScreen = ({navigation}) => {
    

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
                    <TouchableOpacity style={WorkoutListStyle.singleMeasurementContainer}>
                        <View style={WorkoutListStyle.workoutNameContainer}> 
                            <Text style={WorkoutListStyle.workoutNameText}>workout name</Text>
                        </View>
                        <View style={WorkoutListStyle.specificsContainer}> 
                            <View style={WorkoutListStyle.specificsOneItemContainer}>
                                    <Text style={WorkoutListStyle.specificText}>DURATION</Text>
                            </View>
                            <View style={WorkoutListStyle.specificsOneItemContainer}>
                                    <Text style={WorkoutListStyle.specificText}>LEVEL</Text>
                            </View>
                            <View style={WorkoutListStyle.specificsOneItemContainer}>
                                    <Text style={WorkoutListStyle.specificText}>TYPE</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={WorkoutListStyle.buttonContainer}>
                <TouchableOpacity style={WorkoutListStyle.button}
                onPress={() => navigation.navigate('AddMeasurement')}>
                    <Text style={WorkoutListStyle.buttonLabelText}>ADD WORKOUT</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default WorkoutListScreen
