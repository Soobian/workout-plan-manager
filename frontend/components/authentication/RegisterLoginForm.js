/**
 * @module Authentication
 * @author Maciej Ciepał
 */

import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { RegisterLoginStyles } from './RegisterLoginStyles'

/**
 * Template for Login and Registration Screeens
 * @param formFields fields which can be filled with data by user
 * @param title page title
 * @param firstText page adjusted text
 * @param smallText page adjusted small description text
 * @param secondText page adjusted text
 * @returns login/register component
 */
const RegisterLoginForm = ({formFields, title, firstText, smallText, secondText, handleSubmit, handleScreenSwitch}) => {
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={RegisterLoginStyles.container}
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
                    onPress={handleSubmit.bind(this)}
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

export default RegisterLoginForm