import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import image from '../../assets/PlentysMartMob(1).png';
import Product from './Product';
const ProductBanners = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headTxt}>
        <TouchableOpacity>
          <Text style={styles.categories}>Categories </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.viewAll}>
            View all <AntDesign name="arrowright" size={20} />{' '}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            style={styles.mob}
            source={require('../../assets/PlentysMartMob(1).png')}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <Image
            style={styles.mobBea}
            source={require('../../assets/BeautyMob.png')}
          />
          <Image
            style={styles.mobBea}
            source={require('../../assets/MobileTabletsv1.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductBanners;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  categories: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    marginLeft: responsiveWidth(2),
  },
  viewAll: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#DB3D3D',
    marginRight: responsiveWidth(2),
  },
  mob: {
    width: responsiveWidth(48),
    height: responsiveHeight(37),
    resizeMode: 'contain',
    borderRadius: responsiveWidth(2),
    marginHorizontal: responsiveWidth(2),
    marginVertical: responsiveHeight(0.5),
  },
  mobBea: {
    marginVertical: responsiveHeight(0.5),
    width: responsiveWidth(45),
    height: responsiveHeight(18),
    resizeMode: 'contain',
    borderRadius: responsiveWidth(2),
  },
});
