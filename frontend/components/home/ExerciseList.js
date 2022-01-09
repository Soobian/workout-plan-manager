import React, { useState } from 'react'
import { ImageBackground, View, TouchableOpacity, Text , StyleSheet, ScrollView, Dimensions } from 'react-native'
import { HomeScreenStyles } from './HomeScreenStyles';
import {COLORS} from '../colors/Colors'

const { height, width } = Dimensions.get('window');

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

const photos = [
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1076/articles/2016/10/woman-pushup-1522242407.jpg?crop=1xw:0.75xh;center,top&resize=980:*',
  'https://www.helpguide.org/wp-content/uploads/resistance-band-woman-doing-leg-workout-768.jpg',
  'https://images.medicinenet.com/images/article/main_image/stretches-for-tight-hips.jpg'
] ;

const exerciseList = [
  {id: 0, name: "pushups", photoUrl: photos[0], selected: false},
  {id: 1, name: "sth else", photoUrl: photos[1], selected: false},
  {id: 2, name: "have no idea", photoUrl: photos[2], selected: false}
];

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
  imageWrapper :{
    flex: 1,
    aspectRatio: 4/3,
    height: 100,
    marginRight: 2,
  },
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
