import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import ConfettiCannon from 'react-native-confetti-cannon';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {useEffect} from 'react';
import {transform} from 'lodash';

const AnimatedModal = ({closeModal}) => {
  const [showImage, setShowImage] = useState(true);
  const [startAmination, setStartAnimation] = useState(false);
  const [showDesImage,setShowDesImage] = useState(false)
  const animation = useRef(new Animated.Value(0)).current; /// this is reference of animation in side animation.value we need to pass intialValue
  const animationValue = useRef(new Animated.Value(0)).current;
  const isFlipped = useRef(false);
  const animatedValue = new Animated.Value(0);
  const imageScale = new Animated.Value(1);
  const [isVisible, setIsVisible] = useState(false);
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  let currentValue = 0;
  const animationCounter = useRef(0);
  const images = [
    {
      id: 1,
      front: '../../assets/1x/front.png',
      back: '../../assets/1x/back.png',
    },
    {
      id: 2,
      front: '../../assets/1x/front.png',
      back: '../../assets/1x/back.png',
    },
    {
      id: 3,
      front: '../../assets/1x/front.png',
      back: '../../assets/1x/back.png',
    },
  ];
  animatedValue.addListener(({value}) => {
    currentValue = value;
  });
  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });
  const rotateYAnimatedStyle = {
    transform: [{rotateY: setInterpolate}],
  };

  const showHideImage = () => {
    Animated.sequence([
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(500),
      Animated.timing(opacityAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(500),
    ]).start(() => {
      animationCounter.current++;
      if (animationCounter.current < 3) {
        showHideImage();
      } else {
        setIsVisible(false);
        animationCounter.current = 0; // Reset counter for future animations
      }
    });
  };
  const startAnimation = () => {
    setIsVisible(true);

    const showHideImage = () => {
      Animated.sequence([
        Animated.timing(opacityAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.delay(500),
        Animated.timing(opacityAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.delay(500),
      ]).start(() => {
        animationCounter.current++;
        if (animationCounter.current < 3) {
          showHideImage();
        } else {
          setIsVisible(false);
          animationCounter.current = 0; // Reset counter for future animations
        }
      });
    };

    showHideImage();
  };
  const startAnimations = () => {
    Animated.spring(animation, {
      toValue: 3000,
      useNativeDriver: true,
    }).start(); // its is animation spring or start  spring take two parameter first reference and object in side object u can pass from and two like toValue
  };
  const flipAnimation = () => {
    if (currentValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        tension: 10,
        // friction:8,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,

        tension: 10,

        useNativeDriver: false,
      }).start();
    }
    setTimeout(() => {
      setShowImage(false);
    }, 50);

    setTimeout(()=>{    setShowImage(true);},3400)
    setTimeout(()=>{    setShowDesImage(true);},3500)
  };

  const startCardAnition = () => {

    Animated.loop(
      Animated.sequence([
        // Move the image to the right
        Animated.timing(animation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        // Move the image back to its original position
        Animated.timing(animation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 3 } // Number of times the animation should loop
    ).start();
    
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
                  outputRange: ['180deg', '360deg'],
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
            {isVisible && (
              <Animated.Image
                style={[styles.element, {opacity: opacityAnimation}]}
                source={require('../../assets/1x/element.png')}
              />
            )}
            <Image
              style={styles.heading}
              source={require('../../assets/1x/heading.png')}
            />
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Animated.Image
              
              style={[
                styles.front,
                rotateYAnimatedStyle,
                {
                  transform: [
                    {
                      translateX: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 120],
                      }),
                    },  {
                      scale: imageScale,
                    },
                  ],
                },
              ]}
              source={
                showImage
                ? require('../../assets/1x/front.png')
                : require('../../assets/1x/back.png')
              }
            />
          </TouchableOpacity>
        </View>
                    <TouchableOpacity>

         <Animated.Image
            style={[
              styles.front1,
              rotateYAnimatedStyle,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 120],
                    }),
                  },
                ],
              },
            ]}
            source={
              showImage
              ? require('../../assets/1x/front.png')
              : require('../../assets/1x/back.png')
            }
          />
        </TouchableOpacity>
        <Animated.Image
          style={[
            styles.front2,
            rotateYAnimatedStyle,
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -230],
                  }),
                },
              ],
            },
          ]}
          source={
            showImage
            ? require('../../assets/1x/front.png')
            : require('../../assets/1x/back.png')
          }
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setStartAnimation(true);
         // startAnimations();
          flipAnimation();
         startCardAnition();
          startAnimation();
        }}>
        <Image
          style={styles.button}
          source={require('../../assets/1x/button.png')}
          />
          {showDesImage?(<><Image style={styles.imagebackSprize} source={ require('../../assets/1x/front.png')}/>
          <ConfettiCannon fadeOut={true}  count={150}
           //origin={{x: 10, y: 10}}
           origin={{x: 120, y: 30}}
           particleSize={40}
            /></>):(null)} 
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

export default React.memo(AnimatedModal);

const styles = StyleSheet.create({
  screenImage: {
    borderRadius: responsiveScreenWidth(8),
    height: responsiveScreenHeight(30),
    width: responsiveScreenWidth(90),
    resizeMode: 'contain',
    position: 'relative',
  },
  imagebackSprize:{
    position:"absolute",
    width:responsiveScreenWidth(40),
   // height:responsiveScreenHeight(50),
    resizeMode:'contain',
    top:responsiveScreenHeight(-30),
    left:responsiveScreenWidth(25),
    zIndex:10
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
 
    resizeMode: 'contain',
    top: responsiveScreenHeight(-13),
    left: responsiveScreenWidth(35),
  },
  cross: {
    position: 'absolute',
    top: responsiveScreenHeight(2),
    right: responsiveScreenWidth(6),
    zIndex:30
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
  },
  element: {
    position: 'absolute',
    top: responsiveScreenHeight(-30),
    //right: responsiveScreenWidth(6),

    width: responsiveScreenWidth(70),
    //alignItems:"center",
    resizeMode: 'contain',
    marginLeft: responsiveScreenWidth(10),
  },
  heading: {
    position: 'absolute',
    top: responsiveScreenHeight(-35),
    left: responsiveScreenWidth(9),

    width: responsiveScreenWidth(50),
    //alignItems:"center",
    resizeMode: 'contain',
    marginLeft: responsiveScreenWidth(10),
  },
});
