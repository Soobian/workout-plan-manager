import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import RegisterLoginForm from '../components/authentication/RegisterLoginForm';
import BaseApi from '../components/authentication/BaseApi'

/**
 * Registration screen
 * @module Authentication
 * @author Paulina Gacek, Maciej Ciepał
 * @param {navigation} - enables come back to previous screen
 */
const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')

    const initErrors = Object.freeze({
        email: '',
        password: '',
        repeatedPassword: ''
    })

    const [errors, setErrors] = useState(initErrors)

    const updateError = (name, value) => {
		setErrors({
			...errors,
			[name]: value,
		});
	};

    const status400 = (data) => {
        for (var key of Object.keys(data)) {
            console.log(data[key][0])
            updateError(data[key][0])
        } 
    }

    const validatePassword = () => {
        if(typeof password !== "undefined" && typeof repeatedPassword !== "undefined") {
            console.log(password, repeatedPassword)
            if (password != repeatedPassword) {
                updateError(repeatedPassword, "Passwords don't match.")
                return false
            }
            else {
                return true
            }
        }
    }

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        const payload = JSON.stringify({email, password});
        console.log(payload);
        if(validatePassword){
            BaseApi.post('user/create/', payload)
            .then((res) => {
                navigation.navigate('Login');
                console.log(res);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error)
                console.log(error.response)
                if(error.response.status == 400) {
                    status400(error.response.data)
                }
            })
        }
    }

    const formFields = [
        {label: 'Email', value: email, onChangeText: text => setEmail(text), isPassword: false, secureTextEntry: false,  darkTheme: false },
        {label: 'Password', value: password, onChangeText: text => setPassword(text), isPassword: true, secureTextEntry: true,  darkTheme: true},
        {label: 'Confirm password', value: repeatedPassword, onChangeText: text => setRepeatedPassword(text), isPassword: true, secureTextEntry: true,  darkTheme: true},
    ]

    return(
        <RegisterLoginForm 
            formFields={formFields} 
            title={"Create new acount"} 
            firstText={"Sign up"} 
            secondText={"Sign in"} 
            smallText={"You already have an account?"} 
            handleSubmit={handleSubmit}
            handleScreenSwitch={() => navigation.navigate('Login')}
            errors={errors}
        />
    )
}

export default RegisterScreen