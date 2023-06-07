import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {BottomSheet} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {clearCartData} from '../../../redux/AllAction';
import _ from 'lodash';
import {removeFromCart} from '../../../redux/AllAction';
import {updateProductQuantity} from '../../../redux/AllAction';
const Cart = () => {
  //console.log(price);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [price, setPrice] = useState(0);
  const product = useSelector(state => state.main.cartItems);
  ///console.log(product);
  const clearCart = () => {
    dispatch(clearCartData());
    setPrice(0);
  };
  const handlePlusButton = (productId, quantity) => {
    dispatch(updateProductQuantity(productId, quantity + 1));
  };
  const handleMinusButton = (productId, quantity) => {
    if (quantity > 1) {
      // Decrease the quantity
      dispatch(updateProductQuantity(productId, quantity - 1));
    }
    //dispatch(updateProductQuantity(productId, quantity - 1));
  };
  const renderItem = ({item}) => {
    const handleDelete = id => {
      dispatch(removeFromCart(id));
    };
    return (
      <View
        style={{
          position: 'relative',

          height: responsiveScreenHeight(20),
        }}>
        <View style={styles.parent} key={item.brandId}>
          <View style={styles.ProductImageView}>
            <Image style={styles.ProductImage} source={{uri: item.imageUrl}} />
          </View>
          <View style={styles.brandTxt}>
            <Text style={styles.brandHeading}>
              {item.brand} {item.purchaseLimit}
            </Text>
            <Text style={styles.brandTitle}>{item.title}</Text>
            <Text style={styles.brandRs}>Rs. {item.minPrice}</Text>
          </View>
          <View style={styles.binheart}>
            <AntDesign
              style={styles.bin}
              name={'delete'}
              color="black"
              size={20}
              onPress={() => handleDelete(item.productId)}
            />
            <AntDesign
              style={styles.heart}
              name={'hearto'}
              color={'black'}
              size={20}
            />
          </View>
          <View style={styles.plusandmin}>
            <TouchableOpacity
              onPress={() => handlePlusButton(item.productId, item.quantity)}
              disabled={item.quantity === item.purchaseLimit}>
              <AntDesign
                style={styles.plus}
                name={'plus'}
                //color={'black'}
                color={item.quantity === item.purchaseLimit ? 'gray' : 'black'}
                size={20}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.count}>
              <Text>{item.quantity}</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={item.quantity === 1}>
              <AntDesign
                onPress={() => handleMinusButton(item.productId, item.quantity)}
                style={styles.min}
                name={'minus'}
                // color={'black'}
                color={item.quantity === 1 ? 'gray' : 'black'}
                size={20}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
                onPress={() =>
                  handleMinusButton(item.productId, item.quantity)
                  
                }> */}
            {/* <TouchableOpacity
                onPress={() => handleMinusButton(item.productId, item.quantity)}
                disabled={item.quantity === 1}>
                <AntDesign
                  style={styles.heart}
                  name={'minus'}
                  // color={'black'}
                  color={item.quantity === 1 ? 'gray' : 'black'}
                  size={20}
                />
              </TouchableOpacity> */}
          </View>
        </View>
      </View>
    );
  };
  useEffect(() => {
    const totalCostOfCart = product.reduce((total, product) => {
      return total + product.minPrice * product.quantity;
    }, 0);
    ///console.log(totalCostOfCart, 'totalCostOfCart');
    setPrice(totalCostOfCart);
  });

  return (
    <View style={styles.container}>
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
          <Text style={styles.shoppingCart}>Shopping Cart</Text>
        </View>
      </View>
      {product.length == 0 ? (
        <View style={styles.noProductsContainer}>
          <Image
            style={styles.noItemImage}
            source={require('../../assets/EmptyCard.png')}
          />
          <Text style={styles.cartEmtyTxt}>Your cart is empty!</Text>
          <Text style={styles.noProductText}>
            Looks like you haven’t made your choice yet...
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('BottomNavigation')}
            style={styles.noProductTextBtn}>
            <Text style={styles.noProductTextBtnTxt}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.lenghtoftxt}>
            <Text style={styles.lengthTxt}>
              A total of {product.length} items
            </Text>
            <TouchableOpacity>
              <Text onPress={() => clearCart()} style={styles.clearTxt}>
                Clear All
              </Text>
            </TouchableOpacity>
          </View>
          {product.length === 0 ? (
            <Text>Your Cart is Empty</Text>
          ) : (
            <FlatList data={product} renderItem={renderItem} />
          )}

          <View style={styles.footer}>
            <View>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.totalPrice}>PKR:{price}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.nextBtn}>
                <Text style={styles.nextBtnTxt}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  headerOfShoppingCart: {
    height: responsiveScreenHeight(9),
    width: responsiveScreenWidth(100),
    backgroundColor: '#0B223F',

    top: 0,
    zIndex: 5,
  },
  footer: {
    flexDirection: 'row',
    // height: responsiveScreenHeight(15),
    height: responsiveScreenHeight(10),
    width: responsiveScreenWidth(100),
    backgroundColor: '#0B223F',
    // top: responsiveScreenHeight(5),
    top: responsiveScreenHeight(1),
    borderTopLeftRadius: responsiveScreenHeight(1),
    borderTopRightRadius: responsiveScreenHeight(1),
  },
  arrow: {
    top: responsiveScreenHeight(2),
    left: responsiveScreenWidth(5),
  },
  shoppingCart: {
    fontSize: responsiveScreenFontSize(5),
    color: '#fff',
    left: responsiveScreenWidth(7),
    fontFamily: 'Poppins-Light',
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    width: responsiveScreenWidth(100),
    marginTop: responsiveScreenHeight(-2),
  },
  ProductImage: {
    margin: responsiveScreenWidth(0),
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(30),
    resizeMode: 'contain',

    marginLeft: responsiveScreenWidth(5),
    // borderRadius: responsiveScreenWidth(2),
  },
  ProductImageView: {
    marginTop: responsiveScreenHeight(-6),
    marginLeft: responsiveScreenWidth(2),
    marginHorizontal: responsiveScreenWidth(2),
  },
  brandTxt: {
    // marginTop: 20,
    //marginTop: responsiveScreenHeight(10),
  },
  brandHeading: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#0B223F',
    fontWeight: '600',
    marginVertical: responsiveScreenHeight(2),
  },
  brandTitle: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
    // fontWeight: '600',
    maxWidth: responsiveScreenWidth(38),
  },
  brandRs: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#0B223F',
    fontWeight: '600',
    marginTop: responsiveScreenHeight(1),
  },
  bin: {
    marginTop: responsiveScreenHeight(10),
    marginLeft: responsiveScreenWidth(2),
  },
  binheart: {
    // marginTop: responsiveScreenHeight(-7),
    // marginLeft: responsiveScreenWidth(5),
    position: 'absolute',
    top: responsiveScreenHeight(-7),
    right: 0,
    //backgroundColor: 'red',
    marginRight: responsiveScreenWidth(5),
    //height: responsiveScreenHeight(10),
  },
  heart: {
    marginTop: responsiveScreenHeight(3),
    marginLeft: responsiveScreenWidth(2),
  },
  plusandmin: {
    flexDirection: 'row',
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(3),
    borderWidth: 1,
    borderColor: '#E2E8F0',
    position: 'relative',
    backgroundColor: '#E2E8F0',
    top: responsiveScreenHeight(13),
    left: responsiveScreenWidth(4),
    borderRadius: responsiveScreenWidth(2),
  },
  plus: {
    // marginTop: responsiveScreenHeight(3),
    // marginLeft: responsiveScreenWidth(-5),
    position: 'absolute',
    //backgroundColor: 'black',
    //borderSize:1,
    //right: 0,
    top: responsiveScreenHeight(0.5),
  },
  min: {
    position: 'absolute',
    //backgroundColor: 'red',
    //left: -5,
    left: responsiveScreenWidth(13),
    top: responsiveScreenHeight(0.5),
  },

  total: {
    color: '#fff',
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Light',
    marginTop: responsiveScreenHeight(2),
    marginLeft: responsiveScreenWidth(3),
  },
  totalPrice: {
    color: '#fff',
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Light',
    marginTop: responsiveScreenHeight(0),
    marginLeft: responsiveScreenWidth(3),
  },
  count: {
    // marginTop: responsiveScreenHeight(3),
    // marginLeft: responsiveScreenWidth(2),
    position: 'absolute',
    top: responsiveScreenHeight(0.5),
    left: responsiveScreenWidth(8),
  },
  nextBtn: {
    width: responsiveScreenWidth(65),
    height: responsiveScreenHeight(5),
    backgroundColor: '#F9C21A',
    borderRadius: responsiveScreenWidth(2),
    marginTop: responsiveScreenHeight(3),
    marginLeft: responsiveScreenWidth(5),
  },
  nextBtnTxt: {
    textAlign: 'center',
    verticalAlign: 'auto',
    fontFamily: 'Poppins-Light',
    fontSize: responsiveScreenFontSize(2.5),
    color: '#fff',
    marginTop: responsiveScreenHeight(1),
    fontWeight: 'bold',
  },
  lenghtoftxt: {
    flexDirection: 'row',
    marginVertical: responsiveScreenHeight(2),
    //backgroundColor: 'red',
  },
  lengthTxt: {
    fontFamily: 'Poppins-Ligth',
    fontSize: responsiveScreenFontSize(2),
    color: '#0B223F',
    letterSpacing: 1,
    marginLeft: responsiveScreenWidth(2),
  },
  clearTxt: {
    fontFamily: 'Poppins-Ligth',
    fontSize: responsiveScreenFontSize(2),
    color: '#0B223F',
    marginLeft: responsiveScreenWidth(35),
    letterSpacing: 1,
  },
  noItemImage: {
    width: responsiveScreenWidth(60),
    height: responsiveScreenHeight(40),
    resizeMode: 'contain',
    marginTop: responsiveScreenHeight(5),
  },
  noProductsContainer: {flex: 1, alignItems: 'center'},
  noProductText: {
    fontFamily: 'Poppins-Light',
    maxWidth: responsiveScreenWidth(60),
    textAlign: 'center',
    color: '#94A3B8',
  },
  cartEmtyTxt: {
    fontFamily: 'Poppins-Bold',
    color: '#284975',
    fontSize: responsiveFontSize(3),
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
  // BottomSheet: {
  //   backgroundColor: 'blue', // Change the color as per your requirement
  //   borderTopLeftRadius: 10,
  //   borderTopRightRadius: 10,
  //   padding: 16,
  //   height: 300,
  //   zIndex: 9,
  // },
  // noItemImage: {
  //   // marginTop: responsiveScreenHeight(5),
  // },
});
