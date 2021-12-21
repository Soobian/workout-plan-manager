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
        width: 350,
        paddingVertical: 0,
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
        borderEndColor: '#03767B',
        borderTopColor: '#03767B',
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        marginBottom: 30,
        paddingVertical: 15,
        width: '90%',
        paddingHorizontal: 10,
        left: 20
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
        color: '#03767B',
        fontWeight: '900',
        fontSize: 19,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 5,
        left: 20
    },

    chartContainer: {
        paddingBottom: 1,
    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom:10
    },

    buttonLabelText: {
        color: COLORS.white,
        fontSize: 14
    },

    button: {
        backgroundColor: '#03767B',
        width: '70%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
})