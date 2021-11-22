import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import RegisterLoginForm from '../components/authentication/RegisterLoginForm';

const RegisterScreen = ({navigation}) => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')

    const formFields = [
        {label: 'Username', value: userName, onChangeText: text => setUserName(text), isPassword: false, secureTextEntry: false, darkTheme: false},
        {label: 'Email', value: email, onChangeText: text => setEmail(text), isPassword: false, secureTextEntry: false,  darkTheme: false},
        {label: 'Password', value: password, onChangeText: text => setPassword(text), isPassword: true, secureTextEntry: true,  darkTheme: true},
        {label: 'Confirm password', value: userName, onChangeText: text => setRepeatedPassword(text), isPassword: true, secureTextEntry: true,  darkTheme: true},
    ]
    return(
        <RegisterLoginForm 
            formFields={formFields} 
            title={"Create new acount"} 
            firstText={"Sign up"} 
            secondText={"Sign in"} 
            smallText={"You already have an account?"} 
            handleScreenSwitch={() => navigation.navigate('Login')}/>
    )
}

export default RegisterScreen