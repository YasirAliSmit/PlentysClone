import { StyleSheet, Button,Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { EnterTxt } from '../store/newSlice'
const coin = () => {
    const [data,setData] = useState()
    const dispatch = useDispatch()
    const coin = useSelector(state=>state.counter.value)
    const ui = useSelector(state=>state.new.value)
    const addTxt = () => {
        dispatch(EnterTxt(data))
    }
  return (
    <View>
        <Text>{data}</Text>
        <Text>{ui}</Text>
 <TextInput type="text" onChangeText={(t)=>setData(t)} style={styles.input}/>
 <View style={{width:'30%'}}><Button onPress={()=>addTxt()} title='addtext'/></View>
    </View>
  )
}

export default coin

const styles = StyleSheet.create({
    input:{
        width:"50%",
        
        height:50,
        borderColor:'black',
        borderWidth:1
    }
})