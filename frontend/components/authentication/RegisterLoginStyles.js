/**
 * @module Authentication
 * @authorPaulina Gacek
 */
import { StyleSheet } from "react-native"

/**
 * Styles which are used in RegisterLoginForm.js
 */
export const RegisterLoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    
    /**
     * Top container with page title
     */
    upperContener:{
        color: '#03767B',
        backgroundColor: '#03767B',
        width: '103%',
        height: '35%',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,
        top: -30,
    },
    /**
     * Top container with page title txt
     */
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
    /**
     * Descrition below main button
     */
    smallText:{
        color: 'gray',
        fontWeight: '700',
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'bottom',
        marginTop: 20
    },
    /**
     * Button for sign up/ sign in in text style, without button container
     */
    buttonLabelText:{
        color: '#03767B',
        fontWeight: '700',
        fontSize: 14,
        marginLeft: 15,
    },
    /**
     * Label form for inputting data - floating label
     */
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
    /**
     * Label form for inputting data - container
     */
    inputContainer: {
        width: '80%',
        borderRadius: 20,
    },
    /**
     * Label form for inputting data - input txt
     */
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
    /**
     * Button for sign up/ sign in - container
     */
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#03767B',
        width: '80%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
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
})