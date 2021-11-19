import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import RegisterLoginForm from '../components/authentication/RegisterLoginForm';


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    formFields = [
        {label: 'Email', value: email, onChangeText: text => setEmail(text), isPassword: false, secureTextEntry: false,  darkTheme: false},
        {label: 'Password', value: password, onChangeText: text => setPassword(text), isPassword: true, secureTextEntry: true,  darkTheme: true},
    ]

    const handleSignUp = () => {
    
    }

    const handleLogin = () => {
    
    }

    return(
        <RegisterLoginForm formFields={formFields} title={'Login to your account'} firstText={'Sign in'} secondText={'Sign up'} smallText={"You don't have an account?"}/> 
    )
}

export default LoginScreen