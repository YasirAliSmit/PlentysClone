import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import image from '../../assets/PlentysMartMob(1).png';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {clearConfigCache} from 'prettier';

const Product = () => {
  const [uiData, setUiData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(
          `https://api.plentys.pk/api/v1/public/product/search?title=&categoryId=1955&cityId=1&limit=15`,
        );
        const result = await data.json();
        setUiData(result.data);
        console.log(uiData);
      } catch (error) {
        console.log(`error in side banner catch => ${error}`);
      }
    };

    getData();
  }, []);
  return (
    <View style={styles.Product}>
      <View style={styles.ProdContainer}>
        <Image
          source={require('../../assets/PlentysMartMob(1).png')}
          style={styles.images}
        />
        <View style={styles.brandRating}>
          <Text style={styles.brandTxt}>Max</Text>
          <Text style={styles.brandRat}>5.0</Text>
        </View>
        <View style={styles.brandDetails}>
          <Text style={styles.brandDetails}>Apple 14 Pro Max 256GB Black</Text>
        </View>
        <View style={styles.brandPrice}>
          <Text style={styles.brandPrice}>Rs. 20,000</Text>
        </View>
        <View style={styles.ParentBox}>
          <View style={styles.box}>
            <AntDesign
              style={styles.cart}
              color={'#fff'}
              name="hearto"
              size={30}
            />
          </View>
          <View style={styles.box1}>
            <MaterialIcons
              style={styles.cart}
              color={'#fff'}
              name="shopping-cart"
              size={30}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  Product: {
    flex: 1,
    marginBottom: responsiveHeight(10),
  },
  images: {
    width: responsiveWidth(40),
    height: responsiveHeight(30),
    resizeMode: 'contain',
  },
  brandRating: {
    flexDirection: 'row',
    fontFamily: 'Poppins-Bold',
  },
  brandTxt: {
    color: '#0B223F',
    fontSize: responsiveFontSize(3),
    fontFamily: 'Poppins-Bold',
    top: responsiveHeight(1),
  },
  brandRat: {
    color: '#F9C21A',
    marginLeft: responsiveWidth(17),
    top: responsiveHeight(1),
  },
  brandDetails: {
    color: '#0B223F',
    fontSize: responsiveFontSize(1),
    fontFamily: 'Poppins-Light',
    top: responsiveHeight(0.5),
  },
  brandPrice: {
    color: '#0B223F',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Bold',
    top: responsiveHeight(0.5),
  },
  ParentBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveHeight(1),
  },
  box: {
    width: responsiveWidth(15),
    borderRadius: responsiveWidth(2),
    height: responsiveHeight(5),
    backgroundColor: '#E2E8F0',
  },

  box1: {
    width: responsiveWidth(15),
    borderRadius: responsiveWidth(2),
    height: responsiveHeight(5),
    backgroundColor: '#F9C21A',
  },
  ProdContainer: {
    height: responsiveHeight(50),
  },
  ProdContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: responsiveWidth(5),
  },
  cart: {
    alignSelf: 'center',
    marginTop: responsiveHeight(0.5),
  },
});
