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
        paddingBottom: 30,
    },
    floatingLabelInputContainerStyle: {
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
        width: 60
    },
    
    pickerContainer: {
        backgroundColor: COLORS.white,
        height: 40,
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
        fontSize: 17,
        marginVertical: 10,
    },
})