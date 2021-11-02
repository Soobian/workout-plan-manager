import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

export const bottomTabIcons = [
    {
      name: 'Home',
      image: 'https://img.icons8.com/ios/50/000000/home--v1.png',
    },
    {
      name: 'Food',
      image: 'https://img.icons8.com/ios/50/000000/dining-room.png',
    },
    {
      name: 'Workout',
      image: 'https://img.icons8.com/ios/50/000000/dumbbell--v1.png',
    },
    {
      name: 'Social',
      image: 'https://img.icons8.com/ios/50/000000/friends.png',
    },
    {
      name: 'Profile',
      image: 'https://img.icons8.com/ios/50/000000/user--v1.png'
    },
  ]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const BottomButton = ({ icon }) => (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
          <Image source={{uri:icon.image}} style={styles.button}/>
      </TouchableOpacity>
    )

    return (
      <View style={styles.container}>
          {icons.map((icon, index) => (
            <BottomButton key={index} icon={icon}/>
          ))}
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    button: {
        height: 30,
        width: 30,
    },
})

export default BottomTabs