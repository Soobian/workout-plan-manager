import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import BottomTabs, { bottomTabIcons } from '../components/BottomTabs'

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <BottomTabs icons={bottomTabIcons}/>
        </SafeAreaView>
    )
}
