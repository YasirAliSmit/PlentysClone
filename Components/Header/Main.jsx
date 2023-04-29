import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Head from './Head'
import Search from './Search'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createNativeStackNavigator()
const Main = () => {
  return (
    <NavigationContainer>

 <Tab.Navigator>
    <Tab.Screen name='Head' options={{headerShown:false}} component={Head}/>
    <Tab.Screen name='Search' options={{headerShown:false}} component={Search}/>
 </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({})