import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity,  Dimensions } from 'react-native'
import { AddMeasurementStyle } from '../components/profile/AddMeasurementStyle';
import { RegisterLoginStyles } from '../components/authentication/RegisterLoginStyles'
import { COLORS } from '../components/colors/Colors';

const AddMeasurementScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthorized, setAuthorization] = useState('')

    const formFields = [
        {label: 'Email', value: email, onChangeText: text => setEmail(text), isPassword: false, secureTextEntry: false,  darkTheme: false},
        {label: 'Password', value: password, onChangeText: text => setPassword(text), isPassword: true, secureTextEntry: true,  darkTheme: true},
    ]
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={AddMeasurementStyle.container}
        >
            <View style={RegisterLoginStyles.upperContener}>
                <Text style={RegisterLoginStyles.upperContenerText}>{title}</Text>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={RegisterLoginStyles.inputContainer}>
                    {formFields.map((item, index) => {
                        return (
                            <FloatingLabelInput
                                key={index}
                                label={item.label}
                                value={item.value}
                                isPassword={item.isPassword}
                                darkTheme={item.darkTheme}
                                secureTextEntry={item.secureTextEntry}
                                onChangeText={item.onChangeText}
                                containerStyles={RegisterLoginStyles.floatingLabelInputContainerStyle}
                                customLabelStyles={{
                                    colorFocused: 'gray',
                                    fontSizeFocused: 10,
                                }}
                            />
                        )
                    })}
                </View>
            </TouchableWithoutFeedback>
            <View style={RegisterLoginStyles.buttonContainer}>
                <TouchableOpacity 
                    onPress={handleLogin.bind(this)}
                    style={RegisterLoginStyles.button}
                >
                    <Text style={RegisterLoginStyles.buttonText}>{firstText}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={RegisterLoginStyles.smallText}>
                    {smallText}
                    <TouchableOpacity onPress={handleScreenSwitch}>
                        <Text style={RegisterLoginStyles.buttonLabelText}>{secondText}</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AddMeasurementScreen
