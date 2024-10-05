import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpStep1 from '../screens/step1';
import SignUpStep2 from '../screens/step2';
import SignUpStep3 from '../screens/step3';
import Login from '../login/index';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Step1" component={SignUpStep1} />
    <Stack.Screen name="Step2" component={SignUpStep2} />
    <Stack.Screen name="Step3" component={SignUpStep3} />
  </Stack.Navigator>
  );
}

export default AuthStack;
