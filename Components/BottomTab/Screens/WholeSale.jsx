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
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useEffect, useState} from 'react';
import {
  responsiveScreenFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
  useResponsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRamdanDeals} from '../../../redux/Action';
import {useNavigation} from '@react-navigation/native';
//import {fetchRamdanDeals} from '../../../redux/Action';
//import {useDispatch} from 'react-redux';
import {addToCart} from '../../../redux/AllAction';
const WholeSale = () => {
  const [uiData, setUiData] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(state => state.main.ramdanDeals);
  const [numColumns, setNumColumns] = useState(2);
  const navigation = useNavigation();
  // useEffect(() => {
  //   dispatch(fetchRamdanDeals());
  // }, [dispatch]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(
          `https://api.plentys.pk/api/v1/public/product/search?title=&categoryId=1955&cityId=1&limit=15`,
        );
        const result = await data.json();
        setUiData(result.data);
      } catch (error) {
        console.log(`error in side banner catch => ${error}`);
      }
    };

    // getData();
  }, []);
  const handleAddToCart = item => {
    const productDetails = {
      imageUrl: item.imageUrl,
      brand: item.brand,
      title: item.title,
      minPrice: item.minPrice,
      purchaseLimit: item.purchaseLimit,
      productId: item.productId,
    };
    dispatch(addToCart(productDetails));
  };
  const renderProduct = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.Product}>
          <View style={styles.ProdContainer}>
            <Image source={{uri: item.imageUrl}} style={styles.images} />
            <View style={styles.brandRating}>
              <Text style={styles.brandTxt}>{item.brand}</Text>
              <Text style={styles.brandRat}>{item.avgRating}</Text>
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
      </View>
    );
  };
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

          <TouchableOpacity
            style={styles.arrowup}
            //onPress={() => navigation.navigate('BottomNavigation')}
          >
            <AntDesign name="arrowup" size={20} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.upDown}>
            <AntDesign name="arrowdown" size={20} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity
          //onPress={() => navigation.navigate('BottomNavigation')}
          >
            <AntDesign
              name="filter"
              style={styles.filter}
              size={30}
              color={'#fff'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        //horizontal
        //showsHorizontalScrollIndicator={false}
        //numColumns={2}
        numColumns={numColumns}
        //numColumns={2}
        //keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default WholeSale;

const styles = StyleSheet.create({
  //header styles starts
  headerOfShoppingCart: {
    height: responsiveScreenHeight(9),
    width: responsiveScreenWidth(100),
    backgroundColor: '#0B223F',
    // backgroundColor: '#0B223F',

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
  arrowup: {
    top: responsiveScreenHeight(2),
    left: responsiveScreenWidth(22),
  },
  upDown: {
    top: responsiveScreenHeight(2.5),
    left: responsiveScreenWidth(20),
  },

  filter: {
    top: responsiveScreenHeight(2),
    left: responsiveScreenWidth(25),
  },
  //header style end
  Product: {
    flex: 1,
    marginBottom: responsiveScreenHeight(2.5),
    marginHorizontal: responsiveScreenWidth(2.5),
  },
  images: {
    width: responsiveWidth(40),
    height: responsiveHeight(30),
    resizeMode: 'contain',
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
  //   ProdContainer: {
  //     height: responsiveScreenHeight(50),
  //     elevation: 10,
  //     backgroundColor: '#F8FAFC',
  //   },
  ProdContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: responsiveWidth(5),
    maxWidth: responsiveScreenWidth(50),
  },
  cart: {
    alignSelf: 'center',
    marginTop: responsiveScreenHeight(0.5),
  },
});
