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
        top: 30,
    },
})