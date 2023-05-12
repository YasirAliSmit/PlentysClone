import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Splash';
import Parent from './Parent';
import Search from '../BottomTab/Screens/Search';
import Home from '../BottomTab/Screens/Home';
import BottomNavigation from '../BottomTab/BottomNavigation';
import Cart from '../BottomTab/Screens/Cart';
import RamdanDeals from '../BottomTab/Screens/RamdanDeals';
import TopBrands from '../BottomTab/Screens/TopBrands';
import TopBrandProducts from '../BottomTab/Screens/TopBrandProducts';
const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Parent"
          component={Parent}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Search"
          component={Search}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomNavigation"
          component={BottomNavigation}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TopBrandProducts"
          component={TopBrandProducts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
