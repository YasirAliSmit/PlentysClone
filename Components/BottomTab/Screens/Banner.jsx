import React from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useState, useEffect} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fetchBanners} from '../../../redux/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
export const SLIDER_WIDTH = Dimensions.get('window').width + 100;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const renderItem = ({item}) => {
  //console.log('this console from banner =>', item);
  return (
    <View style={{marginTop: responsiveScreenHeight(3)}}>
      <Image
        source={{uri: item.imageUrl}}
        style={{
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(30),
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

const App = ({item}) => {
  const dispatch = useDispatch();
  const banners = useSelector(state => state.main.banner);
  const homeState = useSelector(state => state.main.carouselImages);
  // const finalBanners = useSelector(state => state.main.homeLayout);
  // console.log(finalBanners);
  //console.log('this console from home', homeState);
  return (
    <View>
      <Carousel
        data={item}
        // data={banners}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
    </View>
  );
};
export default App;
