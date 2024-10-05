import { View, Text, Image , TouchableOpacity, ScrollView} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { router } from 'expo-router'
import LangComm from '../screens/land';

const mainpage = ({navigation}) => {
  return (
    
    <ScrollView className="bg-[#DCF2FA]">
    <View className="flex-1 bg-[#DCF2FA] items-center justify-center px-5">
      <StatusBar style="dark" />
  
      {/* Image at top-right */}
      <View className="justify-center items-center">
        <Image
          source={require('@/assets/images/Manjari.jpg')}
          className="w-40 h-40 rounded-full"
        />
      </View>
  
      {/* Centered TouchableOpacity with shadows */}
      <View className="flex-1 justify-center items-center">
        <TouchableOpacity 
          className="w-60 h-60 bg-white rounded-lg shadow-lg justify-center items-center"
          onPress={() => navigation.navigate('LangComm')}
        >
          <Image source={require('@/assets/images/cartoon_talk.png')} className="w-3/4 h-3/4 "/>
         
        </TouchableOpacity>

        <TouchableOpacity
          className="w-60 p-4 mt-2 bg-[#F5C7C7] rounded-md items-center mt-10"
          onPress={() => navigation.navigate('LangComm')}
         
        >
          <Text className="text-black text-xl" style={{fontFamily: 'itim' }}>Speak your mind</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  
   
    
  )
}

export default mainpage