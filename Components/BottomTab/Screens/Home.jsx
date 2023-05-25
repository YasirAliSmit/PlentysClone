import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
const _ = require('lodash');
import React, {useEffect, useState} from 'react';
import Header from '../../Header/Header';
import Banner from './Banner';
import ProductOne from './ProductOne';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';
import ProductBanners from './ProductBanners';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Product from './Product';
import TopTrending from './TopTrending';
import TopBrands from './TopBrands';
import {useNavigation} from '@react-navigation/native';
import FlashDealBanner from './FlashDealBanner';
import {find} from 'lodash';
import FlashDealsProduct from './FlashDealsProducts';
import {fetchPerticularProduct} from '../../../redux/AllAction';
const Home = () => {
  const navigation = useNavigation();
  const [flashDealId, setflashDealId] = useState();
  const ViewAllProducts = (title, id) => {
    console.log('View all Products');
    navigation.navigate('ViewRamdan', {title, id});
  };
  //homestate[findState.value]
  const homeState = useSelector(state => state.main);
  //console.log('homeState=>', homeState);
  useEffect(() => {}, []);
  const renderItem = ({item}) => {
    switch (item.identifier) {
      case 'SliderBox':
        const stateName = find(item.properties, {key: 'imageData'})?.value;
        //console.log('this console from stateName', stateName);
        return <Banner item={homeState[stateName]} />;
      case 'HorizontalCategoryList':
        const categories1 = find(item.properties, {
          key: 'categoryItem1',
        })?.value;
        //console.log(categories1);
        const resultOneImage = categories1;

        const categories2 = find(item.properties, {
          key: 'categoryItem2',
        })?.value;
        const resultTwoImage = categories2;

        const categories3 = find(item.properties, {
          key: 'categoryItem3',
        })?.value;
        const resultThreeImage = categories3;
        return (
          <ProductBanners
            resultOneImage={resultOneImage}
            resultTwoImage={resultTwoImage}
            resultThreeImage={resultThreeImage}
          />
        );
      // case 'seasonDeals':
      //   const wholeSale = find(item.properties, {key: 'title'})?.value;
      //   const wholeSales = find(item.properties, {key: 'title'})?.value;
      //   console.log('this console for a wholsale offer =>', wholeSales);
      //   return (
      //     <View style={styles.product}>
      //       <View style={styles.headTxt}>
      //         <TouchableOpacity>
      //           <Text style={styles.categories}>{wholeSale} </Text>
      //         </TouchableOpacity>
      //         <TouchableOpacity onPress={() => ViewAllProducts()}>
      //           <Text style={styles.viewAll}>
      //             View all <AntDesign name="arrowright" size={20} />{' '}
      //           </Text>
      //         </TouchableOpacity>
      //       </View>

      //       <Product />
      //     </View>
      //   );
      case 'wholesaleOffer':
        const wholeSale = find(item.properties, {key: 'title'})?.value;
        const wholeSales = find(item.properties, {key: 'params'})?.value;
        const title = wholeSales['title'];
        const categoryIdWholeSales = wholeSales['categoryId'];
        console.log(
          'this console for a  categoryWholeSales',
          categoryIdWholeSales,
        );
        return (
          <View style={styles.product}>
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.categories}>{title} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('WholeSale')}>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>

            <Product />
          </View>
        );
      case 'newArrivals':
        const newArrivals = find(item.properties, {key: 'title'})?.value;
        console.log(newArrivals);
        return (
          <View style={styles.product}>
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.categories}>{newArrivals} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('NewArrivals')}>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <ProductOne />
            <View style={{flex: 1}}>
              <TopBrands />
            </View>
          </View>
        );
      case 'topTrendings':
        const topTrandings = find(item.properties, {key: 'title'})?.value;
        //console.log(topTrandings);
        return (
          <View style={styles.topPro}>
            <TouchableOpacity>
              <Text style={styles.topPro}>{topTrandings}</Text>
            </TouchableOpacity>
            <TopTrending />
          </View>
        );
      case 'homeBanner2':
        const flashDeals = find(item.properties, {key: 'bannerData'})?.value;
        const categoryIdFlashDeals = flashDeals['params'].categoryId;
        return <FlashDealBanner flashDeals={flashDeals['bannerUrl']} />;
      case 'productsCarousel':
        //const flashDealsProduct = find(item.data[0], {key: 'title'})?.value;
        const flashDealsProduct1 = find(item.data[0], {key: 'params'})?.value;
        // console.log('this console for flashDealsProductss', item.data[0]);

        const childId = flashDealsProduct1['categoryId'];
        //console.log(childId);
        return (
          <View style={styles.product}>
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.categories}>
                  {flashDealsProduct1['title']}{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  ViewAllProducts(flashDealsProduct1['title'], childId)
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>

            <FlashDealsProduct />
          </View>
        );
      default:
        break;
    }
  };

  return (
    <View style={styles.containerParent}>
      <View style={styles.header}>
        <StatusBar backgroundColor={'#0B223F'} />
        <Header />
      </View>
      <FlatList
        data={homeState.homeLayout}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        // renderItem={({item}) => {
        //   // console.log(item);
        //   return (
        //     <View>
        //       <View style={styles.container}>
        //         <Banner item={item} />
        //       </View>
        //       <View style={styles.bannerProduct}>
        //         <ProductBanners />
        //       </View>
        //       <View style={styles.product}>
        //         <View style={styles.headTxt}>
        //           <TouchableOpacity>
        //             <Text style={styles.categories}>Ramadan Deals </Text>
        //           </TouchableOpacity>
        //           <TouchableOpacity
        //             onPress={() => navigation.navigate('ViewRamdan')}>
        //             <Text style={styles.viewAll}>
        //               View all <AntDesign name="arrowright" size={20} />{' '}
        //             </Text>
        //           </TouchableOpacity>
        //         </View>
        //         <Product />
        //       </View>
        // <View style={styles.product}>
        //   <View style={styles.headTxt}>
        //     <TouchableOpacity>
        //       <Text style={styles.categories}>New Arrivals </Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity>
        //       <Text style={styles.viewAll}>
        //         View all <AntDesign name="arrowright" size={20} />{' '}
        //       </Text>
        //     </TouchableOpacity>
        //   </View>
        //   <ProductOne />
        // </View>
        //       <View style={{flex: 1}}>
        //         <TopBrands />
        //       </View>
        //       <View style={styles.topPro}>
        //         <TouchableOpacity>
        //           <Text style={styles.topPro}>Top Tranding </Text>
        //         </TouchableOpacity>
        //         <TopTrending />
        //       </View>
        //     </View>
        //   );
        // }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    position: 'relative',
    top: responsiveScreenHeight(4.5),
  },
  bannerProduct: {
    flex: 1,
    position: 'relative',
    top: responsiveScreenHeight(2),
    width: '100%',
  },
  product: {
    flex: 1,
    top: responsiveScreenHeight(4),
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 0,

    left: 0,
    zIndex: 2,
  },

  headTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveScreenHeight(0),
    marginBottom: responsiveScreenHeight(2),
  },
  categories: {
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    marginLeft: responsiveScreenWidth(2),
  },
  viewAll: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#DB3D3D',
    marginRight: responsiveScreenWidth(30),
    marginTop: responsiveScreenHeight(0.5),
  },
  topProd: {},
  topPro: {
    marginTop: responsiveScreenHeight(2),
    marginBottom: responsiveScreenHeight(5),
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    marginLeft: responsiveScreenWidth(2),
  },
});
