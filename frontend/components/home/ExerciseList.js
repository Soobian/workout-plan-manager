import React from 'react'
import { ImageBackground, View, TouchableOpacity, Text , StyleSheet, ScrollView, Dimensions } from 'react-native'
import { HomeScreenStyles } from './HomeScreenStyles';
import {COLORS} from '../colors/Colors'


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
 * @author Paulina Gacek
 * @param {data} - enables displaying proper exercise and workout
 * @param {navigation} - enables come back to previous screen
 * @returns component with list of exercises
 */
const ExerciseListComponent = ({data, navigation}) => {
    const Exercise = ({ item }) => (
        <TouchableOpacity 
            style={styles.imageWrapper}
            onPress={() => navigation.navigate('Exercise', { name: item.name, description: item.description, photoUrl: item.photo_link }) }
        >
            <ImageBackground 
                source={{uri: item.photo_link}} 
                resizeMode="cover" 
                style={styles.coverImage} 
                imageStyle={{ borderRadius: 20}}
            >
                <View style={styles.workoutNameContainer}>
                    <Text style={styles.workoutNameText}>{item.name}</Text>
                    <Text style={styles.workoutLevelText}>{item.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <Text style={HomeScreenStyles.titleText}>
                Explore new exercises:
            </Text>
        <ScrollView 
        horizontal = {true} 
        keyboardShouldPersistTaps='always' 
        showsHorizontalScrollIndicator={false} 
        style={styles.scrollview}>
            {data.map((item, index) => (
                <Exercise item={item} key={index}/>
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
    marginLeft: 15,
    top: -30
  },
  scrollview:{
    height: 120, 
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingRight: 5,
  },
  /**
  * container for image scroll horizontal list
  */
  imageWrapper :{
    flex: 1,
    aspectRatio: 4/3,
    height: 100,
    marginRight: 2,
  },
  /**
   * image container
  */
  coverImage: {
    aspectRatio: 4/3,
    height: 100,
    marginRight: 10,
  },
  workoutNameContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
    aspectRatio: 4/3,
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  workoutNameText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
  },
  workoutLevelText : {
    color: COLORS.white,
    paddingHorizontal: 3,
    fontSize: 12,
    fontWeight: "900",
    alignItems: 'center',
},
})

export default ExerciseListComponent
