import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const FlashDealBanner = ({flashDeals}) => {
  //console.log(flashDeals);
  return (
    <View style={styles.container}>
      <Image style={styles.flashDeals} source={{uri: flashDeals}} />
    </View>
  );
};

export default FlashDealBanner;

const styles = StyleSheet.create({
  flashDeals: {
    width: responsiveScreenWidth(95),
    height: responsiveScreenHeight(15),
    resizeMode: 'contain',
    borderRadius: responsiveScreenWidth(4),
    marginLeft: responsiveScreenWidth(3),
  },
  container: {
    flex: 1,
    //alignItems  : 'center',
    marginTop: responsiveScreenHeight(-4),
  },
});

//<Image source={require(flashDeals)} />
