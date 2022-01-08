import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTab from '../components/navigation/BottomTabs';

const MainStack = () => {
    return (
        <BottomTab />
    )
}

export default MainStack;