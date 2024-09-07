import { View, Text, Image } from 'react-native'
import React from 'react'

const mainpage = () => {
  return (
    
    <View>
        <View>
            <Image source={require('../../assets/images/Manjari3.jpg')}  className="absolute top-0 right-0"/>
        </View>
      <Text>mainpage</Text>
    </View>
  )
}

export default mainpage