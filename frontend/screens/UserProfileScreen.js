import React, {useState, useEffect } from 'react'
import axios from "axios"
import { KeyboardAvoidingView, StyleSheet, View, TouchableOpacity, Text} from "react-native";
import { COLORS } from "../components/colors/Colors";
import AvatarWithDetails from "../components/userProfile/AvatarWithDetails";
import UserDataBox from "../components/userProfile/UserDataBox";
import InputDataForm from "../components/userProfile/InputDataForm";
import { MeasurementsStyles } from '../components/measurements/MeasurementsStyles';
import TokenApi from '../components/authentication/TokenApi';
import jwt_decode from "jwt-decode";
import * as SecureStore from 'expo-secure-store'
import { useIsFocused } from "@react-navigation/native";

/**
 * Screen with user data
 * @module UserProfile
 * @author Paulina Gacek
 * @param {navigation} - enables come back to previous screen
 */
const UserProfileScreen = ({navigation}) => {

    const isFocused = useIsFocused();
    const [firstname, setFirstName] = useState("");
    const [age, setage] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setweight] = useState("");
    const [sex, setsex] = useState("");

    const handleSubmit = () => {
        SecureStore.getItemAsync('access_token')
        
        .then((token) => {
            const userId = jwt_decode(token).user_id
            const data = {
                user: userId,
                firstname: firstname,
                height: parseInt(height),
                weight: parseInt(weight),
                sex: sex,
                age: parseInt(age),
            }
            console.log(data)
            TokenApi.put(
                'user/parameters/' + userId + '/', 
                data,
                {
                    headers: {
                        Authorization: 'JWT ' + token,
                    }
                }
            )
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
                console.log(error.message)
            })
        })
    }

    useEffect(() => {
        SecureStore.getItemAsync('access_token')
        .then((token) => {
            const userId = jwt_decode(token).user_id
            TokenApi.get(
                'user/parameters/' + userId + '/', 
                {
                    headers: {
                        Authorization: 'JWT ' + token,
                    }
                }
            )
            .then(response => {
                setFirstName(response.data.firstname)
                setage(response.data.age)
                setHeight(response.data.height)
                setweight(response.data.weight)
                setsex(response.data.sex)
            })
            .catch(error => {
                console.log(error)
            })
        })
    }, [isFocused])

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <AvatarWithDetails firstname={firstname} sex={sex} navigation={navigation}/>
            <UserDataBox age={age} height={height} weight={weight} navigation={navigation}/>
            <InputDataForm setFirstName={setFirstName} setage={setage} setHeight={setHeight} setweight={setweight} setsex={setsex} navigation={navigation}/>
            <TouchableOpacity style={MeasurementsStyles.button}
                onPress={handleSubmit}>
                <Text style={MeasurementsStyles.buttonLabelText}>UPDATE</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
export default UserProfileScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
    },
  })
