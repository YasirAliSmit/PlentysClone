import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import Header from '../../Header/Header'
import { useQuery } from '@tanstack/react-query'
import Banner from './Banner'
import { responsiveHeight } from 'react-native-responsive-dimensions'
const Home = () => {
  return (<View style={styles.containerParent}>
    <StatusBar backgroundColor={'#0B223F'} />
    <Header />
    <View style={styles.container}>
      <Banner/>
    </View >
  </View>)
}

export default Home

const styles = StyleSheet.create({
  containerParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  container: {
   
    flex: 1,
 position:'relative',
 top:responsiveHeight(-3.9)
    
  },

})