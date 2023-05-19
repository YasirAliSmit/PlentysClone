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
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
// import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import image from '../../assets/PlentysMartMob(1).png';
import {removeFromCart} from '../../../redux/Action';
import {clearCartData} from '../../../redux/AllAction';
import _ from 'lodash';

const Cart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [price, setPrice] = useState(0);

  const product = useSelector(state => state.main.cartItems);

  //console.log(useSelector(state => state.main.cartItems));
  const clearCart = () => {
    dispatch(clearCartData());
    setPrice(0);
  };
  // const clearCart = useCallback(() => {
  //   dispatch(clearCartData());
  // }, [dispatch]);
  // console.log(
  //   'console in side useselector of product cart of line number of 6',
  //   product,
  // );

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          position: 'relative',

          height: 150,
        }}>
        <View style={styles.parent} key={item.brandId}>
          <View style={styles.ProductImageView}>
            <Image style={styles.ProductImage} source={{uri: item.imageUrl}} />
          </View>
          <View style={styles.brandTxt}>
            <Text style={styles.brandHeading}>{item.brand}</Text>
            <Text style={styles.brandTitle}>{item.title}</Text>
            <Text style={styles.brandRs}>Rs. {item.minPrice}</Text>
          </View>
          <View style={styles.binheart}>
            <Ionicons
              style={styles.bin}
              name={'trash-bin-outline'}
              color="black"
              size={20}
            />
            <AntDesign
              style={styles.heart}
              name={'hearto'}
              color={'black'}
              size={20}
            />
            <View style={styles.plusandmin}>
              <TouchableOpacity>
                <AntDesign
                  style={styles.plus}
                  name={'plus'}
                  color={'black'}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.count}>
                <Text>1</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={styles.heart}
                  name={'minus'}
                  color={'black'}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  useEffect(() => {
    const totalCostOfCart = _.sumBy(
      product.map(item => {
        return item.minPrice;
      }),
    );
    console.log(totalCostOfCart, 'totalCostOfCart');
    setPrice(totalCostOfCart);
  }, []);

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

      <ScrollView>
        <View style={styles.lenghtoftxt}>
          <Text style={styles.lengthTxt}>
            A total of {product.length} items
          </Text>
          <TouchableOpacity onPress={() => clearCart()}>
            <Text style={styles.clearTxt}>Clear All</Text>
          </TouchableOpacity>
        </View>
        {product.length === 0 ? (
          <Text>Your Cart is Empty</Text>
        ) : (
          <FlatList data={product} renderItem={renderItem} />
        )}
      </ScrollView>
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
    //position: 'absolute',
    top: 0,
    zIndex: 5,
    //marginBottom: responsiveScreenHeight(10),
  },
  footer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(15),
    width: responsiveScreenWidth(100),
    backgroundColor: '#0B223F',
    top: responsiveScreenHeight(5),
    borderTopLeftRadius: responsiveScreenHeight(2),
    borderTopRightRadius: responsiveScreenHeight(2),
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
    // position: 'absolute',
    // top: 0,
    // left: 0,
    //zIndex: 3,
    // backgroundColor: 'pink',
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
    maxWidth: responsiveScreenWidth(35),
  },
  brandRs: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#0B223F',
    fontWeight: '600',
    marginTop: responsiveScreenHeight(3),
  },
  bin: {
    marginTop: responsiveScreenHeight(10),
    marginLeft: responsiveScreenWidth(2),
  },
  binheart: {
    marginTop: responsiveScreenHeight(-7),
    marginLeft: responsiveScreenWidth(5),
  },
  heart: {
    marginTop: responsiveScreenHeight(3),
    marginLeft: responsiveScreenWidth(2),
  },
  plus: {
    marginTop: responsiveScreenHeight(3),
    marginLeft: responsiveScreenWidth(-5),
  },
  plusandmin: {
    flexDirection: 'row',
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
    fontFamily: 'Poppins-Bold',
    marginTop: responsiveScreenHeight(0),
    marginLeft: responsiveScreenWidth(3),
  },
  count: {
    marginTop: responsiveScreenHeight(3),
    marginLeft: responsiveScreenWidth(2),
  },
  nextBtn: {
    width: responsiveScreenWidth(60),
    height: responsiveScreenHeight(5),
    backgroundColor: '#F9C21A',
    borderRadius: responsiveScreenWidth(2),
    marginTop: responsiveScreenHeight(3),
    marginLeft: responsiveScreenWidth(5),
  },
  nextBtnTxt: {
    textAlign: 'center',
    verticalAlign: 'auto',
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(2.5),
    color: '#fff',
    marginTop: responsiveScreenHeight(1),
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
});

// <ScrollView>
//         <Text style={{color: 'red', marginTop: 100}}>Product Text</Text>
//         {product.length === 0 ? (
//           <Text style={{color: 'red', marginTop: 100}}>Your Cart Is empty</Text>
//         ) : (
//           <Text style={{color: 'red', marginTop: 100}}>
//             {product.map(item => {
//               return <View></View>;
//             })}
//           </Text>
//         )}
//       </ScrollView>
