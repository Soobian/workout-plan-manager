import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'

/**
 * Styles used in WorkoutScreen
 * @author Paulina Gacek
 * @module Workout
 */
export const WorkoutStyles = StyleSheet.create({
    /**
     * whole page
     */
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.dark_gray
    },
    /**
     * container for workout plan name name in WorkoutPlanScreen
     */
    workoutContainer: {
        color: COLORS.blue,
        backgroundColor: COLORS.blue,
        width: '100%',
        height: '15%',
        fontSize: 16,
        borderRadius: 17,
    },
    /**
     * workout plan name name Text in WorkoutPlanScreen
     */
    workoutContainerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 28,
        paddingLeft: '9%',
        paddingTop: '12%',
        bottom: 7
    },
    /**
     * container which enables scrolling
     */
    scrollView: {
        width: 350,
    },
    /**
     * button with workout name displayed
     */
    workoutItemContainer: {
        backgroundColor: COLORS.midlle_gray,
        width: 300,
        height: 45,
        fontSize: 16,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    /**
     * text displayed on above button
     */
    workoutItemContainerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    },
    /**
     * container for workout day plan
     */
    workDayContainer: {
        color: COLORS.blue,
        fontWeight: '700',
        fontSize: 14,
        bottom: -10,
        marginTop: 10
    },

    // Workout screen 

    /**
     * "Exercise" and "repeat" labels
     */
    topLabelsExercise: {
        color: COLORS.blue,
        fontWeight: '700',
        fontSize: 18,
        bottom: -10,
        marginTop: 10,
        marginBottom: 10,
        left: 30
    },
    /**
     * button with exercise name displayed
     */
    exerciseItemContainer: {
        backgroundColor: COLORS.midlle_gray,
        width: 220,
        height: 45,
        fontSize: 16,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        left: -30
    },
    exerciseItemContainerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
    },
    repeatItemCOntainer: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginTop: 25,
        right: 20
    },
    exerciseWithReapeatContainer: {
        flexDirection: "row" ,
        justifyContent: 'space-evenly'
    }
    
})