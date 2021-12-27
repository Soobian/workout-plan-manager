import React, { Component , useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity,  Dimensions, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { AddMeasurementStyle } from '../components/profile/AddMeasurementStyle';
import { COLORS } from '../components/colors/Colors';

const AddMeasurementScreen = ({navigation}, measurements) => {
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

    function areAllFormsFilled(){
        let isOk = true;
        formFields.map((field, fieldId) => {
            if(field.value==''){
                console.log(field.label + " not filled")
                isOk = false;
            }
        });
        return isOk;
    }

    function areDataValid(){
        if(formFields[0].value < 30 || formFields[0].value > 200
            || formFields[1].value < 30 || formFields[1].value > 200 || 
            formFields[2].value < 6 || formFields[2].value > 50 ||
            formFields[3].value < 10 || formFields[3].value > 100){
            return false;
        }
        return true;
    }

    const handleAdd = () => {
        if(areAllFormsFilled()==true){
            if(areDataValid()==true){
                navigation.navigate('Home');
            }
            else{
                Alert.alert('Ops!','Provided data are not valid',
            [
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ]);
            }
        }
        else{
            Alert.alert('Ops!','All fields must be filled before submition',
            [
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ]);
        }
        
    }
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
            >
                <View style={AddMeasurementStyle.inputContainer}>
                    {formFields.map((item, index) => {
                        return (
                            <View style={AddMeasurementStyle.wholeContainer}>
                                <View style={AddMeasurementStyle.labelNameContianer}>
                                    <Text style={AddMeasurementStyle.labelNameText}>
                                        {item.label}
                                    </Text>
                                </View>
                                <View style={AddMeasurementStyle.labelsCointeiner}>
                                <FloatingLabelInput
                                keyboardType="numeric"
                                key={index}
                                value={item.value}
                                onChangeText={item.onChangeText}
                                containerStyles={AddMeasurementStyle.floatingLabelInputContainerStyle}
                                customLabelStyles={{
                                    colorFocused: COLORS.midlle_gray,
                                    fontSizeFocused: 10,
                                }}
                                maxDecimalPlaces='2'
                                />
                                </View>
                                <View style={AddMeasurementStyle.labelkgContianer}>
                                    <Text style={AddMeasurementStyle.labelNameText}>
                                        cm
                                    </Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </TouchableWithoutFeedback>
            <View style={AddMeasurementStyle.buttonContainer}>
                <TouchableOpacity style={AddMeasurementStyle.button}
                onPress={handleAdd}>
                    <Text style={AddMeasurementStyle.buttonText}>ADD</Text>
                </TouchableOpacity>
            </View> 
        </KeyboardAvoidingView>
    )
}

export default AddMeasurementScreen
