import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'

export const ProfileStyles = StyleSheet.create({
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
    },
    
    upperContainer: {
        color: '#03767B',
        backgroundColor: '#03767B',
        width: '103%',
        height: '16%',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,
        top: 0,
    },

    upperContainerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 28,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'bottom',
        position: 'absolute',  
        bottom: 23,
        left: 30,
    },

    measurementHistoryContainer: {
        borderColor: '#03767B',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 7,
        paddingVertical: 5,
        width: '85%',
        height: 160,
        left: -5
    },

    detailsText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 5
    },

    // title for measurements: weight, ...
    titleText: {
        color: COLORS.blue,
        fontWeight: '900',
        fontSize: 19,
        left: -110,
        paddingBottom: 3
    },

    chartContainer: {
        paddingBottom: 1,
    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:3
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

    singleMeasurementContainer: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.light_gray,
        borderWidth: 1,
        width: '101%',
        marginBottom: 10,
        
    },

    dateContainer: {
        backgroundColor: COLORS.blue,
        width: '100%',
        height: 16,
        alignItems: 'center'
    },
    dateText: {
        color: COLORS.white,
        fontSize: 10
    },
    specificMeasurementsCOntainer: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
        
    },
    specificsOneItemContainer: {
        height: 50,
        width: '24%',
        alignItems: 'center',
        borderRadius: 8
    },
    specificText: {
        color: COLORS.blue,
        paddingTop: 5,
        paddingHorizontal: 5,
        fontSize: 13,
        fontWeight: "900",
        alignItems: 'center'
    },
    specificMeasurementsText: {
        color: COLORS.blue,
        paddingLeft: 20,
        paddingTop: 5,
        fontSize: 13,
        fontWeight: "900",
        alignItems: 'center'
    },
    numbersText : {
        color: COLORS.blue,
        fontSize: 18,
        fontWeight: "900",
        alignItems: 'center'
    }
})