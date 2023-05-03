import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import Header from '../../Header/Header'
import { useQuery } from '@tanstack/react-query'
const Home = () => {
  return (

    <View style={styles.containerParent}>


      <StatusBar backgroundColor={'#0B223F'} />



      <Header />
      <View style={styles.container}>
        <Text style={styles.txt}>Home</Text>
      </View >
    </View >



  )
}

export default Home

const styles = StyleSheet.create({
  containerParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  }
})