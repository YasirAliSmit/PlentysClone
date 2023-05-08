import { StyleSheet, Text, View ,Button} from 'react-native'
import React, { useState } from 'react'
////counter
import { useDispatch , useSelector } from 'react-redux'
import { increment,incrementByAmount , decrement } from '../store/cartSlice'
const Home = () => {
    const [count,setCount] = useState(0)
    const dispatch = useDispatch()
    const coin = useSelector((state)=> state.counter.value)
    const addItem = () => {
        dispatch(increment())
    }
    const removeItem = () => {
        dispatch(decrement())
    }
    const increByItem = () => {
        dispatch(incrementByAmount(5))
    }
  return (
    <View style={styles.contain}>
      <View style={{width:'30%'}} ><Button onPress={()=>addItem()} title='Add'/></View>
      <View><Text>{coin}</Text></View>
      <View style={{width:'30%'}} ><Button onPress={()=>removeItem()} title='Remove'/></View>
      <View style={{width:'30%'}} ><Button onPress={()=>increByItem()} title='increbyamt5'/></View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    // contain:{
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center'
    // }
})