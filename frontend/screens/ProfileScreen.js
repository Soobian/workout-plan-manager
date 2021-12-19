import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { ProfileStyles } from '../components/profile/ProfileStyles';

const ProfileScreen = () => {
    state = {
        
    };

  

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={ProfileStyles.container}>
            <View style={ProfileStyles.upperContainer}>
                <Text style={ProfileStyles.upperContainerText}>My measurements</Text>
            </View>
            <ScrollView contentContainerStyle={ProfileStyles.scrollView}
            centerContent>
                
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ProfileScreen
