import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import RegisterLoginForm from '../components/authentication/RegisterLoginForm';
import api, {setClientToken} from '../components/authentication/APIKit';

const LoginScreen = ({navigation}) => {
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
            setClientToken(data.token);
            setAuthorization(true)
        };
        
        const onFailure = error => {
            console.log(error && error.response);
        };

        api.post('api/token/', payload)
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
            handleLogin={() => navigation.navigate('Home')} 
            handleScreenSwitch={() => navigation.navigate('Register')}/> 
    )
}

export default LoginScreen