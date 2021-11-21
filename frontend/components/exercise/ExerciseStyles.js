import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'
export const ExerciseStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.dark_gray
    },
    descriptionContener:{
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
        backgroundColor: COLORS.dark_gray,
        width: '100%',
        height: '9%',
        fontSize: 16,
        borderRadius: 17,
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
        left: 25,
        paddingTop: 17,
    },
    exerciseContainer: {
        color: COLORS.blue,
        backgroundColor: COLORS.blue,
        width: '100%',
        height: '15%',
        fontSize: 16,
        borderRadius: 17,
    },
    exerciseText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 28,
        paddingLeft: '9%',
        paddingTop: '12%',
        bottom: 7
    },
    scrollView: {
        width: '150%',
    },
    exerciseItemContainer: {
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
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    }
})