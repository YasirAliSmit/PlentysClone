import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import Entypo from 'react-native-vector-icons/dist/Entypo';
import {useEffect} from 'react';

const AnimatedModal = ({closeModal}) => {
  const animation = useRef(new Animated.Value(0)).current; /// this is reference of animation in side animation.value we need to pass intialValue
  const animationValue = useRef(new Animated.Value(0)).current;
  const isFlipped = useRef(false);
  const animatedValue = new Animated.Value(0)
  let currentValue = 0 
  const flipAnimated = () => {
    if(currentValue>=90){
      Animated.spring(animatedValue,{
        toValue:0,
        useNativeDriver:false
      }).start()
    }else{
      Animated.spring(animatedValue,{
        toValue:180,
        useNativeDriver:false
      }).start()
    }
  }
  animatedValue.addListener(({value})=>{
    currentValue = value 
  })
  const setInterpolate = animatedValue.interpolate({
    inputRange:[0,180],
    outputRange:['180deg','360deg']
  })
  const rotateYAnimatedStyle = {
    transform:[{rotateY:setInterpolate}]
  }
  const startAnimations = () => {
    Animated.spring(animation, {
      toValue: 2000,
      useNativeDriver: true,
    }).start(); // its is animation spring or start  spring take two parameter first reference and object in side object u can pass from and two like toValue
  };

  return (
    <View style={styles.modalContainer}>
      <Image
        style={styles.screenImage}
        source={require('../../assets/1x/screen.png')}
      />
      <Animated.Image
        style={[
          styles.lines,
          {
            transform: [
              {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
        source={require('../../assets/1x/lines.png')}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => console.log('Hello')}>
        <View>
            <Image 
              style={[styles.element]}
              source={require('../../assets/1x/element.png')}
            />
             <Image
              style={styles.heading}
              source={require('../../assets/1x/heading.png')}
            />
          </View>
            </TouchableOpacity>
          <View>
            <Image
              style={styles.front}
              source={require('../../assets/1x/front.png')}
            />
          </View>
        <Image
          style={styles.front1}
          source={require('../../assets/1x/front.png')}
        />
        <Image
          style={styles.front2}
          source={require('../../assets/1x/front.png')}
        />
      </View>
      <TouchableOpacity onPress={() => startAnimations()}>
        <Image
          style={styles.button}
          source={require('../../assets/1x/button.png')}
        />
      </TouchableOpacity>
      <Entypo
        style={styles.cross}
        name="circle-with-cross"
        onPress={closeModal}
        size={20}
        color="black"
      />
    </View>
  );
};

export default AnimatedModal;

const styles = StyleSheet.create({
 /// modalContainer: { height: responsiveScreenHeight(40),},
  screenImage: {
    borderRadius: responsiveScreenWidth(8),
    height: responsiveScreenHeight(30),
    width: responsiveScreenWidth(90),
    resizeMode: 'contain',
    position: 'relative',
  },
  lines: {
    position: 'absolute',
    height: responsiveScreenHeight(30),
    width: responsiveScreenWidth(90),
  },
  button: {
    position: 'absolute',
    height: responsiveScreenHeight(20),
    width: responsiveScreenWidth(20),
    zIndex: 20,
    resizeMode: 'contain',
    top: responsiveScreenHeight(-13),
    left: responsiveScreenWidth(35),
  },
  cross: {
    position: 'absolute',
    top: responsiveScreenHeight(2),
    right: responsiveScreenWidth(6),
  },
  front: {
    position: 'absolute',
    width: responsiveScreenWidth(22),
    height: responsiveScreenHeight(20),
    resizeMode: 'contain',
    top: responsiveScreenHeight(-23),
    left: responsiveScreenWidth(5),
  },
  front1: {
    position: 'absolute',

    height: responsiveScreenHeight(20),
    width: responsiveScreenWidth(22),
    resizeMode: 'contain',
    top: responsiveScreenHeight(-23),
    left: responsiveScreenWidth(33),
  },
  front2: {
    position: 'absolute',

    height: responsiveScreenHeight(20),
    width: responsiveScreenWidth(22),
    resizeMode: 'contain',
    top: responsiveScreenHeight(-23),
    left: responsiveScreenWidth(60),
  },element:{
    position: 'absolute',
    top: responsiveScreenHeight(-30),
    //right: responsiveScreenWidth(6),
    //zIndex:20,
    width: responsiveScreenWidth(70),
    //alignItems:"center",
    resizeMode: 'contain',
    marginLeft:responsiveScreenWidth(10)
  },heading:{
    
    position: 'absolute',
    top: responsiveScreenHeight(-35),
    left: responsiveScreenWidth(9),
    //zIndex:20,
    width: responsiveScreenWidth(50),
    //alignItems:"center",
    resizeMode: 'contain',
    marginLeft:responsiveScreenWidth(10)
  }
});
