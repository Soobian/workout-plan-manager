import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainStack from './stacks/MainStack';
import AddMeasurementScreen from './screens/AddMeasurementScreen';
import AddWorkout from './screens/AddWorkout';
import AddExerciseToWorkoutScreen from './screens/AddExerciseToWorkoutScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import WorkoutPlanScreen from './screens/WorkoutPlanScreen';
import WorkoutListScreen from './screens/WorkoutListScreen';
import MeasurementsScreen from './screens/MeasurementsScreen';
import AddWorkoutPlan from './screens/AddWorkoutPlan';

const Stack = createNativeStackNavigator();

/**
 * Stack with all screens
 * @module Navigation
 * @author Maciej Ciepał, Paulina Gacek
 */
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Main" component={MainStack} />
                <Stack.Screen options={{ headerShown: false }} name="AddMeasurement" component={AddMeasurementScreen} />
                <Stack.Screen options={{ headerShown: false }} name="AddWorkout" component={AddWorkout} />
                <Stack.Screen options={{ headerShown: false }} name="AddWorkoutPlan" component={AddWorkoutPlan} />
                <Stack.Screen options={{ headerShown: false }} name="AddExerciseToWorkout" component={AddExerciseToWorkoutScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Exercise" component={ExerciseScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Work" component={WorkoutScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Plan" component={WorkoutPlanScreen} />
                <Stack.Screen options={{ headerShown: false }} name="WorkoutList" component={WorkoutListScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Measurements" component={MeasurementsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
