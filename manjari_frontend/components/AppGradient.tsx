import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import CustomButton from './CustomButton';

const AppGradient = ({children, colors}:{children:any; colors:string[];}) => {
  return (
   <LinearGradient colors={colors} className='flex-1'>
   <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
        {children}
   </SafeAreaView>
   </LinearGradient>
  )
}

export default AppGradient