import React, { Component , useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard,Image,  ImageBackground, Picker, Alert, StyleSheet } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { COLORS } from '../components/colors/Colors';
import { AddWorkoutStyle } from '../components/workout/AddWorkoutStyle';
import BaseApi from '../components/authentication/BaseApi'
import TokenApi from '../components/authentication/TokenApi';
import jwt_decode from "jwt-decode";
import * as SecureStore from 'expo-secure-store'

/**
 * Create workout plan screen
 * @module Workout
 * @param {route} - data to display 
 * @param {navigation} - enables returning to previous screen 
 * @returns component which enables to create workout plan
 */
const AddWorkoutPlanScreen = ({route, navigation}) => {
    const [name, setName] = useState('');
    const [selectedLevel, setSelectedLevel] = useState("easy");
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    /**
     * possible workout plan level  
     */ 
    const level = [
        {value: 1, label: 'easy'},
        {value: 2, label: 'medium'},
        {value: 3, label: 'hard'},
    ];

    /**
     * action after clicking add workout plan button 
     */ 
    const  handleCreateWorkoutPlan = () => {
        navigation.navigate('Workout');
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.upperContener}>
                <Text style={styles.upperContenerText}>Create workout plan</Text>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.labelsCointeiner}>
                    <FloatingLabelInput
                    value={name}
                    label='Workout name'
                    onChangeText={text => setName(text)}
                    containerStyles={styles.floatingLabelInputContainerStyle}
                    customLabelStyles={{
                        colorFocused: COLORS.midlle_gray,
                        fontSizeFocused: 10,
                    }}/>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.labelsCointeiner}>
                    <FloatingLabelInput
                    value={imageUrl}
                    label='Workout photo url'
                    onChangeText={text => setImageUrl(text)}
                    containerStyles={styles.floatingLabelInputContainerStyle}
                    customLabelStyles={{
                        colorFocused: COLORS.midlle_gray,
                        fontSizeFocused: 10,
                    }}/>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.labelBigCointainer}>
                    <FloatingLabelInput
                    value={description}
                    label='Workout description'
                    multiline={true}
                    onChangeText={text => setDescription(text)}
                    containerStyles={styles.floatingLabelInputBigContainerStyle}
                    customLabelStyles={{
                        colorFocused: COLORS.midlle_gray,
                        fontSizeFocused: 10,
                    }}/>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.wholeContainer}>
                    <View style={styles.labelForPickerContainer}>
                        <Text style={styles.labelForPickerContainerText}>
                        Level:
                        </Text>
                    </View>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedLevel}
                            style={styles.pickerText}
                            onValueChange={(itemValue, itemIndex) => setSelectedLevel(itemValue)}
                            mode='dropdown'
                        >
                            {level.map((subitem, subindex) => {
                                return (
                                    <Picker.Item label={subitem.label} value={subitem.value} />
                                    )
                                })}
                        </Picker>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                    onPress={handleCreateWorkoutPlan}>
                        <Text style={styles.buttonText}>ADD WORKOUT PLAN</Text>
                    </TouchableOpacity>
                </View> 
        </KeyboardAvoidingView>
    )
}

export default AddWorkoutPlanScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        borderRadius: 20,
        paddingTop: 10,
        height: 350,
        alignItems: 'center',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    button: {
        backgroundColor: '#03767B',
        width: '90%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 10,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#03767B',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    
    // upper blue container
    upperContener:{
        backgroundColor: '#03767B',
        width: '103%',
        height: '18%',
        fontSize: 16,
        borderRadius: 10,
        paddingBottom: 20,
    },
    upperContenerText:{
        color: COLORS.white,
        fontWeight: '700',
        fontSize: 28,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'bottom',
        position: 'absolute',  
        bottom: 20,
        left: 30,
    },
    
    untouchableContainer: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    wholeContainer: {
        width: '90%',
        alignItems: 'center',
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
        paddingBottom: 15,
        marginBottom: 10,
    },
    labelsCointeiner: {
        paddingTop: 10,
        width: '90%',
        alignItems: 'center',
        paddingBottom: 20,
    },
    floatingLabelInputContainerStyle: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 10,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        fontWeight: "500",
        width: 60,
        fontSize: 12
    },
    labelBigCointainer: {
        width: '90%',
        height: 150,
        alignItems: 'center',
        paddingBottom: 30,
    },
    floatingLabelInputBigContainerStyle : {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        fontWeight: "500",
        width: 60,
        height: 120,
        fontSize: 12,
    },
    pickerContainer: {
        backgroundColor: COLORS.white,
        height: 30,
        borderRadius: 4,
    },
    labelForPickerContainer: {
        height: 40,
        borderRadius: 4,
        width: 90,
        left: -10,
    },
    labelForPickerContainerText: {
        color: COLORS.midlle_gray,
        fontSize: 15,
        marginVertical: 10,
        left: 60,
    },
    pickerText: {
        height: 30, 
        width: 130, 
        color: COLORS.midlle_gray
    },

    // exercises
    titleText: {
        color: COLORS.dark_gray,
        fontWeight: '900',
        fontSize: 16,
        paddingBottom: 3
    },
    addedExercisesContainer: {
        borderRadius: 10,
        marginBottom: 7,
        paddingVertical: 5,
        width: '95%',
        height: '45%',

    },
    scrollView: {
        // container which enables scrolling
        width: '100%',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#03767B',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 10,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
})
