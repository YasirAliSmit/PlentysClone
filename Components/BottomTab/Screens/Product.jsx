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
import {addToCart} from '../../../redux/Action';
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

const Product = () => {
  const [uiData, setUiData] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(state => state.main.ramdanDeals);

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

    getData();
  }, []);
  const renderProduct = ({item}) => {
    function addItem(data) {
      dispatch(addToCart(data));
    }
    return (
      <View>
        <View style={styles.Product}>
          <View style={styles.ProdContainer}>
            <Image
              // source={require('../../assets/PlentysMartMob(1).png')}
              source={{uri: item.imageUrl}}
              style={styles.images}
            />
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
              <TouchableOpacity onPress={() => addItem(item)}>
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
    <FlatList
      data={products}
      renderItem={renderProduct}
      horizontal
      showsHorizontalScrollIndicator={false}
      //keyExtractor={item => item.id.toString()}
    />
  );
};

export default Product;

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
});
