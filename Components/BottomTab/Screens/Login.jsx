import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
//import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import {TouchableOpacity, StatusBar} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
import {Checkbox} from 'react-native-paper';
import axios from 'axios';
import {useState} from 'react';
import {check} from 'prettier';
import {result} from 'lodash';
import {sha384} from 'js-sha512';
const Login = () => {
  const navigation = useNavigation();
  const [checkBox, setCheckBox] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showError, setShowError] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const resultOfHash = sha384(password);
  const handleAddUser = () => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      password.length > 6
    ) {
      console.log('Email is Correct ');
      console.log('Password is Correct');
      setShowError(false);
      const userData = {
        email: email,
        password: resultOfHash,
      };
      axios
        .post(
          'https://testing.api.plentyz.pk/api/v1/public/user/login/',
          userData,
        )
        .then(response => {
          // Handle success response
          console.log('API response:', response.data);
        })
        .catch(error => {
          // Handle error
          console.error('API error:', error);
        });
    } else {
      setShowError(true);
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError('Wrong Email. Kindly enter a valid email address.');
        console.log('Wrong Email');
      }
      if (password.length <= 6) {
        setPasswordError('Password length should be greater than 6..');
        console.log('Password Error');
      }
    }

    console.log(resultOfHash);
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
          value={email}
          onChangeText={setEmail}
        />
        {showError ? <Text style={styles.error}>{emailError}</Text> : null}
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
        {showError ? <Text style={styles.error}>{passwordError}</Text> : null}
      </View>
      <View style={styles.checkBoxContainer}>
        <View style={styles.checkBox}>
          <Checkbox.Item
            status={checkBox ? 'checked' : 'unchecked'}
            onPress={() => setCheckBox(() => !checkBox)}
          />
        </View>
        <Text style={styles.remember}>Remember Me!</Text>
        <Text style={styles.password}>Forgetten password?</Text>
      </View>
      <View style={styles.btnLogContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => handleAddUser()}>
          <Text style={styles.btnTxt}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.gmail}>
          <FontAwesome name="google-plus-circle" color={'red'} size={25} />
        </View>
        <View style={styles.faceBook}>
          <Entypo name="facebook-with-circle" color={'#0B223F'} size={25} />
        </View>
      </View>
      <View style={styles.footerTxtContainer}>
        <Text style={styles.newToPlentys}>New to Plentys?</Text>
        <Text style={styles.register}>Register</Text>
      </View>
    </View>
  );
};

export default React.memo(Login);

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
  checkBox: {
    width: responsiveScreenWidth(10),
    position: 'absolute',
  },
  checkBoxContainer: {
    position: 'relative',
  },
  remember: {
    position: 'absolute',
    top: responsiveScreenHeight(1.5),
    left: responsiveScreenWidth(12),
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
  },
  password: {
    position: 'absolute',
    top: responsiveScreenHeight(1.5),
    left: responsiveScreenWidth(60),
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
  },
  btn: {
    backgroundColor: '#0B223F',
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(5),
    borderRadius: responsiveScreenWidth(6),
    position: 'absolute',
    top: responsiveScreenHeight(10),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogContainer: {
    position: 'relative',
  },
  btnTxt: {
    fontFamily: 'Poppins-Light',
    color: '#fff',
    fontSize: responsiveScreenFontSize(2),
  },
  gmail: {
    width: responsiveScreenWidth(15),
    height: responsiveScreenHeight(4),
    borderWidth: 0.5,
    borderColor: 'black',
    position: 'absolute',
    top: responsiveScreenHeight(16),
    left: responsiveScreenWidth(33),
    borderRadius: responsiveScreenWidth(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceBook: {
    borderRadius: responsiveScreenWidth(1),
    width: responsiveScreenWidth(15),
    height: responsiveScreenHeight(4),
    borderWidth: 0.5,
    borderColor: 'black',
    position: 'absolute',
    top: responsiveScreenHeight(16),
    left: responsiveScreenWidth(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTxtContainer: {
    // alignSelf: 'flex-end',
    position: 'absolute',
    top: responsiveScreenHeight(85),
    // left: responsiveScreenWidth(100),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  newToPlentys: {
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
    marginRight: responsiveScreenWidth(2),
    fontSize: responsiveScreenFontSize(1.5),
  },
  register: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
    fontWeight: 'bold',
  },
  eyes: {
    position: 'absolute',
    top: responsiveScreenHeight(4),
    right: responsiveScreenWidth(2),
  },
  error: {
    color: 'red',
    position: 'absolute',
    top: responsiveScreenHeight(6),
    left: responsiveScreenWidth(2),
    fontSize: responsiveScreenFontSize(1),
  },
});
