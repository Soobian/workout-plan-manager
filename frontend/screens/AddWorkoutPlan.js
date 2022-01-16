import React, { Component , useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard,Image,  ImageBackground, Picker, Alert } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { COLORS } from '../components/colors/Colors';
import { AddWorkoutStyle } from '../components/workout/AddWorkoutStyle';
import BaseApi from '../components/authentication/BaseApi'
import TokenApi from '../components/authentication/TokenApi';
import jwt_decode from "jwt-decode";
import * as SecureStore from 'expo-secure-store'

const AddWorkoutPlanScreen = ({route, navigation}) => {
    const [name, setName] = useState('')
    const [selectedLevel, setSelectedLevel] = useState("easy");
    const [workouts, setWorkouts] = useState('');
    const [exercises, setexercises] = useState([])

    // select workout level
    const level = [
        {value: 1, label: 'easy'},
        {value: 2, label: 'medium'},
        {value: 3, label: 'hard'},
    ];

    // all tables for select windows
    const tables = [
        {name: 'LEVEL', table: level, set: setSelectedLevel, save: selectedLevel},
    ];

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={AddWorkoutStyle.container}
        >
            <View style={AddWorkoutStyle.upperContener}>
                <Text style={AddWorkoutStyle.upperContenerText}>Create workout plan</Text>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={AddWorkoutStyle.labelsCointeiner}>
                    <FloatingLabelInput
                    value={name}
                    label='Workout name'
                    onChangeText={text => setName(text)}
                    containerStyles={AddWorkoutStyle.floatingLabelInputContainerStyle}
                    customLabelStyles={{
                        colorFocused: COLORS.midlle_gray,
                        fontSizeFocused: 10,
                    }}/>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default AddWorkoutPlanScreen
