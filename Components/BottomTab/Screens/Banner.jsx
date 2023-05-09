import React from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useState, useEffect} from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import { fetchBanners } from '../../../redux/bannerSlice';
import { useSelector , useDispatch } from 'react-redux';
export const SLIDER_WIDTH = Dimensions.get('window').width + 90;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);


const App = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.counter.value);

  console.log(`item in side renderItem ${banners} `)
  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

 useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);
  return (
    <View style={{marginVertical: 10}}>
      <Carousel
        data={banners}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
    </View>
  );
  
};
const renderItem = ({item}) => {
    return (
    <View >
      <Image
        source={{uri: item.imageUrl}}
        style={{
          width: responsiveWidth(120),
          height: 250,
          resizeMode: 'contain',  
        }}
      />
    </View>
  );
};
export default App;
