import {StyleSheet, StatusBar, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {fetchNewArrivals} from '../../redux/Action';
import {
  fetchBadBreathProducts,
  fetchBanner,
  fetchCleanProducts,
  fetchDairyProducts,
  fetchFlashDealsProducts,
  fetchlipDontProducts,
} from '../../redux/AllAction';
import {fetchRamdanDealsNEW} from '../../redux/AllAction';
import {fetchTopTrandProductReqNEW} from '../../redux/AllAction';
import {fetchNewArrivalsNEW} from '../../redux/AllAction';
import {fetchJsonData} from '../../redux/AllAction';
///import {fetchTopTrandProductReqNEW} from '../../redux/AllAction';
import {fetchAllCategories} from '../../redux/AllAction';
import {fetchTopTrandProductReq} from '../../redux/Action';
import FlashDealsProduct from '../BottomTab/Screens/FlashDealsProducts';
import {festivalEidProducts} from '../../redux/AllAction';
import {fetchMakeUp} from '../../redux/AllAction';
import {fetchShanProducts} from '../../redux/AllAction';
import {fetchBeaverages} from '../../redux/AllAction';
import {fetchkitchenCarousel} from '../../redux/AllAction';
import {fetchairpordsProducts} from '../../redux/AllAction';
import {fetchbeautyBrandProducts} from '../../redux/AllAction';
import {fetchShampoProducts} from '../../redux/AllAction';
import Loader from './../BottomTab/Screens/Loader.json';
import {ActivityIndicator} from 'react-native-paper';
const Splash = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch(fetchBanner()),
          dispatch(fetchJsonData()),
          dispatch(fetchRamdanDealsNEW()),
          dispatch(fetchNewArrivalsNEW()),
          dispatch(fetchTopTrandProductReqNEW()),
          dispatch(fetchAllCategories()),
          dispatch(fetchFlashDealsProducts()),
          dispatch(fetchTopTrandProductReq()),
          dispatch(festivalEidProducts()),
          dispatch(fetchMakeUp()),
          dispatch(fetchShanProducts()),
          dispatch(fetchBeaverages()),
          dispatch(fetchkitchenCarousel()),
          dispatch(fetchairpordsProducts()),
          dispatch(fetchbeautyBrandProducts()),
          dispatch(fetchDairyProducts()),
          dispatch(fetchlipDontProducts()),
          dispatch(fetchCleanProducts()),
          dispatch(fetchBadBreathProducts()),
          dispatch(fetchShampoProducts()),

          setTimeout(() => {
            navigation.replace('Parent');
            //navigation.replace('BottomNavigation');
          }, 3000),
        ]);
      } catch (error) {
        setTimeout(() => {
          navigation.replace('Parent');
        }, 3000);
      }
    };
    fetchData();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B223F',
      }}>
      <StatusBar backgroundColor={'#0B223F'} />
      <Image
        style={{width: 140, height: 300, objectFit: 'contain'}}
        source={require('../assets/Logo.webp')}
      />
    </View>
  );
};

export default Splash;
