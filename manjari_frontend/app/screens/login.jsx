import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import passwordIcon from '@/assets/images/lock_24dp_F5C7C7.png';
import emailIcon from '@/assets/images/email_24dp_F5C7C7.png';
import { useUser } from "@clerk/clerk-expo";

const login = () => {
    const router = useRouter();
    const { user } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(1)
    useEffect(() => {
      if (user) {
          console.log("User Full Name:", user.fullName);
          console.log("User Email:", user.emailAddresses[0]?.emailAddress);
      }
  }, [user]);


    console.log("helloooo")
    const handleLogin = () => {
      console.log('Logging in with:', email, password);
      router.push("/(tabs)/mainpage");
    };
  
    return (
        <ScrollView className='bg-[#DCF2FA]'>
      <View className="flex-1 bg-[#DCF2FA] items-center justify-center px-5">
        <StatusBar style="dark" />
        <View>
          <Image
            source={require('@/assets/images/Manjari3.jpg')}
            className="w-13 h-25 mb-5 object-cover"
          />
        </View>
        
        <Text className="text-2xl mb-5">Welcome Back to Manjari!</Text>
        <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
          <Image
            source={emailIcon}
            className="w-6 h-6 mr-3"
          />
          <TextInput
            className="flex-1 text-base"
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
          <Image
            source={passwordIcon}
            className="w-6 h-6 mr-3"
          />
          <TextInput
            className="flex-1 text-base"
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          className="w-full p-4 mt-2 bg-[#F5C7C7] rounded-md items-center"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg">Login</Text>
        </TouchableOpacity>
        <Text className="my-4">-----------------------------------------OR------------------------------------------</Text>
        <TouchableOpacity
          className="w-full p-4 mt-2 bg-[#F5C7C7] rounded-md items-center"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg">Login with Google</Text>
        </TouchableOpacity>
        <Text className='mt-10'>Do not have an account?<Text onPress={()=>router.back()}>SignUp</Text></Text>
      </View>
      </ScrollView>
    );
}

export default login