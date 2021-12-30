import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'

export const ExerciseStyles = StyleSheet.create({
    container: {
        // whole page for both ExerciseScreen and ExerciseListScreen
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.dark_gray
    },

    // Styles specific to ExerciseScreen:
    descriptionContener:{
        // descrition of the exercise in ExerciseScreen
        width: '103%',
        height: '40%',
        fontSize: 16,
        borderRadius: 10,
        paddingHorizontal: 10,
        top: -10,
    },
    descriptionText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
        paddingRight: 20,
        paddingLeft:20,
        paddingTop: 20
    },
    image:{
        width: '105%',
        height: '105%',
        left: -10
    },
    imageContener: {
        width: '103%',
        height: '40%',
        borderRadius: 10,
        paddingHorizontal: 10,
        
    },
    nameContener: {
        // container for exercise name in ExerciseScreen
        backgroundColor: COLORS.dark_gray,
        width: '100%',
        height: '9%',
        fontSize: 16,
        borderRadius: 17,
        top: -20
    },
    nameText: {
        // exercise name 
        color: 'white',
        fontWeight: '700',
        fontSize: 28,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'bottom',
        position: 'absolute',  
        left: 25,
        paddingTop: 17,
    },
    exerciseContainer: {
        // container for "Exercise" title
        color: COLORS.blue,
        backgroundColor: COLORS.blue,
        width: '100%',
        height: '15%',
        fontSize: 16,
        borderRadius: 17,
    },
    exerciseText: {
        // "Exercise" title at the top of page
        color: 'white',
        fontWeight: '700',
        fontSize: 28,
        paddingLeft: '9%',
        paddingTop: '12%',
        bottom: 7
    },

    // Exercise list components:

    scrollView: {
        // container which enables scrolling
        width: '150%',
    },
    exerciseItemContainer: {
        // button with exercise name displayed
        backgroundColor: COLORS.midlle_gray,
        width: 300,
        height: 45,
        fontSize: 16,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    exerciseItemContainerText: {
        // text displayed on above button
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    },

    // workout specific
    scrollViewWorkout: {
        // container which enables scrolling
        width: '100%',
        marginBottom: 20,
        height: 300,
        top: -25
    },
    workoutnameContener: {
        // container for exercise name in ExerciseScreen
        backgroundColor: COLORS.dark_gray,
        width: '100%',
        height: '9%',
        fontSize: 16,
        borderRadius: 17,
        top: -20
    },

})