import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'
import { useNavigation } from '@react-navigation/core'

export const AddMeasurementStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        borderRadius: 20,
        paddingTop: 40,
        height: 400,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        paddingTop: 10,
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
    buttonOutlineText: {
        color: '#03767B',
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
        color: 'white',
        fontWeight: '700',
        fontSize: 28,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'bottom',
        position: 'absolute',  
        bottom: 20,
        left: 30,
    },
    
    buttonLabelText:{
        color: '#03767B',
        fontWeight: '700',
        fontSize: 14,
        marginLeft: 15,
    },
    floatingLabelInputContainerStyle: {
        backgroundColor: 'white',
        color: '#03767B',
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
    },
})