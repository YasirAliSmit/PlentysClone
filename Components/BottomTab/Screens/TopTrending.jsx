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
import {
  responsiveScreenFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const TopTrending = () => {
  //const product = useSelector(state => state.TopBrands.data);
  const dispatch = useDispatch();
  const topProduct = useSelector(state => state.main.topTranding);
  useEffect(() => {
    dispatch(fetchTopTrandProductReq());
  }, [dispatch]);
  const numColumns = 2;
  const renderItem = ({item}) => {
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
                  color={'#fff'}
                  name="hearto"
                  size={20}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
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
});
