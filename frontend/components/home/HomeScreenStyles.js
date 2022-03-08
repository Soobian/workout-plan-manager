import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'

/**
 * Styles for HomeScreen
 * @module Home
 * @author Paulina Gacek
 */
export const HomeScreenStyles = StyleSheet.create({
    /**
    * whole page
    */
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    mainscreen: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        marginTop: 10,
        marginHorizontal: 10,
    },
    scrollView: {
        // whole page exept upper blue container can be scrolled
        paddingTop: 10,
        height: '75%',
    },
    titleText: {
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 17,
        paddingLeft: 4,
    },
    /**
     * upper blue container with page title
     */
    upperContainer: {
        backgroundColor: COLORS.blue,
        width: '102%',
        height: '16%',
        fontSize: 16,
        borderRadius: 10,
        justifyContent: 'center',
        left: -3
    },
    uperContainerText: {
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 18
    },
})