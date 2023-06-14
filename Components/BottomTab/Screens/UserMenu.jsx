import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';
const UserMenu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#0B223F'} />
      <View style={styles.menuContainer}>
        <Text style={styles.menu}>Menu</Text>
        <Text style={styles.loginTxt}>
          Login to access order datails. order return, tracking order and more
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.loginBtn}>
          <Text style={styles.loginTxtBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={styles.loginBtns}>
          <Text style={styles.loginTxtBtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContent}>
        <TouchableOpacity onPress={() => navigation.navigate('TrackOrder')}>
          <View style={styles.trackContent}>
            <MaterialIcons
              name={'location-pin'}
              style={styles.pin}
              color={'#00D84A'}
              size={30}
            />
            <Text
              onPress={() => navigation.navigate('TrackOrder')}
              style={styles.tranchTxt}>
              Track Order
            </Text>
            <AntDesign
              name={'arrowright'}
              style={styles.left}
              color={'#94A3B8'}
              size={25}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.nextContent}>
          <View style={styles.contectUs}>
            <MaterialIcons
              name={'contacts'}
              style={styles.pin}
              color={'#F9C21A'}
              size={30}
            />
            <Text
              style={styles.tranchTxt}
              onPress={() => navigation.navigate('Contect')}>
              Contect Us
            </Text>
            <AntDesign
              name={'arrowright'}
              style={styles.left}
              color={'#94A3B8'}
              size={25}
            />
          </View>
          <View style={styles.privacy}>
            <MaterialIcons
              name={'policy'}
              style={styles.pin}
              color={'#A0C43C'}
              size={30}
            />
            <Text
              style={styles.tranchTxt}
              onPress={() => navigation.navigate('Privacy')}>
              Privacy & Policy
            </Text>
            <AntDesign
              name={'arrowright'}
              style={styles.left}
              color={'#94A3B8'}
              size={25}
            />
          </View>
          <View style={styles.return}>
            <Ionicons
              name={'return-up-back'}
              style={styles.pin}
              color={'#DB3D3D'}
              size={30}
            />
            <Text
              style={styles.tranchTxt}
              onPress={() => navigation.navigate('Return')}>
              Return Policy
            </Text>
            <AntDesign
              name={'arrowright'}
              style={styles.left}
              color={'#94A3B8'}
              size={25}
            />
          </View>
          <View style={styles.info}>
            <Ionicons
              name={'information-circle'}
              style={styles.pin}
              color={'#DB3D3D'}
              size={30}
            />
            <Text
              style={styles.tranchTxt}
              onPress={() => navigation.navigate('About')}>
              About Us
            </Text>
            <AntDesign
              name={'arrowright'}
              style={styles.left}
              color={'#94A3B8'}
              size={25}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  menuContainer: {
    width: '100%',
    height: responsiveScreenHeight(35),
    backgroundColor: '#0B223F',
    borderBottomLeftRadius: responsiveScreenWidth(5),

    borderBottomRightRadius: responsiveScreenWidth(5),
    position: 'relative',
  },

  menu: {
    fontFamily: 'Poppins-Bold',
    color: '#E2E8F0',
    fontSize: responsiveScreenFontSize(3),
    position: 'absolute',
    top: responsiveScreenHeight(2),
    left: responsiveScreenWidth(4),
  },
  loginTxt: {
    fontFamily: 'Poppins-Bold',
    color: '#E2E8F0',
    fontSize: responsiveScreenFontSize(1.7),
    position: 'absolute',
    top: responsiveScreenHeight(7),
    left: responsiveScreenWidth(4),
    textAlign: 'center',
  },
  loginBtn: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(4),
    borderWidth: 1,
    borderColor: '#009FD1',
    position: 'absolute',
    top: responsiveScreenHeight(15),
    left: responsiveScreenWidth(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtns: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(4),
    borderWidth: 1,
    borderColor: '#009FD1',
    position: 'absolute',
    top: responsiveScreenHeight(20),
    left: responsiveScreenWidth(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTxtBtn: {
    fontFamily: 'Poppins-Bold',
    color: '#E2E8F0',
    fontSize: responsiveScreenFontSize(1.7),
  },
  detailsContent: {
    backgroundColor: '#F8FAFC',
    // elevation: 10,
    // width: responsiveScreenWidth(90),
    // height: responsiveScreenHeight(40),
    // alignSelf: 'center',
    // position: 'relative',
    // top: responsiveScreenHeight(5),
    //borderRadius: responsiveScreenWidth(5),
  },
  trackContent: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(6),
    backgroundColor: '#F8FAFC',
    //elevation: 10,
    //borderRadius: responsiveScreenWidth(5),
    alignSelf: 'center',
    position: 'absolute',
    top: responsiveScreenHeight(7),
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#CBD5E1',
    borderRadius: responsiveScreenWidth(3),
  },
  pin: {
    position: 'absolute',
    left: responsiveScreenWidth(5),
    top: responsiveScreenHeight(1),
  },
  tranchTxt: {
    fontFamily: 'Poppins-Bold',
    color: '#E2E8F0',
    fontSize: responsiveScreenFontSize(2),
    color: '#0B223F',
    top: responsiveScreenHeight(1.5),
    left: responsiveScreenWidth(15),
  },
  left: {
    position: 'absolute',
    left: responsiveScreenWidth(70),
    top: responsiveScreenHeight(1.5),
  },
  nextContent: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(30),
    //backgroundColor: 'red',
    top: responsiveScreenHeight(10),
    alignSelf: 'center',
    borderRadius: responsiveScreenWidth(5),
    // elevation: 20,
    position: 'absolute',
  },
  privacy: {
    backgroundColor: '#fff',
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(6),
    //backgroundColor: 'red',
    top: responsiveScreenHeight(10),
    alignSelf: 'center',
    //borderRadius: responsiveScreenWidth(5),
    // elevation: 20,
    position: 'absolute',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,

    borderColor: '#CBD5E1',
  },
  return: {
    backgroundColor: '#fff',
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(6),
    //backgroundColor: 'red',
    top: responsiveScreenHeight(16),
    alignSelf: 'center',
    //borderRadius: responsiveScreenWidth(5),
    // elevation: 20,
    position: 'absolute',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,

    borderColor: '#CBD5E1',
  },
  info: {
    backgroundColor: '#fff',
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(6),
    //backgroundColor: 'red',
    top: responsiveScreenHeight(22),
    alignSelf: 'center',
    //borderRadius: responsiveScreenWidth(5),
    // elevation: 20,
    position: 'absolute',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,

    borderColor: '#CBD5E1',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  contectUs: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(6),
    backgroundColor: '#fff',
    top: responsiveScreenHeight(4),
    alignSelf: 'center',
    //borderRadius: responsiveScreenWidth(5),
    // elevation: 20,
    position: 'absolute',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,

    borderColor: '#CBD5E1',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
