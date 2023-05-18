import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
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
const Cart = () => {
  const navigation = useNavigation();
  const product = useSelector(state => state.main.cartItems);
  const dispatch = useDispatch();
  console.log(
    'console in side useselector of product cart of line number of 6',
    product,
  );
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
      {/* <ScrollView>
        <Text style={{color: 'red', marginTop: 100}}>Product Text</Text>
        {product.length === 0 ? (
          <Text style={{color: 'red', marginTop: 100}}>Your Cart Is empty</Text>
        ) : (
          <Text style={{color: 'red', marginTop: 100}}>
            {product.map(item => {
              return (
                <View>
                  <Text>{item.brand}</Text>
                </View>
              );
            })}
          </Text>
        )}
      </ScrollView> */}

      {/* <View style={styles.parent}>
          <View style={styles.ProductImageView}>
            <Image
              style={styles.ProductImage}
              source={require('../../assets/PlentysMartMob(1).png')}
            />
          </View>
          <View style={styles.brandTxt}>
            <Text style={styles.brandHeading}>Brand</Text>
            <Text style={styles.brandTitle}>Brand Title</Text>
            <Text style={styles.brandRs}> Rs 788</Text>
          </View>
          <View>
            <Ionicons
              style={styles.bin}
              name={'trash-bin-outline'}
              color="red"
              size={20}
            />
            <AntDesign name={'hearto'} color={'black'} size={20} />
            <View></View>
          </View>
        </View> */}
      <Text style={{color: 'red'}}>{product.length}</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerOfShoppingCart: {
    height: responsiveScreenHeight(9),
    width: responsiveScreenWidth(100),
    backgroundColor: '#0B223F',
    position: 'absolute',
    top: 0,
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

    // fontWeight: 'bold',
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    width: 400,
    // backgroundColor: 'red',
  },
  ProductImage: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(20),
    resizeMode: 'cover',

    marginLeft: responsiveScreenWidth(5),
    //zIndex: 2,
  },
  ProductImageView: {
    marginTop: responsiveScreenHeight(10),
    marginLeft: responsiveScreenWidth(2),
  },
  brandTxt: {
    // marginTop: 20,
    marginTop: responsiveScreenHeight(10),
  },
  brandHeading: {
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
    fontWeight: '600',
  },
  brandTitle: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
    // fontWeight: '600',
  },
  brandRs: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Light',
    color: '#0B223F',
    fontWeight: '600',
  },
  bin: {
    marginTop: responsiveScreenHeight(10),
    marginLeft: responsiveScreenWidth(2),
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
