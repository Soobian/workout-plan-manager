import React from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity,  Dimensions } from 'react-native'
import { MeasurementsStyles } from '../components/measurements/MeasurementsStyles';
import { COLORS } from '../components/colors/Colors';

// avatars: https://www.iconfinder.com/icons/2754576/woman_female_avatar_icon

const UserProfileScreen = ({navigation}) => {
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={MeasurementsStyles.container}>
            <View style={MeasurementsStyles.upperContainer}>
                <Text style={MeasurementsStyles.upperContainerText}>My measurements</Text>
            </View>
            
        </KeyboardAvoidingView>
    )
}
export default UserProfileScreen
