import * as WebBrowser from 'expo-web-browser';
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import React, { useState, useCallback } from "react";
import { useRouter } from 'expo-router';
import * as Linking from 'expo-linking';
import { useOAuth } from '@clerk/clerk-expo';
import passwordIcon from '../../assets/images/lock_24dp_F5C7C7.png';
import emailIcon from '../../assets/images/email_24dp_F5C7C7.png';
import nameIcon from '../../assets/images/edit_24dp_F5C7C7.png';

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function CombinedScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPressGoogle = useCallback(async () => {
    try {
      const { createdSessionId } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/step1', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
        // Successful OAuth flow 
      } else {
        // Handle signIn or signUp as needed
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  const handleCreateAccount = () => {
    console.log('Creating account with:', name, email, password);
    router.push("/step1");
  }; 

  return (
    <ScrollView className="bg-[#DCF2FA]">
      {/* Image from second code */}
      <View>
        <Image
          source={require('../../assets/images/Manjari3.jpg')}
          style={{ width: "100%", height: 200 }}
        />
      </View>

      {/* First code's fields */}
      <View className="flex-1 bg-[#DCF2FA] items-center justify-center px-5">
        <Text className="text-2xl mb-5 text-black" style={{ fontSize: 20, fontFamily: 'itim' }}>Create an account</Text>
        <View className="flex-row items-center w-full p-4 mb-3 bg-[#DCF2FA] rounded-md border border-[#F5C7C7]">
          <Image
            source={nameIcon}
            className="w-6 h-6 mr-3"
          />
          <TextInput
            className="flex-1 text-base"
            placeholder="Name"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
          />
        </View>
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
          onPress={handleCreateAccount}
        >
          <Text className="text-black text-lg" style={{fontFamily: 'itim' }}>Create an account</Text>
        </TouchableOpacity>
 
        <Text className="my-4">-----------------------------------------OR------------------------------------------</Text>

        {/* Google OAuth from second code */} 
        <Pressable
          onPress={onPressGoogle}
          style={{ padding: 15, marginTop: 30, backgroundColor: '#f5c7c7', width: '100%', borderRadius: 14, alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, fontFamily: 'itim' }}>Create an account with Google</Text>
        </Pressable>

        <Text className='mt-4'>
          Already have an account?
          <Text onPress={() => router.push("/(tabs)/login")} style={{ color: '#007BFF' }}> Login</Text>
        </Text>
      </View>  
    </ScrollView>
  );
} 