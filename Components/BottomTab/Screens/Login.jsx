import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {TouchableOpacity, StatusBar} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#0B223F'} />
      <View style={styles.headerOfShoppingCart}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BottomNavigation')}>
            <Ionicons
              name="chevron-back"
              style={styles.arrow}
              size={20}
              color={'#fff'}
            />
          </TouchableOpacity>
          <Text style={styles.shoppingCart}>LogIn</Text>
        </View>
      </View>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.signintocontinue}>Sign in to continue</Text>
      <View style={styles.email}>
        <MaterialIcons
          style={styles.user}
          name="alternate-email"
          size={15}
          color={'#0B223F'}
        />
        <Text style={styles.fullNameTxt}>Email</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="enter email address"
        />
      </View>
      <View style={styles.email}>
        <MaterialIcons
          style={styles.user}
          name="lock"
          size={15}
          color={'#0B223F'}
        />
        <Text style={styles.fullNameTxt}>Password*</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="**************"
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  headerOfShoppingCart: {
    height: responsiveScreenHeight(8),
    width: responsiveScreenWidth(100),
    backgroundColor: '#0B223F',

    top: 0,
    zIndex: 5,
  },
  arrow: {
    top: responsiveScreenHeight(3),
    left: responsiveScreenWidth(5),
  },
  shoppingCart: {
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    left: responsiveScreenWidth(7),
    top: responsiveScreenHeight(2),
  },
  welcome: {
    fontSize: responsiveScreenFontSize(5),
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
    letterSpacing: 1,
    marginTop: responsiveScreenHeight(2),
    marginLeft: responsiveScreenWidth(4),
  },
  signintocontinue: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
    marginLeft: responsiveScreenWidth(4),
  },
  email: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(8),
    backgroundColor: '#E2E8F0',
    alignSelf: 'center',
    borderRadius: responsiveScreenWidth(2),
    elevation: 8,
    position: 'relative',
    marginTop: responsiveScreenHeight(2),
  },
  user: {
    position: 'absolute',
    top: responsiveScreenHeight(3.3),
    left: responsiveScreenWidth(2),
    color: '#0B223F',
  },
  fullNameTxt: {
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
    position: 'absolute',
    top: responsiveScreenHeight(1),
    left: responsiveScreenWidth(1),
  },
  input: {
    position: 'absolute',
    top: responsiveScreenHeight(1.8),
    left: responsiveScreenWidth(8),
    fontSize: responsiveScreenFontSize(1.5),
    color: '#0B223F',
  },
});
