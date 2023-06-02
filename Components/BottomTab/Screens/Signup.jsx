import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {TouchableOpacity, StatusBar} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/dist/Feather';

const Signup = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [confimShowPassword, setConfimShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfimShowPassword(!confimShowPassword);
  };
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
          <Text style={styles.shoppingCart}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.fullName}>
        <FontAwesome
          style={styles.user}
          name="user-circle-o"
          size={15}
          color={'#0B223F'}
        />
        <Text style={styles.fullNameTxt}>Full Name*</Text>
        <TextInput style={styles.input} placeholder="Full Name" />
      </View>
      <View style={styles.email}>
        <MaterialIcons
          style={styles.user}
          name="alternate-email"
          size={15}
          color={'#0B223F'}
        />
        <Text style={styles.fullNameTxt}>Email*</Text>
        <TextInput
          style={styles.input}
          placeholder="enter your email address"
        />
      </View>
      <View style={styles.email}>
        {/* <MaterialIcons
          style={styles.user}
          name="alternate-email"
          size={15}
          color={'#0B223F'}
        /> */}
        <Text style={styles.user}>+92</Text>
        <Text style={styles.fullNameTxt}>Phone*</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="3**************"
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
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyes}
          onPress={togglePasswordVisibility}>
          <Feather
            name={showPassword ? 'eye' : 'eye-off'}
            color={'black'}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.email}>
        <MaterialIcons
          style={styles.user}
          name="lock"
          size={15}
          color={'#0B223F'}
        />
        <Text style={styles.fullNameTxt}>Cofirm Password*</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="**************"
          value={confirmPassword}
          secureTextEntry={!confimShowPassword}
          // secureTextEntry={!showPassword}
          // onChangeText={console.log(confirmPassword)}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyes}
          onPress={toggleConfirmPasswordVisibility}>
          <Feather
            name={confimShowPassword ? 'eye' : 'eye-off'}
            color={'black'}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.email}>
        <AntDesign
          style={styles.user}
          name="codepen"
          size={15}
          color={'#0B223F'}
        />
        <Text style={styles.fullNameTxt}>Referral Code</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="enter refferal code"
        />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.regTxt}>
        By clicking registration, I agree to Plentys Terms Of Use and Privacy
        Policy
      </Text>
      <Text style={styles.priTxtpolicy}>Privacy Policy Terms Of Use</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  headerOfShoppingCart: {
    height: responsiveScreenHeight(8),
    width: responsiveScreenWidth(100),
    backgroundColor: '#0B223F',

    top: 0,
    zIndex: 5,
  },
  arrow: {
    top: responsiveScreenHeight(2),
    left: responsiveScreenWidth(5),
  },
  shoppingCart: {
    fontSize: responsiveScreenFontSize(4),
    color: '#fff',
    left: responsiveScreenWidth(7),
    fontFamily: 'Poppins-Light',
  },
  fullName: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(7),
    backgroundColor: '#E2E8F0',
    alignSelf: 'center',
    borderRadius: responsiveScreenWidth(2),
    elevation: 8,
    position: 'relative',
    marginTop: responsiveScreenHeight(2),
  },
  email: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(7),
    backgroundColor: '#E2E8F0',
    alignSelf: 'center',
    borderRadius: responsiveScreenWidth(2),
    elevation: 8,
    position: 'relative',
    marginTop: responsiveScreenHeight(2),
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
  user: {
    position: 'absolute',
    top: responsiveScreenHeight(3.3),
    left: responsiveScreenWidth(2),
    color: '#0B223F',
  },
  btn: {
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(5),
    backgroundColor: '#0B223F',
    alignSelf: 'center',
    borderRadius: responsiveScreenWidth(7),
    marginTop: responsiveScreenHeight(3),
    justifyContent: 'center',
    //alignItems: 'center',
  },
  btnTxt: {
    fontSize: responsiveScreenFontSize(2),
    color: '#fff',
    left: responsiveScreenWidth(7),
    fontFamily: 'Poppins-Light',
    marginLeft: responsiveScreenWidth(10),
  },
  regTxt: {
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(1.5),
    marginTop: responsiveScreenHeight(1),
  },
  priTxtpolicy: {
    fontFamily: 'Poppins-Bold',
    color: '#0B223F',
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(1.5),
    marginTop: responsiveScreenHeight(1),
  },
  eyes: {
    position: 'absolute',
    top: responsiveScreenHeight(4),
    right: responsiveScreenWidth(2),
  },
});
