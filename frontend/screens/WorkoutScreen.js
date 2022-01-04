import React, { useState } from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { WorkoutStyles } from '../components/workout/WorkoutStyles';


const WorkoutScreen = ({route, navigation}) => {

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={WorkoutStyles.container}>
                
            <View style={WorkoutStyles.imageContener}>
                <Image
                style={WorkoutStyles.image}
                source={{
                    uri: route.params.data.urlPhoto}}/>
            </View>

            <View style={WorkoutStyles.nameContener}>
                <Text style={WorkoutStyles.nameText}>
                    {route.params.data.name}
                </Text>
            </View>

            <View style={WorkoutStyles.descriptionContener}>
                <Text style={WorkoutStyles.descriptionText}
                android_hyphenationFrequency
                adjustsFontSizeToFit>
                    {route.params.description}
                </Text>
            </View>

        </KeyboardAvoidingView>
    )
}

export default WorkoutScreen
