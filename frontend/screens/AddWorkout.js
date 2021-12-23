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
    const [selectedDuration, setSelectedDuration] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedType, setSelectedType] = useState("");

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

    // select workout level
    const level = [
        {value: 1, label: 'easy'},
        {value: 2, label: 'medium'},
        {value: 3, label: 'hard'},
        {value: 4, label: 'killer'},
    ];

    // select workout type 
    const type = [
        {value: 1, label: 'cardio'},
        {value: 2, label: 'strength'},
        {value: 3, label: 'stretching'},
        {value: 4, label: 'balance'},
        {value: 4, label: 'HIIT'},
    ];
    // all tables for select windows
    const tables = [
        {name: 'DURATION', table: duration},
        {name: 'LEVEL', table: level},
        {name: 'TYPE', table: type}
    ];

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={AddWorkoutStyle.container}
        >
            <View style={AddWorkoutStyle.upperContener}>
                <Text style={AddWorkoutStyle.upperContenerText}>Add workout</Text>
            </View>

            {tables.map((item, index) => {
                return (
                    <View style={AddWorkoutStyle.wholeContainer}>
                <View style={AddWorkoutStyle.labelForPickerContainer}>
                    <Text style={AddWorkoutStyle.labelForPickerContainerText}>
                        {item.name}:
                    </Text>
                </View>
                <View style={AddWorkoutStyle.pickerContainer}>
                    <Picker
                        selectedValue={selectedDuration}
                        style={{ height: 40, width: 130 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedDuration(itemValue)}
                        mode='dropdown'
                    >
                        {item.table.map((subitem, index) => {
                            return (
                                <Picker.Item label={subitem.label} value={subitem.value} />
                                )
                            })}
                    </Picker>
                </View>
            </View>
                )
            })}                   
            
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
