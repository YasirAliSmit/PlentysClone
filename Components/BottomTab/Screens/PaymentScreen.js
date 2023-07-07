import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import { CardField, createToken, useStripe } from '@stripe/stripe-react-native';
import Button from './Button';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
const PaymentScreen = () => {
    const [cartInfo,setCartInfo] = useState(null)
    const fetchCartInfo = (cardDetail) => {
        if(cardDetail.complete){
            setCartInfo(cardDetail)
        }else{
            setCartInfo(null)
            
        }
    }
    const onDone =async () => {
        //console.log('here is our cardDetail jsdfklj',cartInfo)
if(!!cartInfo){
try{
  const resToken = await createToken({...cartInfo,type:'Card'})
  console.log(resToken,'this is res of token')
}catch(error){
  console.log('error while payment processing')
}
}
    }
  return (

    <View style={styles.container}>
    <CardField
      postalCodeEnabled={false}
      placeholders={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={{
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
      }}
      style={{
        width: '100%',
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={(cardDetails) => {
        fetchCartInfo( cardDetails);
      }}
      onFocus={(focusedField) => {
        console.log('focusField', focusedField);
      }}
    />
    <View style={{width:responsiveScreenWidth(100)}}>

    <Button disabled={!cartInfo} onPress={onDone}/>
    </View>
    </View>
  
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})