import {StyleSheet, StatusBar, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {fetchNewArrivals} from '../../redux/Action';
import {fetchBanner} from '../../redux/AllAction';
import {fetchRamdanDealsNEW} from '../../redux/AllAction';
import {fetchTopTrandProductReqNEW} from '../../redux/AllAction';
import {fetchNewArrivalsNEW} from '../../redux/AllAction';
///import {fetchTopTrandProductReqNEW} from '../../redux/AllAction';
const Splash = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch(fetchBanner()),
          dispatch(fetchRamdanDealsNEW()),
          dispatch(fetchNewArrivalsNEW()),
          dispatch(fetchTopTrandProductReqNEW()),
          setTimeout(() => {
            navigation.navigate('Parent');
          }, 2000),
        ]);
      } catch (error) {
        setTimeout(() => {
          navigation.navigate('Parent');
        }, 2000);
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
