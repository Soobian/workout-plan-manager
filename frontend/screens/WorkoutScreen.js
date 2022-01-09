import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, Image, View , ScrollView, TouchableOpacity} from 'react-native'
import { ExerciseStyles } from '../components/exercise/ExerciseStyles';


const WorkoutScreen = ({route, navigation}) => {

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={ExerciseStyles.container}>
                
            <View style={ExerciseStyles.imageContener}>
                <Image
                style={ExerciseStyles.image}
                source={{
                    uri: route.params.photoUrl}}/>
            </View>

            <View style={ExerciseStyles.workoutnameContener}>
                <Text style={ExerciseStyles.nameText}>
                    {route.params.name}
                </Text>
            </View>
            
            <ScrollView style={ExerciseStyles.scrollViewWorkout}>
                <Text style={ExerciseStyles.workoutDetailsText}>
                    Level: {route.params.level}
                </Text>
                <View style={ExerciseStyles.workoutDetailsRowDivision}>
                    <Text style={ExerciseStyles.workoutDetailsText}>
                        Exercises:
                    </Text>
                    <Text style={ExerciseStyles.workoutDetailsText}>
                        Repeat:
                    </Text>
                    <Text style={ExerciseStyles.workoutDetailsText}>
                        Series:
                    </Text>
                </View>
                
                {route.params.exercises.map((item, index) => {
                    return(
                        <View style={ExerciseStyles.singleExerciseContainer}> 
                        <View style={ExerciseStyles.rowDivisionContainer}> 
                            <TouchableOpacity style={ExerciseStyles.exerciseNameContainer}
                            onPress={() => navigation.navigate('Exercise',{ name: item.name, description: "fuck diet", photoUrl: item.photoUrl})}>
                            <View style={ExerciseStyles.imageContenerAddWorkout}>
                                    <Image
                                    style={ExerciseStyles.imageAddWorkout}
                                    source={{uri: item.photoUrl}}/>
                                </View>
                                <View style={ExerciseStyles.workoutNameContainer}>
                                <Text style={ExerciseStyles.workoutNameText}> {item.name}</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <View style={ExerciseStyles.repeatAndSeriesContainer}>
                                <Text style={ExerciseStyles.numberText}> {item.repeat}</Text>
                            </View>
                            <View style={ExerciseStyles.repeatAndSeriesContainer}>
                                <Text style={ExerciseStyles.numberText}> {item.series}</Text>
                            </View>
                        </View>
                    </View>
                    )})}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default WorkoutScreen