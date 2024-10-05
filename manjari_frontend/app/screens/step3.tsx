import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import locationIcon from '@/assets/images/location_on_24dp_F5C7C7.png';
import cityIcon from '@/assets/images/location_city_24dp_F5C7C7.png';
import arrow_right from '@/assets/images/arrow_forward_24dp_F5C7C7.png';

const step3 = ({navigation}) => {

    const router = useRouter();
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const[pincode, setPincode]=useState('');
  const [state, setState]=useState('');
  const [country, setCountry]=useState('');

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={'height'}
  >

    
    <ScrollView className='bg-[#DCF2FA]'>
    <View className="flex-1 bg-[#DCF2FA] items-center justify-center px-5">
      <StatusBar style="dark" />
      <View className="absolute top-5 right-5">
          <Image
            source={require('@/assets/images/Manjari.jpg')}
            className="w-20 h-20 rounded-full mb-5"
          />
        </View>
      <Text className="text-2xl mb-5 mt-32 text-center">Please answer a few questions.</Text>
      <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
        <Image
          source={cityIcon}
          className="w-6 h-6 mr-3"
        />
        <TextInput
          className="flex-1 text-base"
          placeholder="House No & Street name"
          placeholderTextColor="#888"
          value={street}
          onChangeText={setStreet}
          autoCapitalize="none"
        />
      </View>
      <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
        <Image
          source={cityIcon}
          className="w-6 h-6 mr-3"
        />
        <TextInput
          className="flex-1 text-base"
          placeholder="Enter City"
          placeholderTextColor="#888"
          value={city}
          onChangeText={setCity}
          autoCapitalize="none"
        />
      </View>
      <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
        <Image
          source={locationIcon}
          className="w-6 h-6 mr-3"
        />
        <TextInput
          className="flex-1 text-base"
          placeholder="Enter State"
          placeholderTextColor="#888"
          value={state}
          onChangeText={setState}
        />
      </View>
      <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
        <Image
          source={locationIcon}
          className="w-6 h-6 mr-3"
        />
        <TextInput
          className="flex-1 text-base"
          placeholder="Enter Country"
          placeholderTextColor="#888"
          value={country}
          onChangeText={setCountry}
        />
      </View>
      <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
        <Image
          source={locationIcon}
          className="w-6 h-6 mr-3"
        />
        <TextInput
          className="flex-1 text-base"
          placeholder="Enter Pincode"
          placeholderTextColor="#888"
          value={pincode}
          onChangeText={setPincode}
        />
      </View>
     
   
      
    </View>
  
    </ScrollView>
   
    
    <TouchableOpacity
          className="absolute bottom-10 right-5"
          onPress={() => navigation.replace('MainPage')}
        >
          <Image source={arrow_right} className="w-10 h-10" />
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default step3