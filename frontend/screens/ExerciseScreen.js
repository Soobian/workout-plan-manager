import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, Image, View } from 'react-native'
import { ExerciseStyles } from '../components/exercise/ExerciseStyles';


const ExerciseScreen = ({route, navigation}) => {

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

            <View style={ExerciseStyles.nameContener}>
                <Text style={ExerciseStyles.nameText}>
                    {route.params.name}
                </Text>
            </View>

            <View style={ExerciseStyles.descriptionContener}>
                <Text style={ExerciseStyles.descriptionText}
                android_hyphenationFrequency
                adjustsFontSizeToFit>
                    {route.params.description}
                </Text>
            </View>

        </KeyboardAvoidingView>
    )
}

export default ExerciseScreen