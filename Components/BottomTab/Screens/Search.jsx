import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios';
import TopBrands from './TopBrands';
import TopTrending from './TopTrending';
import SearchTopBrand from './SearchTopBrand';
const Search = ({navigation}) => {
  const [search, setSearch] = useState();
  const [Data, setData] = useState();
  const searchData = async () => {
    navigation.navigate('SearchProducts', {search});
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
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
            size={responsiveScreenFontSize(2)}
            onPress={() => setSearch('')}
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
          <Entypo
            name="camera"
            color="#fff"
            size={responsiveScreenFontSize(2)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.topTranding}>
        <SearchTopBrand />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    position: 'relative',
  },
  srh: {
    position: 'absolute',
    top: responsiveScreenHeight(2),
    left: 50,
  },
  input: {
    backgroundColor: '#fff',
    width: responsiveWidth(65),
    height: responsiveScreenHeight(3),
    borderRadius: responsiveScreenHeight(0.5),
    //fontSize: responsiveScreenFontSize(1),
    paddingLeft: responsiveScreenWidth(20),
    paddingTop: responsiveScreenHeight(0),
    position: 'relative',
    marginLeft: responsiveScreenWidth(8),
    marginTop: responsiveScreenHeight(2),
    fontSize: responsiveScreenFontSize(2),
    //verticalAlign: 'middle',
  },
  content: {
    height: responsiveScreenHeight(6),
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
  topTranding: {
    // position: 'absolute',
    // left: responsiveScreenWidth(10),
    width: '100%',
    marginTop: responsiveScreenHeight(7),
    marginLeft: responsiveScreenWidth(2),
    //alignSelf:""
  },
});
