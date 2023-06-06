import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios';

const Search = ({navigation}) => {
  const [search, setSearch] = useState();
  const [Data, setData] = useState();
  const searchData = async () => {
    // try {
    //   const response = await axios.get(
    //     `https://api.plentys.pk/api/v1/public/product/search?title=${search}/&categoryId=1&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
    //   );
    //   setData(response.data.data);
    //   console.log('this is new console', Data);
    // } catch (error) {
    //   console.log(error, 'error while fetch search products');
    // }
    navigation.navigate('SearchProducts', {search});
  };
  // useEffect(() => {
  //   searchData();
  // }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.left}
        onPress={() => navigation.navigate('BottomNavigation')}>
        <AntDesign
          name="left"
          color="#fff"
          size={responsiveScreenFontSize(2)}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          type="text"
          style={styles.input}
        />
        <AntDesign
          name="search1"
          style={styles.srh}
          color="grey"
          size={responsiveScreenFontSize(2.5)}
        />
        <Entypo
          name="cross"
          style={styles.cross}
          color="grey"
          size={responsiveScreenFontSize(3)}
        />
      </View>
      <TouchableOpacity onPress={() => searchData()} style={styles.camera}>
        <AntDesign
          name="search1"
          color="#fff"
          size={responsiveScreenFontSize(2)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.mic}>
        <Entypo name="camera" color="#fff" size={responsiveScreenFontSize(2)} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  srh: {
    position: 'absolute',
    top: responsiveHeight(3),
    left: 50,
  },
  input: {
    backgroundColor: '#fff',
    width: responsiveWidth(65),
    height: responsiveHeight(4.5),
    borderRadius: 5,
    fontSize: responsiveScreenFontSize(2),
    paddingLeft: responsiveWidth(15),
    left: responsiveScreenWidth(8),
    top: responsiveHeight(2),
  },
  content: {
    height: 60,
    backgroundColor: '#0B223F',
    zIndex: 1,
  },
  cross: {
    position: 'absolute',
    top: responsiveHeight(2.5),
    left: responsiveWidth(65),
  },
  left: {
    position: 'absolute',
    zIndex: 2,
    top: responsiveHeight(3),
    left: responsiveWidth(3),
  },
  camera: {
    position: 'absolute',
    zIndex: 2,
    top: responsiveHeight(3),
    left: responsiveWidth(80),
  },
  mic: {
    position: 'absolute',
    zIndex: 2,
    top: responsiveHeight(3),
    left: responsiveWidth(87),
  },
});
