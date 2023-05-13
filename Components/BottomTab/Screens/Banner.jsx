import React from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useState, useEffect} from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {fetchBanners} from '../../../redux/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
export const SLIDER_WIDTH = Dimensions.get('window').width + 90;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const renderItem = ({item}) => {
  return (
    <View style={{}}>
      <Image
        source={{uri: item.imageUrl}}
        style={{
          width: responsiveWidth(100),
          height: 200,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const banners = useSelector(state => state.main.banner);

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
export default App;
