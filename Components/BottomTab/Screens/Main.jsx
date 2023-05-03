import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from "./Search";
import Header from "../../Header/Header";
const Stack = createNativeStackNavigator();
function Main() {
    return (
        <NavigationContainer>

     
        <Stack.Navigator>
          {/* <Stack.Screen name="Header" component={Header} /> */}
          {/* <Stack.Screen name="Search" component={Search} /> */}
        </Stack.Navigator>
        </NavigationContainer>
     
    );
  }
  
  export default Main;