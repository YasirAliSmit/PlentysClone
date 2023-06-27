import {StyleSheet, Text,Image, TouchableOpacity, View, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import image from './Components/assets/1x/front.png'
import images from './Components/assets/1x/back.png'
// //import { Animated } from 'react-native-maps'

const Box = () => {
  const [btnClick,setBtnClick] = useState(false)
  const animation = useRef(new Animated.Value(0)).current; //here we create Ref
  const startAnimation = () => {
    Animated.spring(animation, {
      toValue:btnClick?1: 2,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'orange'},
          {
            transform:[{translateX:animation.interpolate({
              inputRange:[0,1],
              outputRange:[0,-80]
            })}]
          }
        ]}></Animated.View>
      <TouchableOpacity
        onPress={() => {startAnimation()  
            setBtnClick(!btnClick)  }}
        style={{
          marginTop: 50,
          width: 200,
          height: 50,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 15}}>Box</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({});

// //1 we have to creaete animation ref
// //2 start animation we have to coll function spring timing
// //transform in side transform we have three animation tranform rotation scale x scale y

