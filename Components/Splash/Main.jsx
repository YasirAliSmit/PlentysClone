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
import ProductOfCategories from '../BottomTab/Screens/ProductOfCategories';
import ViewRamdan from '../BottomTab/Screens/ViewRamdan';
import ParticularCategories from '../BottomTab/Screens/ParticularCategories';
import ChildCategories from '../BottomTab/Screens/ChildCategories';
import CategoriesOfMart from '../BottomTab/Screens/CategoriesOfMart';
import Categories from '../BottomTab/Screens/Categories';
import WholeSale from '../BottomTab/Screens/WholeSale';
import NewArrivals from '../BottomTab/Screens/NewArrivals';
import Details from '../BottomTab/Screens/Details';
import Login from '../BottomTab/Screens/Login';
import Signup from '../BottomTab/Screens/Signup';
import SearchProducts from '../BottomTab/Screens/SearchProducts';
import Gatway from '../BottomTab/Screens/Gatway';
import TrackOrder from '../BottomTab/Screens/TrackOrder';
import Contect from '../BottomTab/Screens/Contect';
import Privacy from '../BottomTab/Screens/Privacy';
import Return from '../BottomTab/Screens/Return';
import About from '../BottomTab/Screens/About';
import UserMenu from '../BottomTab/Screens/UserMenu';
import TestCamera from '../BottomTab/Screens/camera';
import QrCode from '../BottomTab/Screens/QrCode';
import PaymentScreen from '../BottomTab/Screens/PaymentScreen';
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
          name="Details"
          component={Details}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Categories"
          component={Categories}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
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
        <Stack.Screen
          options={{headerShown: false}}
          name="WholeSale"
          component={WholeSale}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="NewArrivals"
          component={NewArrivals}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProductOfCategories"
          component={ProductOfCategories}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ViewRamdan"
          component={ViewRamdan}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ParticularCategories"
          component={ParticularCategories}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ChildCategories"
          component={ChildCategories}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CategoriesOfMart"
          component={CategoriesOfMart}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SearchProducts"
          component={SearchProducts}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Gatway"
          component={Gatway}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TrackOrder"
          component={TrackOrder}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Contect"
          component={Contect}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Privacy"
          component={Privacy}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Return"
          component={Return}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="About"
          component={About}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="UserMenu"
          component={UserMenu}
        />
           <Stack.Screen
          options={{headerShown: false}}
          name="TestCamera"
          component={TestCamera}
        />
          <Stack.Screen
          options={{headerShown: false}}
          name="QrCode"
          component={QrCode}
        />
             <Stack.Screen
          options={{headerShown: false}}
          name="PaymentScreen"
          component={PaymentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
