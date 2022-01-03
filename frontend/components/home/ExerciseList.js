import React from 'react'
import { ImageBackground, View, TouchableOpacity, Text , StyleSheet, ScrollView, Dimensions } from 'react-native'
import { HomeScreenStyles } from './HomeScreenStyles';

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

const ExerciseListComponent = ({data, navigation}) => {
  const Plan = ({ item }) => (
    <TouchableOpacity style={styles.imageWrapper}>
      <ImageBackground source={{uri:'https://www.fillmurray.com/600/800'}} resizeMode="cover" style={styles.coverImage} imageStyle={{ borderRadius: 20}}>
        <View style={styles.textView}>
          <Text style={styles.imageText}>{item.name}</Text>
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
        {data.map((name, index) => (
          <Plan item={name} key={index}/>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    marginLeft: width * 0.02,
    top: -20
  },
  scrollview:{
    height: 120, 
    margin: 0, 
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

export default ExerciseListComponent
