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
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
  useResponsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import image from '../../assets/PlentysMartMob(1).png';
import {fetchPerticularProduct} from '../../../redux/AllAction';
import {useNavigation} from '@react-navigation/native';
import Product from './Product';
import {useDispatch} from 'react-redux';
const ProductBanners = ({resultOneImage, resultTwoImage, resultThreeImage}) => {
  //console.log('this console from resultOneImage', resultOneImage);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const categoryId1 = resultOneImage.params['categoryId'];
  const categoryId2 = resultTwoImage.params['categoryId'];
  const categoryId3 = resultThreeImage.params['categoryId'];
  const titleOne = resultOneImage.params['title'];
  const titleTwo = resultTwoImage.params['title'];
  const titleThree = resultThreeImage.params['title'];
  const navigatetoOther = (id, title) => {
    //console.log('called a function', id);
    //dispatch(fetchPerticularProduct(id));
    navigation.navigate('CategoriesOfMart', {title, id});
    console.log(title);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headTxt}>
        <TouchableOpacity>
          <Text style={styles.categories}>
            Categories
            <MaterialCommunityIcons
              name={'hand-pointing-down'}
              color={'#F9C21A'}
              size={20}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.viewAll}>
            View all <AntDesign name="arrowright" size={20} />{' '}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigatetoOther(categoryId1, titleOne)}>
          <View>
            <Image style={styles.mob} source={{uri: resultOneImage.imageUrl}} />
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            onPress={() => navigatetoOther(categoryId2, titleTwo)}>
            <Image
              style={styles.mobBea}
              source={{uri: resultTwoImage.imageUrl}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigatetoOther(categoryId3, titleThree)}>
            <Image
              style={styles.mobBea}
              source={{uri: resultThreeImage.imageUrl}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ProductBanners);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: responsiveScreenHeight(-4),
  },
  headTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveScreenHeight(2),
  },
  categories: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    marginLeft: responsiveScreenWidth(2),
  },
  viewAll: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#DB3D3D',
    marginRight: responsiveScreenWidth(30),
    marginTop: responsiveScreenHeight(1),
  },
  mob: {
    width: responsiveScreenWidth(48),
    height: responsiveScreenHeight(37),
    resizeMode: 'cover',
    borderRadius: responsiveScreenWidth(2),
    marginHorizontal: responsiveScreenWidth(2),
    marginVertical: responsiveScreenHeight(0.5),
  },
  mobBea: {
    marginVertical: responsiveScreenHeight(0.5),
    width: responsiveScreenWidth(45),
    height: responsiveScreenHeight(18),
    resizeMode: 'contain',
    borderRadius: responsiveScreenWidth(2),
  },
});
