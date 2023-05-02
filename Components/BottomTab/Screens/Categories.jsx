import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#0B223F'}/>
      <Text style={styles.txt}>Categories</Text>
    </View>
  )
}

export default Categories

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