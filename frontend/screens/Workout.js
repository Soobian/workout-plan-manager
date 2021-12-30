import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, Image, View , ScrollView} from 'react-native'
import { ExerciseStyles } from '../components/exercise/ExerciseStyles';


const Workout = ({route, navigation}) => {

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
                <Text style={ExerciseStyles.descriptionText}>
                    Level: {route.params.level}
                </Text>
                <Text style={ExerciseStyles.descriptionText}>
                    Exercises: 
                </Text>
            </ScrollView>
            

        </KeyboardAvoidingView>
    )
}

export default Workout