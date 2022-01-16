import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'

/**
 * Styles for ExerciseScreen and ExerciseListScreen
 * @module Exercise
 * @author Paulina Gacek
 */
export const ExerciseStyles = StyleSheet.create({
    /**
     * whole page for both ExerciseScreen and ExerciseListScreen
     */
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.dark_gray
    },

    /**
     * Styles specific to ExerciseScreen:
     * descrition of the exercise in ExerciseScreen
     **/ 
    descriptionContener:{
        width: "103%",
        height: "40%",
        fontSize: 16,
        borderRadius: 10,
        paddingHorizontal: 10,
        top: -10,
    },
    /**
     * Styles specific to ExerciseScreen:
     * descrition text of the exercise in ExerciseScreen
     **/ 
    descriptionText: {
        color: COLORS.white,
        fontSize: 15,
        paddingRight: 20,
        paddingLeft:22,
        paddingTop: 20
    },
    /**
     * huge background image in ExerciseScreen
     **/ 
    image:{
        width: "105%",
        height: "105%",
        left: -10
    },
    /**
     * huge background image in ExerciseScreen
     **/ 
    imageContener: {
        width: "103%",
        height: "40%",
        borderRadius: 10,
        paddingHorizontal: 10,
        
    },
    /**
     * container for exercise name in ExerciseScreen
     **/ 
    nameContener: {
        backgroundColor: COLORS.dark_gray,
        width: "100%",
        height: "9%",
        fontSize: 16,
        borderRadius: 17,
        top: -20
    },
    /**
     * container for exercise name in ExerciseScreen
     **/ 
    nameText: {
        color: COLORS.white,
        fontWeight: '700',
        fontSize: 28,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'bottom',
        position: 'absolute',  
        left: 25,
        paddingTop: 17,
    },
    /**
     * container for "Exercise" title in ExerciseScreen
     **/ 
    exerciseContainer: {
        color: COLORS.blue,
        backgroundColor: COLORS.blue,
        width: "100%",
        height: '15%',
        fontSize: 16,
        borderRadius: 17,
    },
    /**
     * "Exercise" title at the top of page in ExerciseScreen
     **/ 
    exerciseText: {
        color: COLORS.white,
        fontWeight: '700',
        fontSize: 28,
        paddingLeft: '9%',
        paddingTop: '12%',
        bottom: 7
    },

    // Exercise list components:

    /**
     * container which enables scrolling in ExerciseList
     */
    scrollView: {
        width: "150%",
    },
    /**
     * button with exercise name displayed
     */
    exerciseItemContainer: {
        backgroundColor: COLORS.midlle_gray,
        width: 300,
        height: 45,
        fontSize: 16,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },
    /**
     * text displayed on above button
     */
    exerciseItemContainerText: {
        color: COLORS.white,
        fontWeight: "700",
        fontSize: 20,
    },

    /**
     * workout specific container which enables scrolling
     */
    scrollViewWorkout: {
        width: "100%",
        marginBottom: 20,
        height: 300,
        top: -25
    },
    /**
     * workout specific container for exercise name in ExerciseScreen
     */
    workoutnameContener: {
        backgroundColor: COLORS.dark_gray,
        width: "100%",
        height: "9%",
        fontSize: 16,
        borderRadius: 17,
        top: -20
    },
    /**
     * workout specific container for exercise name in ExerciseScreen
     */
    workoutDetailsContainer : {
        // descrition of the exercise in ExerciseScreen
        width: "103%",
        height: "40%",
        fontSize: 16,
        borderRadius: 10,
        paddingHorizontal: 10,
        top: -10,
    },
    /**
     * workout specific container for exercise name in ExerciseScreen
     */
    workoutDetailsText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
        paddingLeft:33,
        paddingTop: 20,
    },
    /**
     * workout specific row division container for exercise, repeat and series labels
     */
    workoutDetailsRowDivision: {
        flexDirection: "row" ,
        justifyContent: "flex-end",
        width: "80%",
        left: 30,
    },
    /**
     * workout specific exercise container with photo, repeat and series number
     */
    singleExerciseContainer: {
        backgroundColor: COLORS.dark_gray,
        borderColor: COLORS.midlle_gray,
        borderWidth: 1,
        width: "80%",
        height: 80,
        borderRadius: 8,
        shadowColor: COLORS.dark_gray,
        shadowColor: COLORS.dark_gray,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        left: 30,
        marginTop: 10
    },
    /**
     * workout specific container for row division
     */
    rowDivisionContainer: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        flexDirection: "row" ,
        justifyContent: "space-evenly",
    },
    /**
     * workout specific translucent container with exercise name
     */
    exerciseNameContainer: {
        backgroundColor: COLORS.blue,
        width: "50%",
        height: "100%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    /**
     * workout specific numbers container
     */
    repeatAndSeriesContainer: {
        width: '25%',
        height:'98%',
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "rgba(200, 200, 200, 0.1)",
        borderRadius: 8
    },
    numberText: {
        color: COLORS.white,
        fontSize: 20,
        marginTop: 25,
        left: -5,
    },
    /**
     * workout specific container for image in workoutScreen
     */
    imageContenerAddWorkout: {
        backgroundColor: COLORS.dark_gray,
        width: "100%",
        height: "100%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    /**
     * workout specific container for image in workoutScreen
     */
    imageAddWorkout: {
        backgroundColor: COLORS.dark_gray,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    /**
     * workout specific container for name
     */
    workoutNameContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0, 
        justifyContent: "center", alignItems: "center",
        width: "100%",
        height: "100%",
        borderRadius: 8
    },
    /**
     * workout specific container for name
     */
    workoutNameText: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: "900",
    },
})