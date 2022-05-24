import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


// ======================= login screen =====================================

import HomeLoginScreen from '../../Screens/Logins/HomeLoginScreen/HomeLoginScreen';
import PublicLoginScreen from '../../Screens/Logins/PublicLoginScreen/PublicLoginScreen';
import PublicRegisterScreen from '../../Screens/Logins/PublicRegisterScreen/PublicRegisterScreen';
import StudentRegisterScreen from '../../Screens/Logins/StudentRegisterScreen/StudentRegisterScreen';
import StudentLoginScreen from '../../Screens/Logins/StudentLoginScreen/StudentLoginScreen';
// ======================= login screen =====================================

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="homeLogin" component={HomeLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="studentRegister" component={StudentRegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="studentLogin" component={StudentLoginScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="publicLogin" component={PublicLoginScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="publicRegister" component={PublicRegisterScreen} options={{ headerShown: false }}/> 
    </Stack.Navigator>
  )
}

export default LoginStack;