import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import React, {useState} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
const Contect = () => {
  const [fullName, setFullName] = useState('');
  const [showNameError, setShowNameError] = useState(false);
  const [email, setEmail] = useState('');

  const [showEmailEror, setShowEmailError] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Ionicons
          name="chevron-back"
          style={styles.arrow}
          size={20}
          color={'#fff'}
          onPress={() => navigation.navigate('UserMenu')}
        />
        <Text style={styles.contact}>Contact Us</Text>
        <Text style={styles.share}>
          Have any questions? We'd love to hear from you.
        </Text>
        <View style={styles.containerChild}>
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
            {showNameError ? (
              <Text style={styles.error}>{nameError}</Text>
            ) : null}
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
            {showEmailEror ? (
              <Text style={styles.error}>{emailError}</Text>
            ) : null}
          </View>
          <View style={styles.comment}>
            <Text style={styles.fullNameTxt}>Comment</Text>
            <TextInput
              style={styles.input}
              placeholder="Type a message"
              value={email}
              onChangeText={setEmail}
            />
            {showEmailEror ? (
              <Text style={styles.error}>{emailError}</Text>
            ) : null}
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Contect;

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(25),
    backgroundColor: '#0B223F',
    position: 'relative',
  },
  contact: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Bold',
    marginTop: responsiveScreenHeight(3),
  },
  share: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Light',
  },
  arrow: {
    marginTop: responsiveScreenHeight(2),
    marginLeft: responsiveScreenWidth(4),
  },
  containerChild: {
    position: 'absolute',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(50),
    backgroundColor: '#fff',
    elevation: 20,
    alignSelf: 'center',
    top: responsiveScreenHeight(18),
    borderRadius: responsiveScreenWidth(2.5),
  },
  fullName: {
    width: responsiveScreenWidth(80),
    height: responsiveScreenHeight(7),
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
  email: {
    width: responsiveScreenWidth(80),
    height: responsiveScreenHeight(7),
    backgroundColor: '#E2E8F0',
    alignSelf: 'center',
    borderRadius: responsiveScreenWidth(2),
    elevation: 8,
    position: 'relative',
    marginTop: responsiveScreenHeight(2),
  },
  comment: {
    width: responsiveScreenWidth(80),
    height: responsiveScreenHeight(12),
    backgroundColor: '#E2E8F0',
    alignSelf: 'center',
    borderRadius: responsiveScreenWidth(2),
    elevation: 8,
    position: 'relative',
    marginTop: responsiveScreenHeight(2),
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
});
