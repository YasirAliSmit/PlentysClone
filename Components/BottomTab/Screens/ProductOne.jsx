import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import image from '../../assets/PlentysMartMob(1).png';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useEffect, useState} from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {find} from 'lodash';
import {addToCart} from '../../../redux/AllAction';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../../redux/Action';
import {fetchNewArrivals} from '../../../redux/Action';
import {useNavigation} from '@react-navigation/native';
import {addToFav} from '../../../redux/AllAction';
import { useCallback } from 'react';
const Product = () => {
  const [uiData, setUiData] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [quantity, setQuantiy] = useState(1);
  const {newArrivals} = useSelector(({main}) => main);
  const cartProducts = useSelector(state => state.main.cartItems);
  const WishList = useSelector(state => state.main.WishList);

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
  const handleAddToCart = item => {
    dispatch(
      addToCart({
        imageUrl: item.imageUrl,
        brand: item.brand,
        title: item.title,
        minPrice: item.minPrice,
        purchaseLimit: item.purchaseLimit,
        productId: item.productId,
        quantity: 1,
      }),
    );
  };
  const renderProduct = useCallback(({item}) => {
    const searchCriteria = element => element.productId == item.productId;
    const foundElement = find(cartProducts, searchCriteria);
    const searchWishListProducts = element =>
      element.productId == item.productId;
    const foundWishList = find(WishList, searchWishListProducts);
    return (
      <View style={styles.Product}>
        <View style={styles.ProdContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {item})}>
            <Image source={{uri: item.imageUrl}} style={styles.images} />
            <View style={styles.brandRating}>
              <Text style={styles.brandTxt}>{item.brand}</Text>
            </View>
            <View style={styles.brandDetails}>
              <Text style={styles.brandDetails}>{item.title}</Text>
            </View>
            <View style={styles.brandPrice}>
              <Text style={styles.brandPrice}>Rs. {item.minPrice}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.ParentBox}>
            <TouchableOpacity onPress={() => handleAddToFav(item)}>
              <View style={styles.box}>
                <AntDesign
                  style={styles.cart}
                  color={foundWishList ? 'red' : '#fff'}
                  // name="hearto"
                  name="hearto"
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
                  backgroundColor: foundElement ? '#22CB5C' : '#F9C21A',
                }}>
                <MaterialIcons //foundElement
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
  },[newArrivals])
  return (
    <FlatList
      data={newArrivals}
      renderItem={renderProduct}
      horizontal
      showsHorizontalScrollIndicator={false}
      //keyExtractor={item => item.id.toString()}
    />
  );
};

export default React.memo(Product);

const styles = StyleSheet.create({
  Product: {
    flex: 1,
    marginBottom: responsiveScreenHeight(2.5),
    marginHorizontal: responsiveScreenWidth(2.5),
    maxWidth: 200,
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  images: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(30),
    resizeMode: 'contain',
    maxWidth: 200,
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
    marginLeft: responsiveScreenWidth(17),
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
    padding: 10,
    borderRadius: responsiveScreenWidth(5),
  },
  cart: {
    alignSelf: 'center',
    marginTop: responsiveScreenHeight(0.5),
  },
});
