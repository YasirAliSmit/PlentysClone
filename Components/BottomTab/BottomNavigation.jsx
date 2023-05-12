import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from './Screens/Cart';
import Categories from './Screens/Categories';
import Fav from './Screens/Fav';
import Home from './Screens/Home';
import UserMenu from './Screens/UserMenu';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const navigation = useNavigation();
  const [customColor, setCustomColor] = useState(false);
  const Categorie = () => {
    return (
      <Image
        source={require('../assets/Icon.png')}
        style={{
          width: 18,
          height: 18,
          tintColor: customColor === true ? '#F9C21A' : '#fff',
        }}
      />
    );
  };

  //here start function
  const hideTabBar = ({navigation}) => {
    navigation.setOptions({
      tabBarVisible: false,
    });
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#F9C21A',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#0B223F',
          borderTopWidth: 1,
          borderTopColor: 'gray',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign
              name="home"
              color={color}
              size={responsiveScreenFontSize(3)}
            />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        onPress={() => setCustomColor(prevColor => !prevColor)}
        name="Categories"
        options={{
          headerShown: false,

          tabBarIcon: Categorie,
          tabBarShowLabel: false,
        }}
        component={Categories}
      />

      <Tab.Screen
        name="empty"
        options={{
          tabBarVisible: false,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: props => (
            <TouchableOpacity
              style={{width: 100, height: 100}}
              onPress={() => navigation.navigate('Cart')}>
              <View style={styles.cart}>
                <MaterialCommunityIcons
                  name="cart"
                  color={'#0B223F'}
                  size={responsiveScreenFontSize(3)}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Fav"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign
              name="hearto"
              color={color}
              size={responsiveScreenFontSize(3)}
            />
          ),
        }}
        component={Fav}
      />
      <Tab.Screen
        name="UserMenu"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome
              name="user-circle"
              color={color}
              size={responsiveFontSize(3)}
            />
          ),
        }}
        component={UserMenu}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  cart: {
    position: 'absolute',
    left: responsiveScreenWidth(7),
    top: responsiveScreenHeight(-4),
    padding: responsiveScreenWidth(4),

    backgroundColor: '#F9C21A',

    borderRadius: responsiveScreenWidth(10),
    elevation: 5,
    //shadowColor: 'black',
  },
});
