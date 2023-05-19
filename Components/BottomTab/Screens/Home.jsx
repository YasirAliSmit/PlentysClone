import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../Header/Header';
import Banner from './Banner';
import ProductOne from './ProductOne';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import ProductBanners from './ProductBanners';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Product from './Product';
import TopTrending from './TopTrending';
import TopBrands from './TopBrands';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerParent}>
      <View style={styles.header}>
        <StatusBar backgroundColor={'#0B223F'} />
        <Header />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Banner />
        </View>
        <View style={styles.bannerProduct}>
          <ProductBanners />
        </View>
        <View style={styles.product}>
          <View style={styles.headTxt}>
            <TouchableOpacity>
              <Text style={styles.categories}>Ramadan Deals </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ViewRamdan')}>
              <Text style={styles.viewAll}>
                View all <AntDesign name="arrowright" size={20} />{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <Product />
        </View>
        <View style={styles.product}>
          <View style={styles.headTxt}>
            <TouchableOpacity>
              <Text style={styles.categories}>New Arrivals </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.viewAll}>
                View all <AntDesign name="arrowright" size={20} />{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <ProductOne />
        </View>
        <View style={{flex: 1}}>
          <TopBrands />
        </View>
        <View style={styles.topPro}>
          <TouchableOpacity>
            <Text style={styles.topPro}>Top Tranding </Text>
          </TouchableOpacity>
          <TopTrending />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    position: 'relative',
    top: responsiveScreenHeight(4.5),
  },
  bannerProduct: {
    flex: 1,
    position: 'relative',
    top: responsiveScreenHeight(2),
    width: '100%',
  },
  product: {
    flex: 1,
    top: responsiveScreenHeight(4),
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 0,

    left: 0,
    zIndex: 2,
  },

  headTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveScreenHeight(0),
    marginBottom: responsiveScreenHeight(2),
  },
  categories: {
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    marginLeft: responsiveScreenWidth(2),
  },
  viewAll: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#DB3D3D',
    marginRight: responsiveScreenWidth(30),
    marginTop: responsiveScreenHeight(0.5),
  },
  topProd: {},
  topPro: {
    marginTop: responsiveScreenHeight(2),
    marginBottom: responsiveScreenHeight(5),
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    marginLeft: responsiveScreenWidth(2),
  },
});
