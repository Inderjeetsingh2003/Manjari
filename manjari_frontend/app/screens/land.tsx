import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Land = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onPress=()=>{
    
  }

  return (
    <ScrollView className='bg-white'>
    <View className="flex-1 bg-white items-center justify-center px-5">
      <StatusBar style="dark" />
      <View className="absolute top-5 right-5">
          <Image
            source={require('@/assets/images/Manjari_white_back.jpg')}
            className="w-20 h-20 rounded-full mb-5"
          />
        </View>
      {/*After removing this Manjari logo disappears I dont know why*/}
      <Text className="text-2xl mb-5 mt-20 text-center"></Text>
      <View className="w-full mb-5 relative">
  <TextInput
    className="w-full p-4 pl-12 bg-gray-200 rounded-lg"
    placeholder=""
    value={searchQuery}
    onChangeText={setSearchQuery}
  />
  <Image
    source={require('@/assets/images/search_24dp_F5C7C7.png')}
    className="w-6 h-8 absolute top-4 left-4"
  />
</View>


        {/* ALl the boxes will be mapped based on the sentences from the backend*/}
        {/* Row 1 */}
        {/* <View className="flex-row items-center justify-center mb-5">
  <TouchableOpacity className="mr-2 items-center bg-[#32CD32] w-28 h-28 rounded-lg">
    <Text className="text-sm text-black text-center px-3 mt-8">I want to brush teeth</Text>
  </TouchableOpacity>
  <TouchableOpacity className="mr-2 items-center bg-[#C7C8FF] w-28 h-28 rounded-lg">
    <Text className="text-sm text-black text-center px-3 mt-8">I want to brush teeth</Text>
  </TouchableOpacity>
  <TouchableOpacity className="items-center bg-[#FF6347] w-28 h-28 rounded-lg">
    <Text className="text-sm text-black text-center px-3 mt-8">I want to brush teeth</Text>
  </TouchableOpacity>
</View> */}



       
<View className="flex-row items-center justify-between mb-5">
  <TouchableOpacity className="items-center justify-center bg-[#32CD32] w-32 h-32 rounded-lg mr-1">
    <Text className="text-base text-black text-center">I want to brush teeth</Text>
  </TouchableOpacity>
  <TouchableOpacity className="items-center justify-center bg-[#D4AF37] w-32 h-32 rounded-lg ml-1 mr-1" onPress={onPress}>
    <Text className="text-base text-black text-center">beautiful</Text>
  </TouchableOpacity>
  <TouchableOpacity className="items-center justify-center bg-[#9dd0f5] w-32 h-32 rounded-lg ml-1">
    <Text className="text-base text-black text-center">Work</Text>
  </TouchableOpacity>
</View>
<View className="flex-row items-center justify-between mb-5">
  <TouchableOpacity className="items-center justify-center bg-[#F7E7CE] w-32 h-32 rounded-lg mr-1">
    <Text className="text-base text-black text-center">and</Text>
  </TouchableOpacity>
  <TouchableOpacity className="items-center justify-center bg-[#FFC0CB] w-32 h-32 rounded-lg ml-1 mr-1">
    <Text className="text-base text-black text-center">her</Text>
  </TouchableOpacity>
  <TouchableOpacity className="items-center justify-center bg-[#2C5F2D] w-32 h-32 rounded-lg ml-1">
    <Text className="text-base text-black text-center">Work</Text>
  </TouchableOpacity>
</View>




      
     
   
      
    </View>
  
    </ScrollView>
  );
};

export default Land;
