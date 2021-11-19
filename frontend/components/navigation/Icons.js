import React from 'react';
import { Image, StyleSheet } from 'react-native'

const Icon = ({image, color}) => {
    return(
        <Image source={{uri:image}} style={{height:30, width:30, tintColor: color}}/> 
    )
}

export default Icon