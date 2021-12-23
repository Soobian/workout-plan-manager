import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'
import { useNavigation } from '@react-navigation/core'

export const AddWorkoutStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        borderRadius: 20,
        paddingTop: 10,
        height: 350,
        alignItems: 'center',
    },

    // ADD button
    buttonContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    button: {
        backgroundColor: '#03767B',
        width: '80%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 10,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#03767B',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    
    // upper blue container
    upperContener:{
        backgroundColor: '#03767B',
        width: '103%',
        height: '20%',
        fontSize: 16,
        borderRadius: 10,
        paddingBottom: 20,
    },
    upperContenerText:{
        color: COLORS.white,
        fontWeight: '700',
        fontSize: 28,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'bottom',
        position: 'absolute',  
        bottom: 20,
        left: 30,
    },
    
    // input labels
    // whole container
    wholeContainer: {
        width: 180,
        alignItems: 'center',
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
        paddingBottom: 5,
    },
    labelsCointeiner: {
        paddingTop: 10,
        width: 260,
        alignItems: 'center',
        paddingBottom: 20,
    },
    floatingLabelInputContainerStyle: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 10,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        fontWeight: "500",
        width: 60
    },
    
    pickerContainer: {
        backgroundColor: COLORS.white,
        height: 30,
        borderRadius: 4,
    },
    labelForPickerContainer: {
        height: 40,
        borderRadius: 4,
        width: 90,
        left: -10,
    },
    labelForPickerContainerText: {
        color: COLORS.midlle_gray,
        fontSize: 15,
        marginVertical: 10,
    },
    pickerText: {
        height: 30, 
        width: 130, 
        color: COLORS.midlle_gray
    },

    // exercises
    titleText: {
        color: COLORS.blue,
        fontWeight: '900',
        fontSize: 19,
        left: -110,
        paddingBottom: 3
    },
    addedExercisesContainer: {
        borderColor: '#03767B',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 7,
        paddingVertical: 5,
        width: 250,
        height: 160,
        left: -5
    },
    scrollView: {
        // container which enables scrolling
        width: '100%',
        alignItems: 'center',
    },
    singleMeasurementContainer: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.light_gray,
        borderWidth: 1,
        width: '101%',
        marginBottom: 10,
        
    },

    dateContainer: {
        backgroundColor: COLORS.blue,
        width: '100%',
        height: 16,
        alignItems: 'center'
    },
    dateText: {
        color: COLORS.white,
        fontSize: 10
    },
    specificMeasurementsCOntainer: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
        
    },
    specificsOneItemContainer: {
        height: 50,
        width: '24%',
        alignItems: 'center',
        borderRadius: 8
    },
    specificText: {
        color: COLORS.blue,
        paddingTop: 5,
        paddingHorizontal: 5,
        fontSize: 13,
        fontWeight: "900",
        alignItems: 'center'
    },
    specificMeasurementsText: {
        color: COLORS.blue,
        paddingLeft: 20,
        paddingTop: 5,
        fontSize: 13,
        fontWeight: "900",
        alignItems: 'center'
    },
    numbersText : {
        color: COLORS.blue,
        fontSize: 18,
        fontWeight: "900",
        alignItems: 'center'
    }
})