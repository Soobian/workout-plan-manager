import { StyleSheet } from "react-native"


export const RegisterLoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        borderRadius: 20,
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
    smallText:{
        color: 'gray',
        fontWeight: '700',
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'bottom',
        marginTop: 20
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