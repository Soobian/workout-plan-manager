import React, {useState} from 'react'
import { KeyboardAvoidingView, Text, View, Dimensions, StyleSheet, TextInput} from 'react-native'
import { COLORS } from '../colors/Colors';
const { height, width } = Dimensions.get('window');
import { CheckBox } from 'react-native-elements';

const InputDataForm = ({data, navigation}) =>{

    // TO DO:
    // calculate age from date of birth
    
    const [firstName, setFirstName] = useState('random');
    const [dateOfBirth, setdateOfBirth] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setweight] = useState('');
    
    const [isWoman, setIsWoman] = useState(false);

    const formFields = [
        {label: 'name', value: firstName, onChangeText: text => setFirstName(text)},
        {label: 'date of birth', value: dateOfBirth, onChangeText: text => setdateOfBirth(text)},
        {label: 'height', value: height, onChangeText: text => setHeight(text)},
        {label: 'weight', value: weight, onChangeText: text => setweight(text)},
    ];

    return (
            <View style={styles.container}>
                <View style={styles.updateDataContainer}>
                    <Text style={styles.updateDataTxt}>update your data</Text>
                </View>
                
                {formFields.map((item, index) => {
                    return (
                        <View style={styles.singleItem}> 
                            <View style={styles.dataContainer}>
                                <Text style={styles.dataText}>{item.label}:</Text>
                            </View>
                            <TextInput
                                    style={styles.input}
                                    onChangeText={item.onChangeText}
                                    value={item.value}
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
                        onPress={() => setIsWoman(!isWoman)}
                        style={styles.checkbox}/> 
                    <View style={styles.sexLabelContainer}>
                        <Text style={styles.sexdataText}>M</Text>
                    </View>
                    <CheckBox
                        center={true}
                        checked={!isWoman}
                        onPress={() => setIsWoman(!isWoman)}
                        style={styles.checkbox}/> 
                </View>
            </View>
    )
}

export default InputDataForm;

const styles = StyleSheet.create({
    container: {
        //top: -height*0.3,
        width: '90%',
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
        alignItems: 'center',
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
        height: '100%',
        width: 110,
        borderRadius: 8,
        marginTop: 5,
        alignItems: 'flex-end',
    },
    dataText : {
        color: COLORS.blue,
        fontSize: 16,
        fontWeight: "900",
        alignItems: 'center',
        paddingTop: 2,
    },
    input: {
        height: '100%',
        width: 150,
        borderEndWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.light_gray,
        paddingLeft: 10,
        marginLeft: 10,
    },
    //sex
    sexContainer: {
        flexDirection: "row" ,
        height: 50,
    },
    sexdataContainer:{
        height: '100%',
        width: 110,
        borderRadius: 8,
        marginTop: 15,
        alignItems: 'flex-end',
        marginHorizontal: 10,
    },
    sexLabelContainer:{
        height: '100%',
        width: 20,
        borderRadius: 8,
        marginTop: 15,
        alignItems: 'flex-end',
    },
    sexdataText : {
        color: COLORS.blue,
        fontSize: 16,
        fontWeight: "700",
        alignItems: 'center',
        paddingTop: 2,
    },
    checkboxContainer: {
        width: 20,
        height: 40,
        borderRadius: 8,
        borderColor: COLORS.blue,
        borderWidth: 2,
    },
    checkbox: {
        alignSelf: "center",
        backgroundColor: 'black',
        color: 'black',
        borderRadius: 8,
        borderColor: COLORS.blue,
        borderWidth: 2,
    },
})