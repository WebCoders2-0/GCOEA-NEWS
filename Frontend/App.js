import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/component/Navigation/Tabs';



export default function App() {

  return (
    <NavigationContainer options={{headerShown: false}}>
      <Tabs />
    </NavigationContainer>
  
  );
}

