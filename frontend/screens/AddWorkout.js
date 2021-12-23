import React, { Component , useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Picker } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { COLORS } from '../components/colors/Colors';
import { AddWorkoutStyle } from '../components/workout/AddWorkoutStyle';
import Select from 'react-select'

const AddWorkoutScreen = ({navigation}) => {
    const [chest, setChest] = useState('')
    const [waist, setWaist] = useState('')
    const [biceps, setBiceps] = useState('')
    const [thigh, setThigh] = useState('')

    const formFields = [
        {label: 'CHEST', value: chest, onChangeText: text => setChest(text)},
        {label: 'WAIST', value: waist, onChangeText: text => setWaist(text)},
        {label: 'BICEPS', value: biceps, onChangeText: text => setBiceps(text)},
        {label: 'THIGH', value: thigh, onChangeText: text => setThigh(text)},
    ]

    const handleAdd = () => {
        // checking whether all fields are filled 
        navigation.navigate('Home');
    };

    // select workout duration

    const duration = [
        {value: 1, label: '15min'},
        {value: 2, label: '30min'},
        {value: 3, label: '45min'},
        {value: 4, label: '1hmin'},
        {value: 5, label: '1h 15min'},
        {value: 6, label: '1h 30min'},
        {value: 7, label: '1h 45min'},
        {value: 8, label: '2h'},
    ];

    const [selectedDuration, setSelectedDuration] = useState("");

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={AddWorkoutStyle.container}
        >
            <View style={AddWorkoutStyle.upperContener}>
                <Text style={AddWorkoutStyle.upperContenerText}>Add workout</Text>
            </View>
            <View style={AddWorkoutStyle.pickerContainer}>
                <Picker
                    selectedValue={selectedDuration}
                    style={{ height: 40, width: 130 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedDuration(itemValue)}
                    mode='dropdown'
                >

                    {duration.map((item, index) => {
                            return (
                                <Picker.Item label={item.label} value={item.value} />
                            )
                        })}
                </Picker>
            </View>
            

            <TouchableWithoutFeedback 
            onPress={Keyboard.dismiss} 
            >
                <View style={AddWorkoutStyle.inputContainer}>
                    {formFields.map((item, index) => {
                        return (
                            <View style={AddWorkoutStyle.wholeContainer}>
                                <View style={AddWorkoutStyle.labelNameContianer}>
                                    <Text style={AddWorkoutStyle.labelNameText}>
                                        {item.label}
                                    </Text>
                                </View>
                                <View style={AddWorkoutStyle.labelsCointeiner}>
                                <FloatingLabelInput
                                keyboardType="numeric"
                                key={index}
                                value={item.value}
                                onChangeText={item.onChangeText}
                                containerStyles={AddWorkoutStyle.floatingLabelInputContainerStyle}
                                customLabelStyles={{
                                    colorFocused: COLORS.midlle_gray,
                                    fontSizeFocused: 10,
                                }}
                                maxDecimalPlaces='2'
                                />
                                </View>
                                <View style={AddWorkoutStyle.labelkgContianer}>
                                    <Text style={AddWorkoutStyle.labelNameText}>
                                        kg
                                    </Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </TouchableWithoutFeedback>
            <View style={AddWorkoutStyle.buttonContainer}>
                <TouchableOpacity style={AddWorkoutStyle.button}
                onPress={handleAdd}>
                    <Text style={AddWorkoutStyle.buttonText}>ADD</Text>
                </TouchableOpacity>
            </View> 
        </KeyboardAvoidingView>
    )
}

export default AddWorkoutScreen
