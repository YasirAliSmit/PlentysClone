import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './Screens/Cart';
import Categories from './Screens/Categories';
import Fav from './Screens/Fav';
import Home from './Screens/Home';
import UserMenu from './Screens/UserMenu';

import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import { useState } from 'react';
const Tab = createBottomTabNavigator();

const UserIcon = () => {
    return <Image source={require('../assets/user.png')} style={{ width: 24, height: 24 }} />
}
const BottomNavigation = () => {
    const [customColor, setCustomColor] = useState(false)
    const Categorie = () => {
        return <Image source={require('../assets/Icon.png')} style={{ width: 24, height: 24, tintColor: customColor === true ? '#F9C21A' : '#fff' }} />
    }
    return (
    
            <Tab.Navigator
                screenOptions={({ route }) => ({
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
                })}
            >
                <Tab.Screen
                    name="Home"
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="home" color={color} size={30} />
                        ),
                    }}
                    component={Home}
                />
                <Tab.Screen
                    onPress={() => setCustomColor((prevColor) => !prevColor)}
                    name="Categories"
                    options={{
                        headerShown: false,

                        tabBarIcon: Categorie,
                        tabBarShowLabel: false,
                    }}
                    component={Categories}
                />



                <Tab.Screen
                    name="Cart"
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => (<View style={styles.cart}>
                            <MaterialCommunityIcons name="cart" color={'#0B223F'} size={30} /> 
                            </View> ),
                    }}
                    component={Cart}
                />
                <Tab.Screen
                    name="Fav"
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="hearto" color={color} size={30} />
                        ),
                    }}
                    component={Fav}
                />
                <Tab.Screen
                    name="UserMenu"
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="user-circle" color={color} size={30} />
                        )
                    }}
                    component={UserMenu}
                />
            </Tab.Navigator>
        
        //    <NavigationContainer>
        //     <Tab.Navigator   screenOptions={({ route }) => ({
        //           tabBarActiveTintColor: '#F9C21A',
        //           tabBarInactiveTintColor: '#fff',
        //           tabBarStyle: {
        //             backgroundColor: '#0B223F',
        //             borderTopWidth: 1,
        //             borderTopColor: 'gray',
        //           },
        //           tabBarLabelStyle: {
        //             fontSize: 14,
        //             fontWeight: 'bold',
        //           },
        //         })} >
        //     <Tab.Screen name='Home' options={{headerShown:false, tabBarShowLabel:false,tabBarIcon: ({ color, size }) => (
        //               <AntDesign name="home" color={color} size={30} />
        //             ),}} component={Home}/>
        //     <Tab.Screen onPress={()=>setCustomColor((customColor)=>!customColor)} name='Categories'  options={{headerShown:false,tabBarIcon:Categorie  ,tabBarShowLabel:false,}} component={Categories}/>
        //     <Tab.Screen name='Cart'  options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:({color,size})=>(
        //         <MaterialCommunityIcons  name="cart" color={color} size={30} />  
        //     )}} component={Cart}/>
        //     <Tab.Screen name='Fav'  options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:({color,size})=>(
        //          <AntDesign name="hearto" color={color} size={30} />
        //     )}} component={Fav}/>
        //     <Tab.Screen name='UserMenu'  options={{headerShown:false ,tabBarShowLabel:false,tabBarIcon:UserIcon }} component={UserMenu}/>  
        //     </Tab.Navigator>
        //    </NavigationContainer>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({

    cart: {
        position: 'absolute',
        top:-40,
        padding: 20,
        backgroundColor: '#FA9E15',
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
        borderBottomRightRadius: 90,
        borderBottomLeftRadius: 90,
        elevation:40
        
      },
})
