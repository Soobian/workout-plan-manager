import React, { useEffect, useState } from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity,  Dimensions } from 'react-native'
import { MeasurementsStyles } from '../components/measurements/MeasurementsStyles';
import { LineChart} from 'react-native-chart-kit';
import { COLORS } from '../components/colors/Colors';
import jwt_decode from "jwt-decode";
import * as SecureStore from 'expo-secure-store'
import { useIsFocused } from "@react-navigation/native";
import TokenApi from '../components/authentication/TokenApi';

/**
 * Screen with graph, list of measurements and possibility to add new one
 * @module Measurement
 * @author Paulina Gacek
 * @param {route} - enables displaying proper measurements
 * @param {navigation} - enables come back to previous screen
 */
const MeasurementsScreen = ({navigation}) => {
    const isFocused = useIsFocused();
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    const [dateMeasurements, setdateMeasurements] = useState([0]);
    const [chestMeasurements, setchestMeasurements] = useState([0]);
    const [thighMeasurements, setthighMeasurements] = useState([0]);
    const [bicepsMeasurements, setbicepsMeasurements] = useState([0]);
    const [waistMeasurements, setwaistMeasurements] = useState([0]);
    const [measurements, setmeasurements] = useState([]);

    useEffect(() => {
        if(isFocused){
            SecureStore.getItemAsync('access_token')
            .then((token) => {
                const userId = jwt_decode(token).user_id
                TokenApi.get(
                    'measurements/user/' + userId, 
                    {
                        headers: {
                            Authorization: 'JWT ' + token,
                        }
                    }
                )
                .then(response => {
                    setmeasurements(response.data)
                    var data = measurements.map(function (obj) {
                        return obj.date;
                    });
                    setdateMeasurements(data)
                    data = measurements.map(function (obj) {
                        return obj.chestSize;
                    });
                    setchestMeasurements(data)
                    data = measurements.map(function (obj) {
                        return obj.thighSize;
                    });
                    setthighMeasurements(data)
                    data = measurements.map(function (obj) {
                        return obj.bicepsSize;
                    });
                    setbicepsMeasurements(data)
                    data = measurements.map(function (obj) {
                        return obj.waistSize;
                    });
                    setwaistMeasurements(data)
                })
                .catch(error => {
                    console.log(error)
                })
            })
        }
    }, [isFocused])

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
        labels: dateMeasurements,
        datasets: [
            {
                data:chestMeasurements,
                color: (opacity = 1) => COLORS.blue, 
                strokeWidth: 2 
            } , 
            {
                data: waistMeasurements,
                color: (opacity = 1) => COLORS.midlle_gray, 
                strokeWidth: 2 
            },
            {
                data: bicepsMeasurements,
                color: (opacity = 1) => COLORS.middle_blue, 
                strokeWidth: 2 
            },
            {
                data: thighMeasurements,
                color: (opacity = 1) => COLORS.light_gray,
                strokeWidth: 2,
            }
        ],
        legend: ["Chest","Waist","Biceps", "Thigh"] 
      };

  

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={MeasurementsStyles.container}>
            <View style={MeasurementsStyles.upperContainer}>
                <Text style={MeasurementsStyles.upperContainerText}>My measurements</Text>
            </View>
            <ScrollView contentContainerStyle={MeasurementsStyles.scrollView}
            centerContent>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
            <View style={MeasurementsStyles.buttonContainer}>
                <TouchableOpacity style={MeasurementsStyles.button}
                onPress={() => navigation.navigate('AddMeasurement')}>
                    <Text style={MeasurementsStyles.buttonLabelText}>ADD MEASUREMENT</Text>
                </TouchableOpacity>
            </View>
            <Text style={MeasurementsStyles.titleText}>History</Text>
            <View style={MeasurementsStyles.measurementHistoryContainer}> 
                {measurements.map((item, index) => {
                    return(
                        <View style={MeasurementsStyles.singleMeasurementContainer} key={index}> 
                            <View style={MeasurementsStyles.dateContainer}> 
                                <Text style={MeasurementsStyles.dateText}>{item.date}</Text>
                            </View>
                            <View style={MeasurementsStyles.measurementContainer}> 
                                <View style={MeasurementsStyles.itemContainer}>
                                        <Text style={MeasurementsStyles.specificText}>CHEST</Text>
                                        <Text style={MeasurementsStyles.numbersText}>{item.chestSize}</Text>
                                </View>
                                <View style={MeasurementsStyles.itemContainer}>
                                        <Text style={MeasurementsStyles.specificText}>WAIST</Text>
                                        <Text style={MeasurementsStyles.numbersText}>{item.waistSize}</Text>
                                </View>
                                <View style={MeasurementsStyles.itemContainer}>
                                        <Text style={MeasurementsStyles.specificText}>BICEPS</Text>
                                        <Text style={MeasurementsStyles.numbersText}>{item.bicepsSize}</Text>
                                </View>
                                <View style={MeasurementsStyles.itemContainer}>
                                        <Text style={MeasurementsStyles.specificText}>THIGH</Text>
                                        <Text style={MeasurementsStyles.numbersText}>{item.thighSize}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
                
            </View>
            </ScrollView>
            
        </KeyboardAvoidingView>
    )
}

export default MeasurementsScreen
