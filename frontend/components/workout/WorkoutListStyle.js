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
    
    // upper blue container with page title
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
        fontWeight: '300',
        fontSize: 25,
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

    // container with workout photo, name and level
    singleWorkoutContainer: {
        width: '80%',
        height: 140,
        marginBottom: 20,
        alignContent: 'center',
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
    workoutLevelText : {
        color: COLORS.white,
        paddingHorizontal: 5,
        fontSize: 16,
        fontWeight: "900",
        alignItems: 'center',
    },
    imageContenerForExercise: {
        backgroundColor: COLORS.dark_gray,
        width: '100%',
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageExercise: {
        backgroundColor: COLORS.dark_gray,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        opacity: 0.7
    },
})