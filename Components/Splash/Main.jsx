import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Splash';
import Parent from './Parent';
const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown:false}}  name="Parent" component={Parent} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main

