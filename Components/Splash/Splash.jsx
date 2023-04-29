import { StyleSheet,  View ,Image} from 'react-native'
import React, { useEffect } from 'react'
import {  useNavigation } from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
    navigation.navigate('Parent')
    },2000)
  },[])
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#0B223F'}}>
    <Image style={{width:140,height:300,objectFit:'contain'}} source={require('../assets/Logo.webp')}/>
    </View>
  )
}

export default Splash

