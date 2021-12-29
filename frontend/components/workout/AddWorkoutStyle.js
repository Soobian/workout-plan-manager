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

    // CREATE WORKOUT button
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    button: {
        backgroundColor: '#03767B',
        width: '90%',
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
        height: '18%',
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
    
    untouchableContainer: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    // input labels
    // whole container
    wholeContainer: {
        width: 180,
        alignItems: 'center',
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
        paddingBottom: 15,
        marginBottom: 10,
    },
    labelsCointeiner: {
        paddingTop: 10,
        width: '90%',
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
        width: 60,
        fontSize: 12
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
        fontSize: 15,
        paddingBottom: 3
    },
    addedExercisesContainer: {
        borderColor: '#03767B',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 7,
        paddingVertical: 5,
        width: '95%',
        height: '40%',

    },
    scrollView: {
        // container which enables scrolling
        width: '100%',
        alignItems: 'center',
    },
    // container for whole exercise
    singleExerciseContainer: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.light_gray,
        borderWidth: 1,
        width: '90%',
        height: 80,
        marginBottom: 10,
        borderRadius: 8,
    },
    rowDivisionContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
    },
    
    exerciseNameContainer: {
        backgroundColor: COLORS.light_blue,
        width: '50%',
        borderRadius: 8,
        alignItems: 'center'
    },

    repeatAndSeriesContainer: {
        width: '25%',
        alignItems: 'center',
        alignContent: 'center'
    },
    nameText: {
        color: COLORS.midlle_gray,
        fontSize: 17,
        marginTop: 5,
    },
    numberText: {
        color: COLORS.midlle_gray,
        fontSize: 18,
        marginTop: 5,
    },

    //exercise button
    exerciseButtonContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    exerciseButton: {
        backgroundColor: '#03767B',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 10,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#03767B',
        borderWidth: 2,
    },
    exerciseButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },

    /*** SELECT EXERICISE SPECIFIC ***/
    exercisesToSelectContainer: {
        borderRadius: 10,
        marginBottom: 7,
        paddingTop: 10,
        width: 320,
        height: 260,
        marginTop: 10,
        width: '100%',
        height: '50%',
    },
    titleExerciseText: {
        color: COLORS.blue,
        fontWeight: '900',
        fontSize: 18,
        paddingTop: 20,
    },
    imageContener: {
        backgroundColor: COLORS.light_blue,
        width: '40%',
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        backgroundColor: COLORS.light_blue,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: '98%',
        width: '98%',
    },

/***********************************************/
    // SELECT EXERCISE
    containerFOrExerciseAndCheckBox: {
        width: '90%',
        height: 70,
        borderRadius: 8,
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    singleExerciseWithPhotoContainer: {
        width: '85%',
        height: 70,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: COLORS.dark_gray,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: COLORS.blue,
    },
    checkboxContainer: {
        width: '9%',
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowDivisionContainerForExercise: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
    },
    exerciseNameContainerS: {
        backgroundColor: COLORS.blue,
        width: '60%',
        borderRadius: 8,
        alignItems: 'center'
    },
    exercisenameText: {
        color: COLORS.white,
        fontSize: 18,
        marginTop: 22,
    },
    imageContenerForExercise: {
        backgroundColor: COLORS.blue,
        width: '40%',
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageExercise: {
        backgroundColor: COLORS.light_blue,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        opacity: 0.7
    },
    
    /// series and repetitions
    wholeContainer: {
        width: '90%',
        alignItems: 'center',
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
    },
    labelsCointeiner2: {
        paddingTop: 10,
        width: 60,
        alignItems: 'center',
    },
    floatingLabelExercise: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
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
        width: 30
    },
    labelNameContianer: {
        paddingHorizontal: 15,
        borderRadius: 10,
        marginHorizontal: 5,
        marginTop: 15,
    },
    labelNameText : {
        fontSize: 18,
        color: COLORS.midlle_gray,
    },

    //button 'add exercise to workout'

    addButtonContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addexerciseButton: {
        backgroundColor: '#03767B',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 10,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    addexerciseButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    /***********************************************/
    
})