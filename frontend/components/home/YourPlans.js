import React, { useEffect } from 'react'
import { ImageBackground, View, TouchableOpacity, Text , StyleSheet, ScrollView, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

/**
 * @author Maciej Ciepał, Paulina Gacek
 * @module Home
 */

export const asd = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' },
]

/**
 * @module Home
 * @author Maciej Ciepał
 * @param {item} - enables displaying proper plan
 * @param {navigation} - enables come back to previous screen
 * @returns component with plan
 */
const Plan = ({ item, navigation }) => {
    useEffect(() => {
        console.log(item)
    })
    return(
        <TouchableOpacity style={styles.imageWrapper} onPress={() => navigation.navigate('Work', {name: item.name, level: item.level, photoUrl: item.photo_link, 
            exercises: item.workout})}>
            <ImageBackground 
                source={{uri: item.photo_link }} 
                resizeMode="cover" 
                style={styles.coverImage} 
                imageStyle={{ borderRadius: 20}} 
            >
                <View style={styles.textView}>
                    <Text style={styles.imageText}>{item.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

/**
 * @param {props} - enables displaying proper exercise and workout
 * @author Maciej Ciepał
 * @returns small plan component
 */
const YourPlans = ( props ) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal = {true} keyboardShouldPersistTaps='always' showsHorizontalScrollIndicator={false} style={{height: height/4, margin: 0, borderTopLeftRadius: 20, borderBottomLeftRadius: 20}}>
                {props.data.map((item, index) => (
                    <Plan item={item} key={index} navigation={props.navigation}/>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    /**
    * whole page
    */
  container: {
    flex: 7,
    marginLeft: width * 0.02,
  },
  imageWrapper :{
    flex: 1,
    aspectRatio: 4/3,
    height: height/4,
  },
  coverImage: {
    aspectRatio: 4/3,
    height: height/4,
    marginRight: 10,
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageText: {
    margin: 0,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
})

export default YourPlans
