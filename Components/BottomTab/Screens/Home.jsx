import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../Header/Header';
import {useQuery} from '@tanstack/react-query';
import Banner from './Banner';
import ProductOne from './ProductOne';
import {
  responsiveHeight,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import ProductBanners from './ProductBanners';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Product from './Product';
const Home = () => {
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
          <Product />
        </View>
        <View style={styles.product}>
          <ProductOne />
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
});
