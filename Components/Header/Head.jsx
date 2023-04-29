import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Head = () => {
    const navigation = useNavigation();
  return (
    <View style={{width:'100%',backgroundColor:'white',height:70}}>
   <TouchableOpacity onPress={()=>navigation.navigate('Search')}><Text>Head</Text></TouchableOpacity>
    </View>
  )
}

export default Head

const styles = StyleSheet.create({})