import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, Image, View } from 'react-native'
import { ExerciseStyles } from '../components/exercise/ExerciseStyles';


const ExerciseScreen = () => {
    state = {
        id: 0,
        name: "Pushups",
        description: "The pushup is maybe the most precscribed and easy exercise in all of bodyweight exercises that can be done anywhere. They’re part of the fitness qualification testing for almost any military or law enforcement agency, athletes are tested on it in the pre-season, bodybuilders use pushups as a finishing move on chest day.No matter where you go in this industry, pushup prowess is still considered a commodity. But as with any other exercise, the pushup can become stale.",
        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1076/articles/2016/10/woman-pushup-1522242407.jpg?crop=1xw:0.75xh;center,top&resize=980:*',
    };

    refreshExercise = (item) =>{
        axios
        .get(`/exercise/${item.id}`)
        .then((res) => this.setState({ 
            name: res.data.name,
            description: res.data.description,
            imageUrl: res.data.imageUrl
         }))
        .catch((err) => console.log(err));
    }



    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={ExerciseStyles.container}>
                
            <View style={ExerciseStyles.imageContener}>
                <Image
                style={ExerciseStyles.image}
                source={{
                    uri: state.imageUrl}}/>
            </View>

            <View style={ExerciseStyles.nameContener}>
                <Text style={ExerciseStyles.nameText}>
                    {state.name}
                </Text>
            </View>

            <View style={ExerciseStyles.descriptionContener}>
                <Text style={ExerciseStyles.descriptionText}
                android_hyphenationFrequency
                adjustsFontSizeToFit>
                    {state.description}
                </Text>
            </View>

        </KeyboardAvoidingView>
    )
}

export default ExerciseScreen