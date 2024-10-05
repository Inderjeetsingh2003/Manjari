import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';  // The sign-up flow
import MainPage from '../screens/mainpage';  // The main app page
import LangComm from '../screens/land'

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* First, load the sign-up flow */}
      <Stack.Screen name="Auth" component={AuthStack} />
      
      {/* Then, load the main app page after sign-up */}
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="LangComm" component={LangComm}/>
    </Stack.Navigator>
  );
}
