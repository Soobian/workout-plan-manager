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
        marginBottom: 20,
    },
    
    upperContainer: {
        color: '#03767B',
        backgroundColor: '#03767B',
        width: '103%',
        height: '16%',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
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

        width: '99%',
        height: '64%',
        paddingTop: 5,
        backgroundColor: 'rgba(100, 100, 100, 0.01)',
    },

    // button
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom:3,
        left: 90,
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
        borderColor: COLORS.light_gray,
        borderWidth: 1,
        width: '80%',
        height: 140,
        marginBottom: 20,
        alignContent: 'center',
        shadowColor: COLORS.dark_gray,
    },

    workoutNameContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute', top: 50, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
        width: '100%',
        height: 50,
    },
    workoutNameText: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: '900',
    },
    // details about the workout - box below the name
    specificsContainer: {
        width: '100%',
        height: 52,
        borderRadius: 8,
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.light_blue,
    },
    specificsOneItemContainer: {
        height: 50,
        backgroundColor: COLORS.light_blue,
        width: '33%',
        alignItems: 'center',
    },
    specificText: {
        color: COLORS.blue,
        paddingTop: 5,
        paddingHorizontal: 5,
        fontSize: 14,
        fontWeight: "500",
        alignItems: 'center'
    },
    numbersText : {
        color: COLORS.white,
        paddingHorizontal: 5,
        fontSize: 16,
        fontWeight: "900",
        alignItems: 'center',

    },
    image: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
})