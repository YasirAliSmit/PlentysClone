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
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {
  festivalEidProducts,
  fetchBadBreathProducts,
} from '../../../redux/AllAction';
import {useEffect, useState} from 'react';
import {
  responsiveScreenFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRamdanDeals} from '../../../redux/Action';
//import {fetchRamdanDeals} from '../../../redux/Action';
//import {useDispatch} from 'react-redux';
import {addToCart} from '../../../redux/AllAction';
import {fetchkitchenCarousel} from '../../../redux/AllAction';
import {fetchbeautyBrandProducts} from '../../../redux/AllAction';
import {useNavigation} from '@react-navigation/native';
import {find} from 'lodash';
import { useCallback } from 'react';
// import {fetchBadBreathProducts} from '../../../redux/AllAction';
const BeautyBrand = ({title, id}) => {
  const cartProducts = useSelector(state => state.main.cartItems);
  const [uiData, setUiData] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(state => state.main.productsCarousel);
  const navigation = useNavigation();
  //console.log('this console for bead brath', products);
  // useEffect(() => {
  //   dispatch(fetchBadBreathProducts(id));
  // }, []);
  // console.log('this id bad breath', id);
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
  const renderProduct = useCallback(({item}) => {
    const beforeDiscout = (item.minPrice * item.promotionProductValue) / 100;
    const afterDiscount = item.minPrice - beforeDiscout;
    const ProductafterDiscountPrice = Math.ceil(afterDiscount);
 
    const searchCriteria = element => element.productId == item.productId;
    const foundElement = find(cartProducts, searchCriteria);
    return (
      <View>
        <View style={styles.Product}>
          <View style={styles.ProdContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {item})}>
              <Image source={{uri: item.imageUrl}} style={styles.images} />
              {item.promotionProductValue === null ? null : (
                <View style={styles.discountBox}>
                  <Text style={styles.discount}>
                    {item.promotionProductValue}%OFF
                  </Text>
                </View>
              )}
              <View style={styles.brandRating}>
                <Text style={styles.brandTxt}>{item.brand}</Text>
                {item.avgRating ? (
                  <Text style={styles.brandRat}>
                    <Entypo
                      name={'star'}
                      color={'#FA9E15'}
                      size={responsiveScreenFontSize(2)}
                    />
                    {item.avgRating}
                  </Text>
                ) : null}
              </View>
            </TouchableOpacity>
            <View style={styles.brandDetails}>
              <Text style={styles.brandDetails}>{item.title}</Text>
            </View>
            <View style={styles.brandPrice}>
              <Text style={styles.brandPrice}>
                Rs. {ProductafterDiscountPrice}
              </Text>

              {item.promotionProductValue === null ? null : (
                <Text style={styles.BeforeDiscountbrandPrice}>
                  {' '}
                  {item.minPrice} PKR
                </Text>
              )}
            </View>
            <View style={styles.ParentBox}>
              <TouchableOpacity>
                <View style={styles.box}>
                  <AntDesign
                    style={styles.cart}
                    color={'#fff'}
                    name="hearto"
                    size={20}
                    onPress={() => navigation.navigate('Login')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleAddToCart(item)}>
                <View
                  style={{
                    width: responsiveWidth(15),
                    borderRadius: responsiveWidth(2),
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
      </View>
    );
  },[products])
  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      horizontal
      showsHorizontalScrollIndicator={false}
      //keyExtractor={item => item.id.toString()}
    />
  );
};

export default React.memo(BeautyBrand);

const styles = StyleSheet.create({
  Product: {
    flex: 1,
    marginBottom: responsiveScreenHeight(2.5),
    marginHorizontal: responsiveScreenWidth(2.5),
  },
  images: {
    width: responsiveWidth(40),
    height: responsiveHeight(30),
    resizeMode: 'contain',
    position: 'relative',
  },
  brandRating: {
    flexDirection: 'row',
    fontFamily: 'Poppins-Bold',
  },
  brandTxt: {
    color: '#0B223F',
    fontSize: responsiveScreenFontSize(2),
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
    flexDirection: 'row',
  },
  ParentBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveScreenHeight(0),
  },
  box: {
    width: responsiveWidth(15),
    borderRadius: responsiveWidth(2),
    height: responsiveScreenHeight(4),
    backgroundColor: '#E2E8F0',
  },

  box1: {
    width: responsiveWidth(15),
    borderRadius: responsiveWidth(2),
    height: responsiveScreenHeight(4),
    backgroundColor: '#F9C21A',
  },
  ProdContainer: {
    height: responsiveHeight(50),
    elevation: 10,
    backgroundColor: '#F8FAFC',
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
  //discout csss start i also apply images to position relative
  discountBox: {
    position: 'absolute',
    backgroundColor: '#DB3D3D',
    width: responsiveScreenWidth(10),
    height: responsiveScreenHeight(2),
    top: responsiveScreenHeight(2),
    borderTopRightRadius: responsiveScreenWidth(2),
    borderBottomRightRadius: responsiveScreenWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  discount: {
    color: '#fff',
    fontSize: responsiveScreenFontSize(1),
  },
  BeforeDiscountbrandPrice: {
    color: '#94A3B8',
    fontSize: responsiveScreenFontSize(1.5),
    marginTop: responsiveScreenHeight(1),
    marginLeft: responsiveScreenHeight(1),
    textDecorationLine: 'line-through',
    //color: 'red',
  },

  //discount css end
});
