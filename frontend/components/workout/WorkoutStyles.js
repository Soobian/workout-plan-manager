import { StyleSheet } from "react-native"
import {COLORS} from '../colors/Colors'
export const WorkoutStyles = StyleSheet.create({
    container: {
        // whole page
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.dark_gray
    },
    workoutContainer: {
        // container for workout plan name name in WorkoutPlanScreen
        color: COLORS.blue,
        backgroundColor: COLORS.blue,
        width: '100%',
        height: '15%',
        fontSize: 16,
        borderRadius: 17,
    },
    workoutContainerText: {
        // workout plan name name Text in WorkoutPlanScreen
        color: 'white',
        fontWeight: '700',
        fontSize: 28,
        paddingLeft: '9%',
        paddingTop: '12%',
        bottom: 7
    },
    scrollView: {
        // container which enables scrolling
        width: '150%',
    },
    workoutItemContainer: {
        // button with workout name displayed
        backgroundColor: COLORS.midlle_gray,
        width: 300,
        height: 45,
        fontSize: 16,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    workoutItemContainerText: {
        // text displayed on above button
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    },
    workDayContainer: {
        color: COLORS.blue,
        fontWeight: '700',
        fontSize: 14,
        bottom: -10,
        marginTop: 10
    }
})