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
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [referalCode, setReferralCode] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showError, setShowError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showNameError, setShowNameError] = useState(false);
  const [showEmailEror, setShowEmailError] = useState(false);
  const [showNumberError, setShowNumberError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showConfirmPasswordError, setShowConfirmPasswordError] =
    useState(false);
  //const [password,setPassword] = useState('')
  // console.log(referalCode);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfimShowPassword(!confimShowPassword);
  };
  const handleSignIn = () => {

    if (fullName.length >= 5) {
      setShowNameError(false);
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setShowEmailError(false);
        if (/^(\+92|0)?3[0-4|6-9]\d{8}$/.test(number)) {
          setShowNumberError(false);
          if (password.length >= 5) {
            setShowPasswordError(false);
            if (password == confirmPassword) {
            } else {
              setConfirmPasswordError('Password Should Be Same');
              setShowConfirmPasswordError(true);
            }
          } else {
            setPasswordError('Password Length Should be grater than 5');
            setShowPasswordError(true);
          }
        } else {
          setPhoneNumber('Kindly Enter Valid Number');
          setShowNumberError(true);
        }
      } else {
        setEmailError('Kindly Enter Valid Email');
        setShowEmailError(true);
      }
    } else {
      setNameError('Name Length Should Be Grater than 5');
      setShowNameError(true);
    }
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
        <TextInput
          style={styles.input}
          value={fullName}
          placeholder="Full Name"
          onChangeText={setFullName}
        />
        {showNameError ? <Text style={styles.error}>{nameError}</Text> : null}
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
          value={email}
          onChangeText={setEmail}
        />
        {showEmailEror ? <Text style={styles.error}>{emailError}</Text> : null}
      </View>
      <View style={styles.email}>
        <Text style={styles.user}>+92</Text>
        <Text style={styles.fullNameTxt}>Phone*</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="3**************"
          value={number}
          onChangeText={setNumber}
        />
        {showNumberError ? (
          <Text style={styles.error}>{phoneNumber}</Text>
        ) : null}
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
        {showPasswordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}
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
        {showConfirmPasswordError ? (
          <Text style={styles.error}>{confirmPasswordError}</Text>
        ) : null}
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
          onChangeText={setReferralCode}
          value={referalCode}
        />
      </View>
      <TouchableOpacity onPress={() => handleSignIn()} style={styles.btn}>
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
  error: {
    color: 'red',
    position: 'absolute',
    top: responsiveScreenHeight(5.5),
    left: responsiveScreenWidth(2),
    fontSize: responsiveScreenFontSize(1),
  },
});
