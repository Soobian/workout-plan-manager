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
    },
    
    upperContainer: {
        color: '#03767B',
        backgroundColor: '#03767B',
        width: '103%',
        height: '18%',
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
    
})