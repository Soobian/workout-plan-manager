import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'

/**
 * @module Measurement
 * @author Paulina Gacek
 */
export const MeasurementsStyles = StyleSheet.create({
    /**
     * whole page
     */
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    /**
     * container which enables scrolling
     */
    scrollView: {
        width: '100%',
        alignItems: 'center',
    },
    /**
     * upper blue container with page title
     */
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
    /**
     * text in upper blue container with page title
     */
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
        marginBottom: 7,
        paddingVertical: 5,
        width: '90%',
        paddingBottom: 70,
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

    /**
     * title for measurements: weight, ...
     */ 
    titleText: {
        color: COLORS.blue,
        fontWeight: '900',
        fontSize: 19,
        paddingBottom: 3,
        paddingTop: 10
    },

    chartContainer: {
        paddingBottom: 1,
    },

    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:3,
        paddingTop: 10,
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
        width: '100%',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    dateContainer: {
        backgroundColor: COLORS.blue,
        width: '100%',
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        paddingHorizontal: 5,
        borderRadius: 4,
        top: 1
    },
    dateText: {
        color: COLORS.white,
        fontSize: 10,
        width: '100%',
        marginHorizontal: 20,
    },
    measurementContainer: {
        width: '100%',
        borderColor: COLORS.blue,
        borderWidth: 2,
        borderRadius: 8,
        height: 60,
        flexDirection: "row" ,
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.white,
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
    itemContainer: {
        height: 50,
        width: '24%',
        alignItems: 'center',
        borderRadius: 8
    },
    specificText: {
        color: COLORS.blue,
        paddingTop: 7,
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