import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from "axios"
import { render } from 'react-dom';
import { KeyboardAvoidingView, Text, Image, View, ScrollView, SafeAreaView, TouchableOpacity,  Dimensions } from 'react-native'
import { ProfileStyles } from '../components/profile/ProfileStyles';
import { LineChart} from 'react-native-chart-kit';
import BorderWrapper from 'react-border-wrapper';
import { COLORS } from '../components/colors/Colors';

const ProfileScreen = ({navigation}) => {
    const screenWidth = Dimensions.get("window").width;
    const datesOfMeasurements = ["30.01","03.02","05.02","08.02","11.02"];
    const chestMeasurements = [99, 96, 92, 88, 84];
    const waistMeasurements = [102, 102, 99, 96, 92];
    const bicepsMeasurements = [60.4, 60.4, 60.2, 60, 59.8];
    const thighMeasurements =  [55, 52, 52, 52, 51];

    measurements = [
        {
            date: "30.01", chest: 99, waist: 102, biceps: 60.4, thigh: 55
        },
        {
            date: "03.02", chest: 96, waist: 102, biceps: 60.4, thigh: 52
        },
        {
            date: "05.02", chest: 92, waist: 99, biceps: 60.2, thigh: 52
        },
        {
            date: "08.02", chest: 93, waist: 100, biceps: 60.2, thigh: 53
        },
    ];

    const updateMeasurements = () =>{
        measurements = [];
        for(let i = 0; i < datesOfMeasurements.length; i++){
            let element = {
                date: datesOfMeasurements[i],
                chest: chestMeasurements[i],
                waist: waistMeasurements[i],
                biceps: bicepsMeasurements[i],
                thigh: thighMeasurements[i]
            };
            measurements.pop(element);
        }
    }

    const chartConfig = {
        backgroundGradientFrom: COLORS.white,
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: COLORS.midlle_gray,
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 0.2) => COLORS.midlle_gray,
        strokeWidth: 2, 
        barPercentage: 0.5,
        useShadowColorFromDataset: true // optional
      };

    const data = {
        labels: datesOfMeasurements,
        datasets: [
            {
                data: thighMeasurements,
                color: (opacity = 1) => COLORS.blue, 
                strokeWidth: 2 
            } , 
            {
                data: bicepsMeasurements,
                color: (opacity = 1) => COLORS.midlle_gray, 
                strokeWidth: 2 
            },
            {
                data: waistMeasurements,
                color: (opacity = 1) => COLORS.light_blue, 
                strokeWidth: 2 
            },
            {
                data: chestMeasurements,
                color: (opacity = 1) => COLORS.light_gray,
                strokeWidth: 2,
            }
        ],
        legend: ["Chest","Waist","Biceps", "Thigh"] 
      };

  

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={ProfileStyles.container}>
            <View style={ProfileStyles.upperContainer}>
                <Text style={ProfileStyles.upperContainerText}>My measurements</Text>
            </View>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
            <View style={ProfileStyles.buttonContainer}>
                <TouchableOpacity style={ProfileStyles.button}
                onPress={() => navigation.navigate('AddMeasurement')}>
                    <Text style={ProfileStyles.buttonLabelText}>ADD MEASUREMENT</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={ProfileStyles.titleText}>History</Text>
            <View style={ProfileStyles.measurementHistoryContainer}> 
                <ScrollView contentContainerStyle={ProfileStyles.scrollView}
            centerContent>
                    {measurements.map((item, index) => {
                    return(
                        <View style={ProfileStyles.singleMeasurementContainer}> 
                        <View style={ProfileStyles.dateContainer}> 
                            <Text style={ProfileStyles.dateText}>{item.date}</Text>
                        </View>
                        <View style={ProfileStyles.specificMeasurementsCOntainer}> 
                            <Text style={ProfileStyles.specificMeasurementsText}>
                                CHEST        WAIST          BICEPS        THIGH
                            </Text>
                            <Text style={ProfileStyles.numbersText}>
                                     {item.chest}        {item.waist}         {item.biceps}       {item.thigh}
                            </Text>
                        </View>
                    </View>)
                })}
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ProfileScreen
