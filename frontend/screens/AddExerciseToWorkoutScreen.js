import React, { useState, useEffect } from 'react'
import axios from "axios"
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity,  Image, Alert } from 'react-native'
import { CheckBox } from 'react-native-elements';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { COLORS } from '../components/colors/Colors';
import { AddWorkoutStyle } from '../components/workout/AddWorkoutStyle';
import BaseApi from '../components/authentication/BaseApi';


/**
 * Screen with the possibility of adding new exercise to the workout
 * @module Exercise
 * @author Paulina Gacek, Maciej Ciepał
 * @param {route} - enables displaying proper exercise and workout
 * @param {navigation} - enables come back to previous screen
 */

const AddExerciseToWorkoutScreen = ({route, navigation}) => {
    const [selectedExercise, setSelectedExercise] = useState('')
    const [series, setSeries] = useState('')
    const [repeat, setRepeat] = useState('')
    const [exercises, setExercises] = useState(route.params.exercises)
    const [exerciseList, setexerciseList] = useState([]);
    const [initialRun, setInitialRun] = useState(true);

    const handleAddExercise = () => {
        // returning to creation of the same workout
        if(series == '' || repeat == ''){
            Alert.alert('Ops!','You have not filled all forms',[
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ]);
        }
        else if(selectedExercise == ''){
            Alert.alert('Ops!','No exercise was selected',[
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ]);
        }
        else{
            console.log('{exerciseId: ' + selectedExercise + ', series: '+ series +
            ',  repeat: '+ repeat + '}');
            
            if(route.params === undefined){
                console.log("undefined");
            }
            else{
                const newExercise = {
                    id: selectedExercise + 1, 
                    name: exerciseList[selectedExercise].name, 
                    repeat: repeat, 
                    series: series,
                    urlPhoto: exerciseList[selectedExercise].photo_link,
                };
                setExercises(exercises => [...exercises, newExercise])
            } 
            
        }
    };

    useEffect(() => {
        if(!initialRun) {
            console.log("EXERCISE SEND " + JSON.stringify(exercises));
            navigation.navigate('AddWorkout', {workoutPlanId: route.params.workoutPlanId, exercises: exercises})
        }
        else {
            setInitialRun(false);
        }
    }, [exercises])

    useEffect(() => {
        BaseApi.get(
            'workout/exercise/', 
        )
        .then(response => {
            setexerciseList(response.data)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, [])

    const handleSelection = (id) => {
        // only one box can be selected
        console.log("selected exercise id: ", id);
        const newValue = exerciseList.map((checkbox, i) => {
            if (i !== id)
                return {
                ...checkbox,
                selected: false,
            }
            if (i === id) {
                const item = {
                ...checkbox,
                selected: !checkbox.selected,
                }
                return item
            }
            return checkbox
        })
        if(newValue[id].selected === true){
            setSelectedExercise(id);
        }
        else{
            setSelectedExercise('');
        }
        setexerciseList(newValue)
        console.log("[AddExeToWorkout] ", newValue[id].selected, {selectedExercise});
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={AddWorkoutStyle.container}
        >
            <View style={AddWorkoutStyle.upperContener}>
                <Text style={AddWorkoutStyle.upperContenerText}>Select exercise</Text>
            </View>
            <View style={AddWorkoutStyle.wholeContainer}>
                <View style={AddWorkoutStyle.labelNameContianer}>
                    <Text style={AddWorkoutStyle.labelNameText}>Series:</Text>
                </View>
                <View style={AddWorkoutStyle.labelsCointeiner2}>
                    <FloatingLabelInput
                        keyboardType="numeric"
                        value={series}
                        onChangeText={text => setSeries(text)}
                        containerStyles={AddWorkoutStyle.floatingLabelExercise}
                        customLabelStyles={{
                            colorFocused: COLORS.midlle_gray,
                            fontSizeFocused: 10,
                        }}
                        maxDecimalPlaces='0'
                        />
                </View>
                <View style={AddWorkoutStyle.labelNameContianer}>
                    <Text style={AddWorkoutStyle.labelNameText}>Repetitions:</Text>
                </View>
                <View style={AddWorkoutStyle.labelsCointeiner2}>
                    <FloatingLabelInput
                        keyboardType="numeric"
                        value={repeat}
                        onChangeText={text => setRepeat(text)}
                        containerStyles={AddWorkoutStyle.floatingLabelExercise}
                        customLabelStyles={{
                            colorFocused: COLORS.midlle_gray,
                            fontSizeFocused: 10,
                        }}
                        maxDecimalPlaces='0'
                        />
                </View>
            </View>
            
            <Text style={AddWorkoutStyle.titleExerciseText}>Exercises:</Text>
            <View style={AddWorkoutStyle.exercisesToSelectContainer}> 
            <ScrollView contentContainerStyle={AddWorkoutStyle.scrollView}
            centerContent>
                    {exerciseList.map((item, index) => {
                    return(
                        <View style={AddWorkoutStyle.containerFOrExerciseAndCheckBox}> 
                            <View style={AddWorkoutStyle.singleExerciseWithPhotoContainer}> 
                            <TouchableOpacity
                            onPress={() => navigation.navigate('Exercise',{ name: item.name, description: item.description, photoUrl: item.photo_link})}>
                                <View style={AddWorkoutStyle.rowDivisionContainerForExercise}> 
                                <View style={AddWorkoutStyle.exerciseNameContainerS}>
                                <Text style={AddWorkoutStyle.exercisenameText}> {item.name}</Text>
                                </View>
                                <View style={AddWorkoutStyle.imageContenerForExercise}>
                                    <Image
                                    style={AddWorkoutStyle.imageExercise}
                                    source={{uri: item.photo_link}}/>
                                </View>
                                </View>
                            </TouchableOpacity>
                            </View>
                        <View style={AddWorkoutStyle.checkboxContainer}>
                                <CheckBox
                                center={true}
                                checked={item.selected}
                                onPress={() => handleSelection(index)}
                                style={AddWorkoutStyle.checkbox}
                                />
                        </View>
                        </View>
                        )
                })}
                </ScrollView>
            </View>
            
            <View style={AddWorkoutStyle.addButtonContainer}>
                <TouchableOpacity style={AddWorkoutStyle.addexerciseButton}
                onPress={handleAddExercise}>
                    <Text style={AddWorkoutStyle.addexerciseButtonText}>ADD EXERCISE TO WORKOUT</Text>
                </TouchableOpacity>
            </View> 
        </KeyboardAvoidingView>
    )
}

export default AddExerciseToWorkoutScreen
