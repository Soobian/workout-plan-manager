import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'

export const WorkoutListStyle = StyleSheet.create({
    container: {
        // whole page
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    scrollView: {
        // container which enables scrolling
        width: '100%',
        alignItems: 'center',
    },
    
    upperContainer: {
        color: '#03767B',
        backgroundColor: '#03767B',
        width: '103%',
        height: '16%',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,
        paddingBottom: 10,
        marginBottom: 20
    },

    upperContainerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 28,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'bottom',
        position: 'absolute',  
        bottom: 23,
        left: 30,
    },

    workoutListContainer: {
        borderColor: '#03767B',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
        paddingVertical: 5,
        width: '90%',
        height: 350,
        paddingTop: 20
    },

    // button
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom:3
    },

    buttonLabelText: {
        color: COLORS.white,
        fontSize: 14
    },

    button: {
        backgroundColor: '#03767B',
        width: '70%',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
    },

    singleMeasurementContainer: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.light_gray,
        borderWidth: 1,
        width: '101%',
        marginBottom: 10,
    },

    workoutNameContainer: {
        backgroundColor: COLORS.blue,
        width: '100%',
        height: 26,
        alignItems: 'center'
    },
    workoutNameText: {
        color: COLORS.white,
        fontSize: 18
    },
    // details about the workout - box below the name
    specificsContainer: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
        
    },
    specificsOneItemContainer: {
        height: 50,
        backgroundColor: COLORS.light_blue,
        width: '30%',
        alignItems: 'center',
        borderRadius: 8
    },
    specificText: {
        color: COLORS.white,
        paddingTop: 5,
        paddingHorizontal: 5,
        fontSize: 14,
        fontWeight: "900",
        alignItems: 'center'
    },
    numbersText : {
        color: COLORS.blue,
        paddingLeft: 25,
        fontSize: 18,
        fontWeight: "900",
        alignItems: 'center'
    }
})