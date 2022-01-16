import React, {useState } from 'react'
import axios from "axios"
import { KeyboardAvoidingView, StyleSheet} from "react-native";
import { COLORS } from "../components/colors/Colors";
import AvatarWithDetails from "../components/userProfile/AvatarWithDetails";
import UserDataBox from "../components/userProfile/UserDataBox";
import InputDataForm from "../components/userProfile/InputDataForm";

/**
 * Screen with user data
 * @module UserProfile
 * @author Paulina Gacek
 * @param {navigation} - enables come back to previous screen
 */
const UserProfileScreen = ({navigation}) => {
    const [usersData, setUsersData] = useState({
        name: "random",
        email: "random@example.com",
        dateOfBirth: '-',
        height: "-",
        weight: "-",
        sex: "m",
    })

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <AvatarWithDetails data = {usersData} navigation={navigation}/>
            <UserDataBox data = {usersData} navigation={navigation}/>
            <InputDataForm data = {usersData} navigation={navigation}/>
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
