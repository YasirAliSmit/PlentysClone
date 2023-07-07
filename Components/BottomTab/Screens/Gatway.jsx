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
import {SP_KEY} from '@env'
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
import {useRoute} from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';
import image from '../../assets/easyPaisa.png';
import { StripeProvider } from '@stripe/stripe-react-native';
const Gatway = () => {
  //alert(SP_KEY)
  const route = useRoute();
  const {price, numberOfProducts} = route.params;
  const navigation = useNavigation();
  const [value, setValue] = useState('first');
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
          <Text style={styles.shoppingCart}>Checkout</Text>
        </View>
      </View>
      <View style={styles.deliveryContainerParent}>
        <TouchableOpacity>
          <Text style={styles.DeliveryTxt}>Delivery Address</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.EditAddress}>Edit Address</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.street}>
          House No 17-B Street No 30 Sector F-7/1 KARACHI-44000 PAKISTAN
        </Text>
      </View>
      <View>
        <Text style={styles.payMethod}>Payment Method</Text>
        <View style={styles.deliveryContainer}>
          <Ionicons
            style={styles.cashIcon}
            name="cash-outline"
            color="black"
            size={25}
          />
          <Text style={styles.cash}>Cash on delivery</Text>
          <View style={styles.radio}></View>
        </View>
        <View style={styles.deliveryContainer}>
          <AntDesign
            style={styles.cashIcon}
            name="creditcard"
            color="black"
            size={25}
          />
          <Text style={styles.cash}>Credit/Debit card</Text>
          <View style={styles.radio}></View>
        </View>
        <View style={styles.deliveryContainer}>
          <Image
            source={require('../../assets/easyPaisa.png')}
            style={styles.cashIcon}
          />
          <Text style={styles.cash}>Easypaisa</Text>
          <View style={styles.radio}></View>
        </View>
        <View style={styles.deliveryContainer}>
          <AntDesign
            style={styles.cashIcon}
            name="creditcard"
            color="black"
            size={25}
          />
          <Text style={styles.cash}>Plentys Wallet</Text>
          <View style={styles.btnWallet}>
            <Text style={styles.btnWalletTxt}>500</Text>
          </View>
          <View style={styles.radio}></View>
        </View>
      </View>
      <View style={styles.coupanContainer}>
        <Text style={styles.coupanContainerTxt}>Coupons</Text>
        <View style={styles.wrapperCoupen}>
          <Text style={styles.ApplyCoupen}>Apply Coupons</Text>
          <TouchableOpacity style={styles.applyTxtBtn}>
            <Text style={styles.applyTxt}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.productPricesDetails}>
        <Text style={styles.PriceDetails}>Price Details</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.itemPrice}>
            Price ( {numberOfProducts} items )
          </Text>
          <Text style={styles.Rs}>Rs.{price}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#CBD5E1',
          }}>
          <Text style={styles.itemPrice}>Delivery Charges</Text>
          <Text style={styles.Free}>Free</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.PriceDetails}>Total To Pay</Text>
        <Text style={styles.PriceDetails}>Rs.{price}</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate('PaymentScreen')} style={styles.nextBtn}>
            <Text style={styles.nextBtnTxt}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Gatway);

const styles = StyleSheet.create({
  headerOfShoppingCart: {
    height: responsiveScreenHeight(7),
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
    fontSize: responsiveScreenFontSize(3),
    color: '#fff',
    left: responsiveScreenWidth(7),
    top: responsiveScreenHeight(1),
    fontFamily: 'Poppins-Bold',
  },

  DeliveryTxt: {
    fontSize: responsiveScreenFontSize(2),

    fontFamily: 'Poppins-Light',
    color: '#305586',
    fontWeight: 'bold',
    marginLeft: responsiveScreenWidth(1),
  },
  EditAddress: {
    fontSize: responsiveScreenFontSize(1),

    fontFamily: 'Poppins-Light',
    color: '#94A3B8',
    marginRight: responsiveScreenWidth(2),
  },
  street: {
    fontSize: responsiveScreenFontSize(1.5),

    fontFamily: 'Poppins-Light',
    color: '#305586',
    alignSelf: 'center',
    marginTop: responsiveScreenHeight(2),
    width: '90%',
  },
  payMethod: {
    fontSize: responsiveScreenFontSize(3),

    fontFamily: 'Poppins-Bold',
    color: '#305586',

    marginTop: responsiveScreenHeight(2),
    marginLeft: responsiveScreenWidth(2),
  },
  radio: {
    width: responsiveScreenWidth(5),
    height: responsiveScreenHeight(2),
    borderRadius: responsiveScreenWidth(2.5),
    borderWidth: 1,
    borderColor: '#305586',
    position: 'absolute',
    right: responsiveScreenWidth(8),
  },
  deliveryContainer: {
    flexDirection: 'row',
    position: 'relative',
    marginVertical: responsiveScreenHeight(1),
  },
  cashIcon: {
    position: 'absolute',
    left: responsiveScreenWidth(4),
  },
  cash: {
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    left: responsiveScreenWidth(15),
  },
  deliveryContainerParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveScreenHeight(2),
  },
  btnWallet: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(2),
    borderWidth: 1,
    borderColor: '#305586',
    position: 'absolute',
    right: responsiveScreenWidth(20),
  },
  btnWalletTxt: {
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    alignSelf: 'center',
  },
  coupanContainerTxt: {
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    marginTop: responsiveScreenHeight(2),
    fontSize: responsiveScreenFontSize(2),
    marginLeft: responsiveScreenWidth(4),
  },
  wrapperCoupen: {
    flexDirection: 'row',
  },
  ApplyCoupen: {
    fontFamily: 'Poppins-Light',
    color: '#305586',
    marginLeft: responsiveScreenWidth(3),
  },
  applyTxt: {
    fontFamily: 'Poppins-Light',
    color: '#305586',
    textAlign: 'center',
  },
  applyTxtBtn: {
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(2.5),
    borderWidth: 1,
    borderColor: '#F9C21A',
    position: 'absolute',
    left: responsiveScreenWidth(70),
  },
  PriceDetails: {
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    fontSize: responsiveScreenFontSize(2.5),
    marginTop: responsiveScreenHeight(2),
    marginLeft: responsiveScreenWidth(2),
  },
  itemPrice: {
    fontFamily: 'Poppins-Light',
    color: '#305586',
    marginLeft: responsiveScreenWidth(4),
    fontSize: responsiveScreenFontSize(1.8),
  },
  Rs: {
    // fontFamily: 'Poppins-Light',
    // color: '#305586',
    marginLeft: responsiveScreenWidth(50),
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    fontSize: responsiveScreenFontSize(2.5),
  },
  footer: {
    flexDirection: 'row',
    // height: responsiveScreenHeight(15),
    height: responsiveScreenHeight(10),
    width: responsiveScreenWidth(100),
    backgroundColor: '#0B223F',
    // top: responsiveScreenHeight(5),
    top: responsiveScreenHeight(12),
    borderTopLeftRadius: responsiveScreenHeight(1),
    borderTopRightRadius: responsiveScreenHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  // nextBtn: {
  //   width: responsiveScreenWidth(65),
  //   height: responsiveScreenHeight(5),
  //   backgroundColor: '#F9C21A',
  //   borderRadius: responsiveScreenWidth(2),
  //   marginTop: responsiveScreenHeight(3),
  //   marginLeft: responsiveScreenWidth(15),
  // },
  nextBtnTxt: {
    textAlign: 'center',
    verticalAlign: 'auto',
    fontFamily: 'Poppins-Light',
    fontSize: responsiveScreenFontSize(2.5),
    color: '#fff',
    marginTop: responsiveScreenHeight(1),
    fontWeight: 'bold',
    //alignSelf: 'center',
  },
  Free: {
    fontFamily: 'Poppins-Bold',
    color: '#A0C43C',
    marginLeft: responsiveScreenWidth(50),
    fontSize: responsiveScreenFontSize(2),
  },
});
