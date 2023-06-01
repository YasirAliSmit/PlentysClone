import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const Fav = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
          <Text style={styles.shoppingCart}>Favourites</Text>
        </View>
      </View>
      <View style={styles.noProductsContainer}>
        <Image
          style={styles.noItemImage}
          source={require('../../assets/Pack.png')}
        />
        <Text style={styles.cartEmtyTxt}>Your Wishlist is empty!</Text>
        <Text style={styles.noProductText}>
          Explore more and shortlist some items
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('BottomNavigation')}
          style={styles.noProductTextBtn}>
          <Text style={styles.noProductTextBtnTxt}>Add Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Fav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  headerOfShoppingCart: {
    height: responsiveScreenHeight(9),
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
    fontSize: responsiveScreenFontSize(4  ),
    color: '#fff',
    left: responsiveScreenWidth(7),
    fontFamily: 'Poppins-Bold',
  },
  noProductsContainer: {flex: 1, alignItems: 'center'},
  noItemImage: {
    width: responsiveScreenWidth(60),
    height: responsiveScreenHeight(40),
    resizeMode: 'contain',
    marginTop: responsiveScreenHeight(5),
  },
  cartEmtyTxt: {
    fontFamily: 'Poppins-Bold',
    color: '#284975',
    fontSize: responsiveScreenFontSize(3),
  },
  noProductText: {
    fontFamily: 'Poppins-Light',
    maxWidth: responsiveScreenWidth(60),
    textAlign: 'center',
    color: '#94A3B8',
  },
  noProductTextBtn: {
    width: responsiveScreenWidth(80),
    height: responsiveScreenHeight(5),
    borderRadius: responsiveScreenWidth(3),
    backgroundColor: '#0B223F',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveScreenHeight(15),
  },
  noProductTextBtnTxt: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    //textAlign: 'center',
    alignItems: 'center',
  },
});
