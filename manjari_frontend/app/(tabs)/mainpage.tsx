import { View, Text, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const mainpage = () => {
  return (
    
    <View>
        <View>
            <Image source={require('@/assets/images/Manjari3.jpg')}  className="absolute top-0 right-0"/>
        </View>
      <Text>mainpage</Text>
      <TouchableOpacity className="items-center justify-center bg-[#32CD32]  rounded-lg mr-1" onPress={()=> router.push("/(tabs)/LangComm/land")}>
    <Text className="text-base text-black text-center">GO to Language Module</Text>
  </TouchableOpacity> 
      
    </View> 
  )
}

export default mainpage