import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
//import image from '../../assets/brandImg/1.png'
const TopBrands = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('TopBrandProducts')}>
      <View
        style={{
          flex: 1,
          //backgroundColor: 'red',
          height: responsiveScreenHeight(30),
        }}>
        <Text style={styles.topbrand}>Top Brands</Text>

        <View style={styles.brandRow1}>
          <Image
            style={styles.brand1}
            source={require('../../assets/brandImg/1.png')}
          />
          <Image
            style={styles.brand1}
            source={require('../../assets/brandImg/2.png')}
          />
          <Image
            style={styles.brand1}
            source={require('../../assets/brandImg/3.png')}
          />
          <Image
            style={styles.brand1}
            source={require('../../assets/brandImg/4.png')}
          />
        </View>
        <View style={styles.brandRow2}>
          <Image
            style={styles.brand1}
            source={require('../../assets/brandImg/5.png')}
          />
          <Image
            style={styles.brand1}
            source={require('../../assets/brandImg/6.png')}
          />
          <Image
            style={styles.brand1}
            source={require('../../assets/brandImg/7.png')}
          />
          <Image
            style={styles.brand1}
            source={require('../../assets/brandImg/8.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(TopBrands);

const styles = StyleSheet.create({
  topbrand: {
    marginTop: responsiveScreenHeight(1),
    marginLeft: responsiveScreenWidth(5),
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    //marginLeft: responsiveScreenWidth(2),
  },
  brandRow1: {
    flexDirection: 'row',
  },
  brandRow2: {
    flexDirection: 'row',
  },
  brand1: {
    marginHorizontal: responsiveScreenWidth(2),
    marginVertical: responsiveScreenHeight(2),
    height: responsiveScreenHeight(5),
    width: responsiveScreenWidth(20),
    resizeMode: 'cover',
  },
});
