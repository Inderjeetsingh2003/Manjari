import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';  // The sign-up flow
import MainPage from '../screens/mainpage';  // The main app page
import LangComm from '../screens/land'
import LanguageModule from '../../components/Related_Communication/LanguageModule';
import WordLevel from '../../components/Related_Communication/WordLevel';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* First, load the sign-up flow */}
      <Stack.Screen name="Auth" component={AuthStack} />
      
      {/* Then, load the main app page after sign-up */}
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="LangComm" component={LangComm}/>
      <Stack.Screen name="LanguageModule" component={LanguageModule}/>
      <Stack.Screen name="WordLevel" component={WordLevel}/>

    </Stack.Navigator>
  );
}
