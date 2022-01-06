import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'

export const HomeScreenStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    mainscreen: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        margin: 10,
    },
    scrollView: {
        paddingTop: 10,
    },
    titleText: {
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 18
    },
    upperContainer: {
        color: '#03767B',
        backgroundColor: '#03767B',
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