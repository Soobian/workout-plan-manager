import React, { Component , useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity,  Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { AddMeasurementStyle } from '../components/profile/AddMeasurementStyle';
import { COLORS } from '../components/colors/Colors';

const AddMeasurementScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [chest, setChest] = useState('')
    const [password, setPassword] = useState('')

    const formFields = [
        {label: 'Chest', value: email, onChangeText: text => setEmail(text), darkTheme: false},
        {label: 'Waist', value: email, onChangeText: text => setEmail(text), darkTheme: false},
        {label: 'Biceps', value: email, onChangeText: text => setEmail(text),darkTheme: false},
        {label: 'Thigh', value: email, onChangeText: text => setEmail(text), darkTheme: false},
    ]
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={AddMeasurementStyle.container}
        >
            <View style={AddMeasurementStyle.upperContener}>
                <Text style={AddMeasurementStyle.upperContenerText}>Add measurement</Text>
            </View>
            <TouchableWithoutFeedback 
            onPress={Keyboard.dismiss} 
            style={AddMeasurementStyle.upperContener}>
                <View style={AddMeasurementStyle.inputContainer}>
                    {formFields.map((item, index) => {
                        return (
                            <FloatingLabelInput
                                key={index}
                                label={item.label}
                                value={item.value}
                                darkTheme={item.darkTheme}
                                secureTextEntry={item.secureTextEntry}
                                onChangeText={item.onChangeText}
                                containerStyles={AddMeasurementStyle.floatingLabelInputContainerStyle}
                                customLabelStyles={{
                                    colorFocused: 'gray',
                                    fontSizeFocused: 10,
                                }}
                            />
                        )
                    })}
                </View>
            </TouchableWithoutFeedback>
            <View style={AddMeasurementStyle.buttonContainer}>
                <TouchableOpacity 
                    style={AddMeasurementStyle.button}
                >
                    <Text style={AddMeasurementStyle.buttonText}>ADD</Text>
                </TouchableOpacity>
            </View>
            
        </KeyboardAvoidingView>
    )
}

export default AddMeasurementScreen
