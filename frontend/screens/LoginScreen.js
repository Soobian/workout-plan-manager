import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import RegisterLoginForm from '../components/authentication/RegisterLoginForm';
import TokenApi from '../components/authentication/TokenApi';

const LoginScreen = ({navigation}) => {
    useEffect(() => {
        if(localStorage.getItem('refresh_token') !== "undefined"){
            TokenApi.post('token/refresh/', {
                refresh: localStorage.getItem('refresh_token')
            })
            .then(response => {
                localStorage.setItem('access_token', response.data.access)
                setAuthorization(true)
                navigation.navigate('Home')
            })
        }
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthorized, setAuthorization] = useState('')

    const formFields = [
        {label: 'Email', value: email, onChangeText: text => setEmail(text), isPassword: false, secureTextEntry: false,  darkTheme: false},
        {label: 'Password', value: password, onChangeText: text => setPassword(text), isPassword: true, secureTextEntry: true,  darkTheme: true},
    ]

    const handleLogin = () => {
        const payload = JSON.stringify({email, password});
        console.log(payload);

        const onSuccess = ({data}) => {
            // Set JSON Web Token on success
            console.log(data)
            localStorage.setItem('access_token', data.access)
            localStorage.setItem('refresh_token', data.refresh)
            setAuthorization(true)
            navigation.navigate('Home')
        };
        
        const onFailure = error => {
            console.log(error && error.response);
        };

        TokenApi.post('token/', payload)
            .then(onSuccess)
            .catch(onFailure);
    }

    return(
        <RegisterLoginForm 
            formFields={formFields} 
            title={'Login to your account'} 
            firstText={'Sign in'} 
            secondText={'Sign up'} 
            smallText={"You don't have an account?"} 
            handleSubmit={handleLogin} 
            handleScreenSwitch={() => navigation.navigate('Register')}/> 
    )
}

export default LoginScreen