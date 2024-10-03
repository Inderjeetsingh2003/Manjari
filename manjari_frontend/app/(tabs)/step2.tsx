import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import callIcon from '@/assets/images/call_24dp_F5C7C7.png';
import personIcon from '@/assets/images/person_24dp_F5C7C7.png';
import arrow_right from '@/assets/images/arrow_forward_24dp_F5C7C7.png';

const step2 = () => {

    const router = useRouter();
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const[guardianName, setGuardianName]=useState('');
  const [phoneNumber, setPhoneNumber]=useState('');
  const [phoneNumber2, setPhoneNumber2]=useState('');

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
      <Text className="text-xl mb-5 text-center">Please enter Parent/Guardian's details.</Text>
      <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
        <Image
          source={personIcon}
          className="w-6 h-6 mr-3"
        />
        <TextInput
          className="flex-1 text-base"
          placeholder="Father's Name"
          placeholderTextColor="#888"
          value={fatherName}
          onChangeText={setFatherName}
          autoCapitalize="none"
        />
      </View>
      <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
        <Image
          source={personIcon}
          className="w-6 h-6 mr-3"
        />
        <TextInput
          className="flex-1 text-base"
          placeholder="Mother's Name"
          placeholderTextColor="#888"
          value={motherName}
          onChangeText={setMotherName}
          autoCapitalize="none"
        />
      </View>
      <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
        <Image
          source={personIcon}
          className="w-6 h-6 mr-3"
        />
        <TextInput
          className="flex-1 text-base"
          placeholder="Guardian's Name"
          placeholderTextColor="#888"
          value={guardianName}
          onChangeText={setGuardianName}
        />
      </View>
      <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
        <Image
          source={callIcon}
          className="w-6 h-6 mr-3"
        />
        <TextInput
          className="flex-1 text-base"
          placeholder="Phone Number 1"
          placeholderTextColor="#888"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
        <Image
          source={callIcon}
          className="w-6 h-6 mr-3"
        />
        <TextInput
          className="flex-1 text-base"
          placeholder="Phone Number 2"
          placeholderTextColor="#888"
          value={phoneNumber2}
          onChangeText={setPhoneNumber2}
        />
      </View>
     
   
      
    </View>
  
    </ScrollView>
   
    
    <TouchableOpacity
          className="absolute bottom-10 right-5"
          onPress={() => router.push('/(tabs)/step3')} // Replace 'NextPage' with your actual route name
        >
          <Image source={arrow_right} className="w-10 h-10" />
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default step2