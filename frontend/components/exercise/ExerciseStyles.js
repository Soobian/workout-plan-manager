import { StyleSheet } from "react-native"
export const ExerciseStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#272927'
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
    descriptionContener:{
        color: '#272927',
        backgroundColor: '#272927',
        width: '103%',
        height: '40%',
        fontSize: 16,
        borderRadius: 10,
        paddingHorizontal: 10,
        top: -10,
    },
    nameContener: {
        color: '#272927',
        backgroundColor: '#272907',
        width: '100%',
        height: '9%',
        fontSize: 16,
        borderRadius: 15,
        top: -20
    },
    nameText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 28,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'bottom',
        position: 'absolute',  
        left: 30,
        paddingTop: 10,
    },
    returnContener: {
        color: '#270907',
        backgroundColor: '#072907',
        width: '100%',
        height: '15%',
        fontSize: 16,
        borderRadius: 15,
        top: 10
    }
})