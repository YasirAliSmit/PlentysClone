import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Header from './Header';
import Cart from './Cart';
const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
      <Stack.Screen name="Header" options={{headerShown:false}} component={Header} />
      <Stack.Screen name="Cart" options={{headerShown:false}} component={Cart} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigate

const styles = StyleSheet.create({})