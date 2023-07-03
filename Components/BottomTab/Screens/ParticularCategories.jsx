import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
//import {addToCart} from '../../../redux/Action';
import {find} from 'lodash';
import image from '../../assets/PlentysMartMob(1).png';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {useEffect, useState} from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {addToCart, getAllCategory} from '../../../redux/AllAction';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {getPerticularProduct} from '../../../redux/AllAction';
import {useNavigation} from '@react-navigation/native';
import {groupBy} from 'lodash';
import {fetchPerticularProduct} from '../../../redux/AllAction';
import { useCallback } from 'react';
//import {find} from 'lodash';
const ParticularCategories = ({route}) => {
  const particularCategories = useSelector(state => state.main.categories);
  //console.log(particularCategories);
  const cartProducts = useSelector(state => state.main.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerticularProduct());
  }, [dispatch]);
  const navigation = useNavigation();
  const products = useSelector(state => state.main.allCategorys);
  const {name, childId, description, item, categoriesOfProduct} = route.params;
  //console.log(childId);
  const result = products[item.parentId];
  const groupedItems = groupBy(particularCategories, 'categoryId');
  const findData = find(result, {name});
  const findDatas = find(result, 'parentId');
  useEffect(() => {
    dispatch(fetchPerticularProduct(childId));
  }, []);
  const renderItem = useCallback(({item}) => {
    const searchCriteria = element => element.productId == item.productId;
    const foundElement = find(cartProducts, searchCriteria);
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
          </TouchableOpacity>
          <View style={styles.brandPrice}>
            <Text style={styles.brandPrice}>Rs. {item.minPrice}</Text>
          </View>
          <View style={styles.ParentBox}>
            <TouchableOpacity>
              <View style={styles.box}>
                <AntDesign
                  style={styles.cart}
                  color={'#fff'}
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
  },[particularCategories])
  function topProductList(item) {
    dispatch(fetchPerticularProduct(item.childId));
  }
  return (
    <View style={{flex: 1}}>
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
          <Text style={styles.shoppingCart}>Categories</Text>

          <TouchableOpacity style={styles.arrowup}>
            <AntDesign name="arrowup" size={20} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.upDown}>
            <AntDesign name="arrowdown" size={20} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              name="filter"
              style={styles.filter}
              size={30}
              color={'#fff'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.categoriesView}>
        <Text style={styles.categoriesName}>{name}</Text>
        <FlatList
          data={categoriesOfProduct}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View>
                <Text
                  onPress={() => topProductList(item)}
                  style={styles.middleScroll}>
                  {item.name}
                </Text>
              </View>
            );
          }}
        />
        <FlatList
          data={particularCategories}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default React.memo(ParticularCategories);

const styles = StyleSheet.create({
  headerOfShoppingCart: {
    height: responsiveScreenHeight(9),
    width: responsiveScreenWidth(100),
    backgroundColor: '#0B223F',

    top: 0,
    zIndex: 5,
  },
  arrow: {
    top: responsiveScreenHeight(2.5),
    left: responsiveScreenWidth(5),
  },
  shoppingCart: {
    marginTop: responsiveScreenHeight(1),
    fontSize: responsiveScreenFontSize(4),
    color: '#fff',
    left: responsiveScreenWidth(7),
    fontFamily: 'Poppins-Bold',
  },
  filter: {
    top: responsiveScreenHeight(2),
    left: responsiveScreenWidth(25),
  },
  upDown: {
    top: responsiveScreenHeight(2.5),
    left: responsiveScreenWidth(20),
  },
  arrowup: {
    top: responsiveScreenHeight(2),
    left: responsiveScreenWidth(22),
  },
  categoriesName: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(2),
    color: '#305586',
    marginTop: responsiveScreenHeight(1),
    marginLeft: responsiveScreenWidth(3),
  },
  categoriesView: {
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    // borderTopWidth: 0,
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
    // borderColor: 'transparent',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
    // overflow: '',
  },
  Product: {
    flex: 1,
    marginBottom: responsiveScreenHeight(2.5),
    marginHorizontal: responsiveScreenWidth(2),
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
    //padding: 10,
    padding: responsiveScreenWidth(2),
    borderRadius: responsiveScreenWidth(5),
  },
  cart: {
    alignSelf: 'center',
    marginTop: responsiveScreenHeight(0.5),
  },
  middleScroll: {
    color: '#284975',
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: 'Poppins-Bold',
    marginHorizontal: responsiveScreenWidth(4),
  },
});
