import React, { useEffect, useState } from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity, Dimensions, StyleSheet, Image, SafeAreaView} from 'react-native'
import { COLORS } from '../components/colors/Colors';
import AvatarWithDetails from '../components/userProfile/AvatarWithDetails';
import UserDataBox from '../components/userProfile/UserDataBox';
const { height, width } = Dimensions.get('window');

// avatars: https://www.iconfinder.com/icons/2754576/woman_female_avatar_icon

const UserProfileScreen = ({navigation}) => {
    const [usersData, setUsersData] = useState({
        name: "random",
        email: "random@example.com",
        dateOfBirth: '2137-01-01',
        height: 200,
        weight: 130,
        sex: "m",
    })

    return (
        <SafeAreaView 
            style={styles.container}>
            <AvatarWithDetails data = {usersData} navigation={navigation}/>
            <UserDataBox data = {usersData} navigation={navigation}/>
            <Text>elo</Text>
        </SafeAreaView>
    )
}
export default UserProfileScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'center'
    },
  })
