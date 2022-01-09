import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'

export const HomeScreenStyles = StyleSheet.create({
    container: {
        //whole page
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