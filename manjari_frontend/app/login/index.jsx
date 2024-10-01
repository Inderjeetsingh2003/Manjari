import * as WebBrowser from 'expo-web-browser'
import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { useCallback } from 'react';

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()
export default function LoginScreen() {
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
        
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  return (
    <View style={{height:'100%'}}>
      <View>
        <Image
          source={require("./../../assets/images/Manjari2.jpg")}
          style={{
            width: "100%",
            height: 200,
          }}
        />
      </View>
      <View style={{ padding: 20, display: "flex", alignItems: "center" }}>
        <Text style={{ fontFamily: "itim", fontWeight: "bold", fontSize: 20 }}>
          Welcome to this amazing application!
        </Text>
        <Text>
          Manjari aims to provide a stimulating and effective learning
          experience by enhancing communication skills, subject matter
          knowledge, and motor abilities.
        </Text>
        <Pressable onPress={onPress}
        style={{padding:15,marginTop:30,backgroundColor:'#f5c7c7', width: '100%',borderRadius:14, alignItems: "center"}}>
          <Text style={{fontSize:20, fontFamily:'itim'}}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}
