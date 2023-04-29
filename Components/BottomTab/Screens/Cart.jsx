import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Cart</Text>
    </View>
  )
}

export default Cart

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