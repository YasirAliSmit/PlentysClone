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
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../redux/Action';
import {clearWishList} from '../../../redux/AllAction';
import {removeFavProduct} from '../../../redux/AllAction';
const Fav = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const WishList = useSelector(state => state.main.WishList);
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
  const handleRemoveWishList = product => {
    dispatch(removeFavProduct(product));
  };

  const renderProduct = ({item}) => {
    return (
      <View style={styles.Product}>
        <View style={styles.ProdContainer}>
          <Image
            // source={require('../../assets/PlentysMartMob(1).png')}
            source={{uri: item.imageUrl}}
            style={styles.images}
          />
          <View style={styles.brandRating}>
            <Text style={styles.brandTxt}>{item.brand}</Text>
            {/* <Text style={styles.brandRat}>{item.avgRating}</Text> */}
          </View>
          <View style={styles.brandDetails}>
            <Text style={styles.brandDetails}>{item.title}</Text>
          </View>
          <View style={styles.brandPrice}>
            <Text style={styles.brandPrice}>Rs. {item.minPrice}</Text>
          </View>
          <View style={styles.ParentBox}>
            <TouchableOpacity>
              <View style={styles.box}>
                <AntDesign
                  style={styles.cart}
                  color={'red'}
                  name="hearto"
                  size={20}
                  onPress={() => handleRemoveWishList(item.productId)}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAddToCart(item)}>
              <View style={styles.box1}>
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
      {WishList == 0 ? (
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
      ) : (
        <>
          <TouchableOpacity onPress={() => dispatch(clearWishList())}>
            <Text style={styles.deletAll}>Delete All</Text>
          </TouchableOpacity>
          <FlatList renderItem={renderProduct} data={WishList} numColumns={2} />
        </>
      )}
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
    fontSize: responsiveScreenFontSize(4),
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
    marginTop: responsiveScreenHeight(10),
  },
  noProductTextBtnTxt: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    //textAlign: 'center',
    alignItems: 'center',
  },
  Product: {
    maxHight: responsiveScreenHeight(18),
    marginBottom: responsiveScreenHeight(2.5),
    marginHorizontal: responsiveScreenWidth(2.5),
    maxWidth: 200,
    resizeMode: 'contain',
  },
  ProdContainer: {
    maxHeight: responsiveScreenHeight(40),
    elevation: 10,
    backgroundColor: '#F8FAFC',
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
  deletAll: {
    fontFamily: 'Poppins-Bold',
    alignSelf: 'flex-end',
    marginVertical: responsiveScreenHeight(2),
    marginRight: responsiveScreenWidth(2),
  },
});
