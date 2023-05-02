import { StyleSheet, Text, View ,StatusBar } from 'react-native'
import React from 'react'

import Header from '../../Header/Header'
const Home = () => {
  return (
    

    <View style={styles.container}>
      <StatusBar backgroundColor={'#0B223F'}/>
      <Header/>
    <View style={styles.container}>
      <Text style={styles.txt}>Home</Text>
      
      
    </View >
    </View >
    
    
    
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    }
})