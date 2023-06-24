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
        <Image
          style={styles.front}
          source={require('../../assets/1x/front.png')}
        />
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
  modalContainer: {},
  screenImage: {
    borderRadius:responsiveScreenWidth(8),
    height: responsiveScreenHeight(40),
    width: responsiveScreenWidth(90),
    resizeMode: 'cover',
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
    top: responsiveScreenHeight(-14),
    left: responsiveScreenWidth(35),
  },
  cross: {
    position: 'absolute',
    top: responsiveScreenHeight(2),
    right: responsiveScreenWidth(6),
  },
  front:{
    position:'absolute',

    height:responsiveScreenHeight(20),
    width:responsiveScreenWidth(25),
    resizeMode:'contain',
    top:responsiveScreenHeight(-25),
    left:responsiveScreenWidth(5)
  },
  front1:{
    position:'absolute',

    height:responsiveScreenHeight(20),
    width:responsiveScreenWidth(25),
    resizeMode:'contain',
    top:responsiveScreenHeight(-25),
    left:responsiveScreenWidth(33)
  },
  front2:{
    position:'absolute',

    height:responsiveScreenHeight(20),
    width:responsiveScreenWidth(25),
    resizeMode:'contain',
    top:responsiveScreenHeight(-25),
    left:responsiveScreenWidth(60)
  }
});
