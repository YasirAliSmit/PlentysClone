import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserMenu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>UserMenu</Text>
    </View>
  )
}

export default UserMenu

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