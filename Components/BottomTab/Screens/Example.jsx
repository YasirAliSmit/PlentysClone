import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'

const Example = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#0B223F'}/>
      <Text  style={styles.cart} >Example</Text>
    </View>
  )
}

export default Example

const styles = StyleSheet.create({
    cart: {
        paddingBottom: 50,

           position: 'absolute',
            padding:20,
            backgroundColor:'#FA9E15'
            ,
            borderTopLeftRadius:90,
            borderTopRightRadius:90,
            
            borderBottomRightRadius:90,
            borderBottomLeftRadius:90,
            
    
    },
    
})