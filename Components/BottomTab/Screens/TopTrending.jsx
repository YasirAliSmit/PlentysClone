import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {fetchTopTrandProductReq} from '../../../redux/Action';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {
  responsiveScreenFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {addToCart} from '../../../redux/Action';
import {useNavigation} from '@react-navigation/native';
import {addToFav} from '../../../redux/AllAction';
import {find} from 'lodash';
const TopTrending = () => {
  const cartProducts = useSelector(state => state.main.cartItems);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleAddToCart = item => {
    const productDetails = {
      imageUrl: item.imageUrl,
      brand: item.brand,
      title: item.title,
      minPrice: item.minPrice,
      purchaseLimit: item.purchaseLimit,
      productId: item.productId,
      quantity: 1,
    };
    dispatch(addToCart(productDetails));
  };
  const topProduct = useSelector(state => state.main.topTranding);
  const WishList = useSelector(state => state.main.WishList);
  const numColumns = 2;

  const renderItem = ({item}) => {
    const searchCriteria = element => element.productId == item.productId;
    const foundElement = find(cartProducts, searchCriteria);
    const beforeDiscout = (item.minPrice * item.promotionProductValue) / 100;
    const afterDiscount = item.minPrice - beforeDiscout;
    const ProductafterDiscountPrice = Math.ceil(afterDiscount);
    const searchWishListProducts = element =>
      element.productId == item.productId;
    const foundWishList = find(WishList, searchWishListProducts);
    const handleAddToFav = item => {
      const productDetails = {
        imageUrl: item.imageUrl,
        brand: item.brand,
        title: item.title,
        minPrice: item.minPrice,
        purchaseLimit: item.purchaseLimit,
        productId: item.productId,
      };
      dispatch(addToFav(productDetails));
    };

    return (
      <View style={styles.Product}>
        <View style={styles.ProdContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {item})}>
            <Image source={{uri: item.imageUrl}} style={styles.images} />
            <View style={styles.brandRating}>
              <Text style={styles.brandTxt}>{item.brand}</Text>
              <Text style={styles.brandRat}>
                {' '}
                <Entypo
                  name={'star'}
                  color={'#FA9E15'}
                  size={responsiveScreenFontSize(2)}
                />
                {item.avgRating}
              </Text>
            </View>
            <View style={styles.brandDetails}>
              <Text style={styles.brandDetails}>{item.title}</Text>
            </View>
            <View style={styles.brandPrice}>
              <Text style={styles.brandPrice}>Rs. {item.minPrice}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.ParentBox}>
            <TouchableOpacity>
              <View style={styles.box}>
                <AntDesign
                  style={styles.cart}
                  color={foundWishList ? 'red' : '#fff'}
                  name="hearto"
                  onPress={() => handleAddToFav(item)}
                  size={20}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAddToCart(item)}>
              <View
                style={{
                  width: responsiveScreenWidth(15),
                  borderRadius: responsiveScreenWidth(2),
                  height: responsiveScreenHeight(4),
                  backgroundColor: foundElement ? '#00D84A' : '#F9C21A',
                }}>
                <MaterialIcons
                  style={styles.cart}
                  color={'#0B223F'}
                  name="shopping-cart"
                  size={20}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return <FlatList data={topProduct} renderItem={renderItem} numColumns={2} />;
};

export default TopTrending;

const styles = StyleSheet.create({
  Product: {
    flex: 1,
    marginBottom: responsiveScreenHeight(2.5),
    marginHorizontal: responsiveScreenWidth(1),
    // maxWidth: 160,
    maxWidth: responsiveScreenWidth(46),
    resizeMode: 'contain',
  },
  images: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(30),
    resizeMode: 'contain',
    //maxWidth: 200,
  },
  brandRating: {
    flexDirection: 'row',
    fontFamily: 'Poppins-Bold',
  },
  brandTxt: {
    color: '#0B223F',
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    top: responsiveScreenHeight(1),
  },
  brandRat: {
    color: '#F9C21A',
    marginLeft: responsiveScreenWidth(10),
    top: responsiveScreenHeight(1),
  },
  brandDetails: {
    color: '#0B223F',
    fontSize: responsiveScreenFontSize(1),
    fontFamily: 'Poppins-Light',
    top: responsiveScreenHeight(0.5),

    width: responsiveScreenWidth(40),
  },
  brandPrice: {
    color: '#0B223F',
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    top: responsiveScreenHeight(0.5),
    marginBottom: responsiveScreenHeight(1),
  },
  ParentBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveScreenHeight(0),
  },
  box: {
    width: responsiveScreenWidth(15),
    borderRadius: responsiveScreenWidth(2),
    height: responsiveScreenHeight(4),
    backgroundColor: '#E2E8F0',
  },

  box1: {
    width: responsiveScreenWidth(15),
    borderRadius: responsiveScreenWidth(2),
    height: responsiveScreenHeight(4),
    backgroundColor: '#F9C21A',
  },
  ProdContainer: {
    height: responsiveScreenHeight(50),
    elevation: 10,
    backgroundColor: '#F8FAFC',
  },
  ProdContainer: {
    backgroundColor: '#fff',
    //padding: 10,
    padding: responsiveScreenWidth(2),
    borderRadius: responsiveScreenWidth(5),
  },
  cart: {
    alignSelf: 'center',
    marginTop: responsiveScreenHeight(0.5),
  },
});
