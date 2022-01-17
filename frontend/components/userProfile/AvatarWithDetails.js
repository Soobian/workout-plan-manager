import React from "react"
import { Text, View, StyleSheet, Image} from "react-native"
import { COLORS } from "../colors/Colors";

/**
 * @module UserProfile
 * @param {data} - users data
 * @param {navigation} - enables come back to previous screen
 */
const AvatarWithDetails = ({data, navigation}) =>{
    
    /**
     * Links to images with avatars for both sexes
     */
    const womanAvatar = "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png";
    const manAvatar = "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png";

    return (
            <View style={styles.upperContainer}>
                <View style={styles.imageContainer}>
                    <Image 
                    style={styles.image}
                    source={ sex == "Woman" ?
                        {uri: womanAvatar} : {uri: manAvatar}}/>
                </View>
                <Text style={styles.nameText}>{firstname}</Text>
                <Text style={styles.emailText}>{firstname}</Text>
            </View>
    )
}

export default AvatarWithDetails;


const styles = StyleSheet.create({
    /**
     * upper blue container with page title
     */
    upperContainer: {
        backgroundColor: COLORS.blue,
        width: '100%',
        height: '40%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
    },
    imageContainer: {
        backgroundColor: COLORS.dark_gray,
        width: 120,
        height: 120,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        backgroundColor: COLORS.blue,
        height: '100%',
        width: '100%',
    },
    nameText: {
        color: COLORS.white,
        fontSize: 18,
        paddingTop: 2,
    },
    emailText: {
        color: COLORS.white,
        fontSize: 13,
    }
  })