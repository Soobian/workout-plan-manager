import React, {useState} from "react"
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import { COLORS } from "../colors/Colors";
import { CheckBox } from "react-native-elements";
import { MeasurementsStyles } from '../measurements/MeasurementsStyles';

const InputDataForm = ({data, setFirstName, setage , setHeight, setweight, setsex, navigation}) =>{

    // TO DO:
    // calculate age from date of birth

    const [isWoman, setIsWoman] = useState(false)
    const formFields = [
        {label: "name", onChangeText: text => setFirstName(text)},
        {label: "age", onChangeText: text => setage(text)},
        {label: "height", onChangeText: text => setHeight(text)},
        {label: "weight", onChangeText: text => setweight(text)},
    ];

    return (
            <View style={styles.container}>
                <View style={styles.updateDataContainer}>
                    <Text style={styles.updateDataTxt}>
                        update your data
                    </Text>
                </View>
                
                {formFields.map((item, index) => {
                    return (
                        <View style={styles.singleItem} key={index}> 
                            <View style={styles.dataContainer}>
                                <Text style={styles.dataText}>
                                    {item.label}:
                                </Text>
                            </View>
                            <TextInput
                                    style={styles.input}
                                    onChangeText={item.onChangeText}
                                />
                        </View>
                        )})}
                
                <View style={styles.sexContainer}> 
                    <View style={styles.sexdataContainer}>
                        <Text style={styles.dataText}>sex:</Text>
                    </View>

                    <View style={styles.sexLabelContainer}>
                        <Text style={styles.sexdataText}>W</Text>
                    </View>
                    <CheckBox
                        center={true}
                        checked={isWoman}
                        onPress={() => {
                            setsex("Woman")
                            setIsWoman(true)
                        }}
                        style={styles.checkbox}/> 

                    <View style={styles.sexLabelContainer}>
                        <Text style={styles.sexdataText}>M</Text>
                    </View>
                    <CheckBox
                        center={true}
                        checked={!isWoman}
                        onPress={() => {
                            setsex("Man")
                            setIsWoman(false)
                        }}
                        style={styles.checkbox}/> 
                </View>
            </View>
    )
}

export default InputDataForm;

const styles = StyleSheet.create({
    container: {
        width: "85%",
        borderColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 10,
        height: 220,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.dark_gray,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
    },
    updateDataContainer: {
        alignItems: "center",
        marginBottom: 20,
        marginTop: 5,
    },
    updateDataTxt: {
        color: COLORS.blue,
        fontSize: 20,
    },
    singleItem: {
        flexDirection: "row" ,
        height: 30,
    },
    dataContainer: {
        height: "100%",
        width: 110,
        borderRadius: 8,
        marginTop: 5,
        alignItems: "flex-end",
    },
    dataText : {
        color: COLORS.blue,
        fontSize: 16,
        fontWeight: "900",
        alignItems: "center",
        paddingTop: 2,
    },
    input: {
        height: "100%",
        width: "50%",
        borderEndWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.light_gray,
        paddingLeft: 10,
        marginLeft: 10,
    },
    //container for whole 'sex' part
    sexContainer: {
        flexDirection: "row" ,
        height: 50,
    },
    sexdataContainer:{
        height: "100%",
        width: 110,
        borderRadius: 8,
        marginTop: 15,
        alignItems: "flex-end",
        marginHorizontal: 10,
    },
    sexLabelContainer:{
        height: "100%",
        width: 20,
        borderRadius: 8,
        marginTop: 15,
        alignItems: "flex-end",
    },
    sexdataText : {
        color: COLORS.blue,
        fontSize: 16,
        fontWeight: "700",
        alignItems: "center",
        paddingTop: 2,
    },
    checkbox: {
        alignSelf: "center",
    },
})