import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
//import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {legacy_createStore} from 'redux';
import {useState} from 'react';
const Details = () => {
  const [showView, setShowView] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  const discount = (item.minPrice * item.getValue) / 100;
  const finalPrice = Math.round(item.minPrice - discount);
  console.log(item);
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
          <Text style={styles.shoppingCart}>Product Detail</Text>
        </View>
      </View>
      <View>
        <Image style={styles.brandImage} source={{uri: item.imageUrl}} />
        {item.getValue === null ? null : (
          <Text style={styles.discount}>Discount {item.getValue}%</Text>
        )}
        <TouchableOpacity style={styles.share}>
          <Entypo name={'share'} color={'black'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.heart}>
          <AntDesign name={'hearto'} color={'red'} size={25} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.Descri}>{item.brand}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.prices}>
          {item.getValue === null ? null : (
            <Text style={styles.finalPrices}>Rs {item.minPrice}</Text>
          )}
          <Text style={styles.minPrice}>Rs {finalPrice}</Text>
          <Text style={styles.review}>{item.Review}</Text>
          {item.avgRating ? (
            <Text style={styles.avgRating}>
              <AntDesign name={'star'} color={'#F9C21A'} size={20} />
              {item.avgRating}
            </Text>
          ) : null}
        </View>
      </View>
      <View>
        <Text style={styles.hightLight}>Highlights </Text>
        <TouchableOpacity
          style={styles.down}
          onPress={() => setShowView(!showView)}>
          <AntDesign name={'down'} color="black" size={15} />
        </TouchableOpacity>
      </View>
      {showView ? (
        <View>
          <View>
            <Text>{item.bulletPoint}</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    fontSize: responsiveScreenFontSize(2),
    color: '#fff',
    left: responsiveScreenWidth(7),
    top: responsiveScreenHeight(1.7),
    fontFamily: 'Poppins-Bold',
  },
  brandImage: {
    width: '100%',
    height: responsiveScreenHeight(30),
    position: 'relative',
    //marginTop: responsiveScreenHeight(5),
    resizeMode: 'contain',
    backgroundColor: '#fff',
    borderBottomLeftRadius: responsiveScreenHeight(5),
    borderBottomRightRadius: responsiveScreenHeight(5),
  },
  heart: {
    position: 'absolute',
    left: responsiveScreenWidth(90),
    top: responsiveScreenHeight(2),
  },
  share: {
    position: 'absolute',
    left: responsiveScreenWidth(90),
    top: responsiveScreenHeight(5),
  },
  discount: {
    backgroundColor: '#DB3D3D',
    padding: responsiveScreenHeight(1),
    width: responsiveScreenWidth(25),
    color: '#fff',
    borderTopRightRadius: responsiveScreenWidth(4),
    borderBottomRightRadius: responsiveScreenWidth(4),
    position: 'absolute',
    top: responsiveScreenHeight(1),
  },
  Descri: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(2),
    marginTop: responsiveScreenHeight(1),
    marginLeft: responsiveScreenWidth(2),
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(2),
    color: 'black',
    marginTop: responsiveScreenHeight(0),
    marginLeft: responsiveScreenWidth(2),
  },
  minPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(2),
    color: '#305586',
    marginLeft: responsiveScreenWidth(1.5),
  },
  finalPrices: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(1.5),
    color: 'grey',
    textDecorationLine: 'line-through',
    textDecorationColor: 'grey',
    marginLeft: responsiveScreenWidth(1.5),
    marginTop: responsiveScreenHeight(0.5),
  },
  prices: {
    flexDirection: 'row',
  },
  review: {
    fontSize: 20,
  },
  avgRating: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    marginLeft: responsiveScreenWidth(60),
  },
  hightLight: {
    marginTop: responsiveScreenHeight(1),
    color: 'black',
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    marginLeft: responsiveScreenWidth(5),
    borderBottomWidth: 1,
    borderColor: 'black',
    width: responsiveScreenWidth(90),
  },
  down: {
    // marginRight: responsiveScreenWidth(10),
    position: 'absolute',
    right: responsiveScreenWidth(10),
    top: responsiveScreenHeight(2),
  },
});
