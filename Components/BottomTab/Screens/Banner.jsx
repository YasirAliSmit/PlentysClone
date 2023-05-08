import React from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useState, useEffect} from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
export const SLIDER_WIDTH = Dimensions.get('window').width + 90;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const renderItem = ({item}) => {
  return (
    <View style={{}}>
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

const App = () => {
  const [uiData, setUiData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(
          `https://api.plentys.pk/api/v1/public/banner?mobile=1&cityId=1`,
        );
        const result = await data.json();
        setUiData(result.data);
      } catch (error) {
        console.log(`error in side banner catch => ${error}`);
      }
    };

    getData();
  }, []);
  return (
    <View style={{marginVertical: 10}}>
      <Carousel
        data={uiData}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
    </View>
  );
};
export default App;
