import React from 'react'
import { View, TouchableOpacity, Text , StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../colors/Colors';
import { HomeScreenStyles } from './HomeScreenStyles';
import * as SecureStore from 'expo-secure-store'
import jwt_decode from "jwt-decode";
import { useIsFocused } from "@react-navigation/native";
import TokenApi from '../authentication/TokenApi';

const { width } = Dimensions.get('window');

/**
 * @module Home
 * @author Paulina Gacek
 * @param {data} - enables displaying proper measurement
 * @param {navigation} - enables come back to previous screen
 * @returns component with the latest measurement
 */
const LastMeasurement = ({data, navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={HomeScreenStyles.titleText}>Last measurement from {data.date}:</Text>
        <View style={styles.measurementContainer}> 
            <View style={styles.itemContainer}>
                <Text style={styles.specificText}>CHEST</Text>
                <Text style={styles.numbersText}>{data.chestSize}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.specificText}>WAIST</Text>
                <Text style={styles.numbersText}>{data.waistSize}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.specificText}>BICEPS</Text>
                <Text style={styles.numbersText}>{data.bicepsSize}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.specificText}>THIGH</Text>
                <Text style={styles.numbersText}>{data.thighSize}</Text>
            </View>
        </View>
        <View style={styles.twobuttons}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('AddMeasurement')}>
                <Text style={styles.buttonLabelText}>ADD MEASUREMENT</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Measurements')}>
                <Text style={styles.buttonLabelText}>SEE HISTORY</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: width *0.05,
        backgroundColor: COLORS.white,
        width: '90%',
        height: 200
    },
    measurementContainer: {
        width: '100%',
        height: 60,
        borderColor: COLORS.blue,
        borderWidth: 2,
        borderRadius: 8,
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.white,
        shadowColor: COLORS.dark_gray,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    itemContainer: {
        height: 50,
        width: '24%',
        alignItems: 'center',
        borderRadius: 8
    },
    specificText: {
        color: COLORS.blue,
        paddingTop: 7,
        paddingHorizontal: 5,
        fontSize: 13,
        fontWeight: "900",
        alignItems: 'center'
    },
    numbersText : {
        color: COLORS.blue,
        fontSize: 18,
        fontWeight: "900",
        alignItems: 'center'
    },
    // button
    buttonContainer: {
        width: width*0.63,
        marginBottom:3,
        marginTop: 10,
        marginLeft: -50,
        left:60
    },
    buttonLabelText: {
        color: COLORS.white,
        fontSize: 13
    },
    button: {
        backgroundColor: COLORS.blue,
        width: '70%',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    twobuttons: {
        width: '100%',
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
        height: 60,
    }

    })

export default LastMeasurement 

