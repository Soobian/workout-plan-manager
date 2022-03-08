import React from 'react';
import { Image } from 'react-native'

/**
 * @module Navigation
 * @author Maciej Ciepał
 * Icons for bottom bar navigation
 */
const Icon = ({image, color}) => {
    return(
        <Image source={{uri:image}} style={{height:30, width:30, tintColor: color}}/> 
    )
}

export default Icon