import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,Modal,
  FlatList,
} from 'react-native';
const _ = require('lodash');
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../Header/Header';
import Banner from './Banner';
import ProductOne from './ProductOne';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {getAllIds} from '../../../redux/AllAction';
import {useSelector} from 'react-redux';
import ProductBanners from './ProductBanners';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Product from './Product';
import TopTrending from './TopTrending';
import TopBrands from './TopBrands';
import {useNavigation} from '@react-navigation/native';
import FlashDealBanner from './FlashDealBanner';
import {find} from 'lodash';
import FlashDealsProduct from './FlashDealsProducts';
import {fetchPerticularProduct} from '../../../redux/AllAction';
import FestiveEid from './FestiveEid';
import Makeup from './Makeup';
import ShanProducts from './ShanProducts';
import Chillers from './Chillers';
import Kitchen from './Kitchen';
import Airpods from './Airpods';
import BeautyBrand from './BeautyBrand';
import DairyCarousel from './DairyCarousel';
import LipDontLie from './LipDontLie';
import Cleaning from './Cleaning';
import BadBreath from './BadBreath';
import Splash from '../../Splash/Splash';
import Loader from './Loader.json';
import AnimatedModal from './AnimatedModal';
const Home = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  // const closeModal = () => {
  //   setModalVisible(false);
  // };
  const closeModal = useCallback(()=>{
    setModalVisible(false);
  },[modalVisible])
  const ViewAllProducts = (title, id) => {
    navigation.navigate('ViewRamdan', {title, id});
  };
  const homeState = useSelector(state => state.main);
  
  // const renderItem = ({item}) => {
  
  //   switch (item.identifier) {
  //     case 'SliderBox':
  //       const stateName = find(item.properties, {key: 'imageData'})?.value;

  //       return <Banner item={homeState[stateName]} />;
  //     case 'HorizontalCategoryList':
  //       const categories1 = find(item.properties, {
  //         key: 'categoryItem1',
  //       })?.value;

  //       const resultOneImage = categories1;

  //       const categories2 = find(item.properties, {
  //         key: 'categoryItem2',
  //       })?.value;
  //       const resultTwoImage = categories2;

  //       const categories3 = find(item.properties, {
  //         key: 'categoryItem3',
  //       })?.value;
  //       const resultThreeImage = categories3;
  //       return (<>
  //         <ProductBanners
  //           resultOneImage={resultOneImage}
  //           resultTwoImage={resultTwoImage}
  //           resultThreeImage={resultThreeImage}
  //           />
  //           </>
  //       );
  //     case 'wholesaleOffer':
  //       const wholeSale = find(item.properties, {key: 'title'})?.value;
  //       const wholeSales = find(item.properties, {key: 'params'})?.value;
  //       const title = wholeSales['title'];
  //       const categoryIdWholeSales = wholeSales['categoryId'];

  //       return (
  //         <View style={styles.product}>
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.categories}>
  //                 {title}{' '}
  //                 {/* <FontAwesome name={'hand-o-down'} color={'red'} size={20} /> */}
  //               </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() => navigation.navigate('WholeSale')}>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>

  //           <Product />
  //         </View>
  //       );
  //     case 'newArrivals':
  //       const newArrivals = find(item.properties, {key: 'title'})?.value;
  //       //console.log(newArrivals);
  //       return (
  //         <View style={styles.product}>
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.categories}>{newArrivals} </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() => navigation.navigate('NewArrivals')}>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <ProductOne />
  //           <View style={{flex: 1}}>
  //             <TopBrands />
  //           </View>
  //         </View>
  //       );
  //     case 'topTrendings':
  //       const topTrandings = find(item.properties, {key: 'title'})?.value;
  //       //console.log(topTrandings);
  //       return (
  //         <View style={styles.topPro}>
  //           <TouchableOpacity>
  //             <Text style={styles.topPro}>{topTrandings}</Text>
  //           </TouchableOpacity>
  //           <TopTrending />
  //         </View>
  //       );
  //     case 'homeBanner2':
  //       const flashDeals = find(item.properties, {key: 'bannerData'})?.value;
  //       const categoryIdFlashDeals = flashDeals['params'].categoryId;
  //       return <FlashDealBanner flashDeals={flashDeals['bannerUrl']} />;
  //     case 'productsCarousel':
  //       //const flashDealsProduct = find(item.data[0], {key: 'title'})?.value;
  //       const flashDealsProduct1 = find(item.data[0], {key: 'params'})?.value;
  //       const festiveEid = find(item.data[1], {key: 'params'})?.value;
  //       //console.log(festiveEid);
  //       const makeupCarousel = find(item.data[2], {key: 'params'})?.value;
  //       const shanCarousel = find(item.data[3], {key: 'params'})?.value;
  //       const beveragesCarousel = find(item.data[4], {key: 'params'})?.value;
  //       const kitchenCarousel = find(item.data[5], {key: 'params'})?.value;
  //       const beautyBrandsCarousel = find(item.data[6], {key: 'params'})?.value;
  //       const airpodsCarousel = find(item.data[7], {key: 'params'})?.value;
  //       const dairyCarousel = find(item.data[8], {key: 'params'})?.value;
  //       const lipsMakeupCarousel = find(item.data[9], {key: 'params'})?.value;
  //       const cleaningCarousel = find(item.data[10], {key: 'params'})?.value;
  //       const productsCarousel = find(item.data[11], {key: 'params'})?.value;
  //       const FlashDealsCategoryId = flashDealsProduct1['categoryId'];
  //       const FlashDealsTile = flashDealsProduct1['title'];
  //       const festivalEidCategoryId = festiveEid['categoryId'];
  //       const festivalEidTitle = festiveEid['title'];
  //       const makeupCategoryId = makeupCarousel['categoryId'];
  //       const makeupTitle = makeupCarousel['title'];
  //       const shanCarouselCategoryId = shanCarousel['categoryId'];
  //       const shanCarouselTitle = shanCarousel['title'];
  //       const beveragesCarouselCategoryId = beveragesCarousel['categoryId'];
  //       const beveragesCarouselTitle = beveragesCarousel['title'];
  //       const kitchenCarouselCategoryId = kitchenCarousel['categoryId'];
  //       const kitchenCarouselTitle = kitchenCarousel['title'];
  //       const airpodsCarouselCategoryId = airpodsCarousel['categoryId'];
  //       const airpodsCarouselTitle = airpodsCarousel['title'];
  //       const beautyBrandsCarouselCategoryId =
  //         beautyBrandsCarousel['categoryId'];
  //       const beautyBrandsCarouselTitle = beautyBrandsCarousel['title'];
  //       const dairyCarouselCategoryId = dairyCarousel['categoryId'];
  //       const dairyCarouselTitle = dairyCarousel['title'];
  //       const lipsMakeupCarouselCategoryId = lipsMakeupCarousel['categoryId'];
  //       const lipsMakeupCarouselTitle = lipsMakeupCarousel['title'];
  //       const cleaningCarouselCategoryId = cleaningCarousel['categoryId'];
  //       const cleaningCarouselTitle = cleaningCarousel['title'];
  //       const productsCarouselCategoryId = productsCarousel['categoryId'];
  //       const productsCarouselTitle = productsCarousel['title'];

  //       const flashDealsIntialState = flashDealsProduct1;

  //       const categoryId = FlashDealsCategoryId;
  //       //useEffect(() => {}, []);
  //       return (
  //         <View style={styles.product}>
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.categories}>
  //                 {flashDealsProduct1['title']}{' '}
  //               </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() =>
  //                 ViewAllProducts(flashDealsProduct1['title'], categoryId)
  //               }>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
            
  //           <FlashDealsProduct />
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.categories}>{festivalEidTitle} </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() =>
  //                 ViewAllProducts(festivalEidTitle, festivalEidCategoryId)
  //               }>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <FestiveEid title={festivalEidTitle} id={festivalEidCategoryId} />
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.categories}>{makeupTitle} </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() => ViewAllProducts(makeupTitle, makeupCategoryId)}>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <Makeup title={makeupTitle} id={makeupCategoryId} />
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.shanTxt}>{shanCarouselTitle} </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() =>
  //                 ViewAllProducts(shanCarouselTitle, shanCarouselCategoryId)
  //               }>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <ShanProducts
  //             title={shanCarouselTitle}
  //             id={shanCarouselCategoryId}
  //           />
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.categories}>{beveragesCarouselTitle} </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() =>
  //                 ViewAllProducts(
  //                   beveragesCarouselTitle,
  //                   beveragesCarouselCategoryId,
  //                 )
  //               }>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <Chillers
  //             title={beveragesCarouselTitle}
  //             id={beveragesCarouselCategoryId}
  //           />
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.categories}>{kitchenCarouselTitle} </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() =>
  //                 ViewAllProducts(
  //                   kitchenCarouselTitle,
  //                   kitchenCarouselCategoryId,
  //                 )
  //               }>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <Kitchen
  //             title={kitchenCarouselTitle}
  //             id={kitchenCarouselCategoryId}
  //           />
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.airpodsCarouselTitle}>
  //                 {airpodsCarouselTitle}{' '}
  //               </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() =>
  //                 ViewAllProducts(
  //                   airpodsCarouselTitle,
  //                   airpodsCarouselCategoryId,
  //                 )
  //               }>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <Airpods
  //             title={airpodsCarouselTitle}
  //             id={airpodsCarouselCategoryId}
  //           />
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.airpodsCarouselTitle}>
  //                 {beautyBrandsCarouselTitle}{' '}
  //               </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() =>
  //                 ViewAllProducts(
  //                   beautyBrandsCarouselTitle,
  //                   beautyBrandsCarouselCategoryId,
  //                 )
  //               }>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <BeautyBrand
  //             title={beautyBrandsCarouselTitle}
  //             id={beautyBrandsCarouselCategoryId}
  //           />
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.airpodsCarouselTitle}>
  //                 {dairyCarouselTitle}{' '}
  //               </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() =>
  //                 ViewAllProducts(dairyCarouselTitle, dairyCarouselCategoryId)
  //               }>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <DairyCarousel
  //             title={dairyCarouselTitle}
  //             id={dairyCarouselCategoryId}
  //           />
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.categories}>{lipsMakeupCarouselTitle}</Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() =>
  //                 ViewAllProducts(
  //                   lipsMakeupCarouselTitle,
  //                   lipsMakeupCarouselCategoryId,
  //                 )
  //               }>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <LipDontLie
  //             title={lipsMakeupCarouselTitle}
  //             id={lipsMakeupCarouselCategoryId}
  //           />
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.categories}>{cleaningCarouselTitle}</Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() =>
  //                 ViewAllProducts(
  //                   cleaningCarouselTitle,
  //                   cleaningCarouselCategoryId,
  //                 )
  //               }>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <Cleaning
  //             title={cleaningCarouselTitle}
  //             id={cleaningCarouselCategoryId}
  //           />
  //           <View style={styles.headTxt}>
  //             <TouchableOpacity>
  //               <Text style={styles.categories}>{productsCarouselTitle}</Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() =>
  //                 ViewAllProducts(
  //                   productsCarouselTitle,
  //                   productsCarouselCategoryId,
  //                 )
  //               }>
  //               <Text style={styles.viewAll}>
  //                 View all <AntDesign name="arrowright" size={20} />{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <BadBreath
  //             title={productsCarouselTitle}
  //             id={productsCarouselCategoryId}
  //           />
  //         </View>
  //       );

  //     default:
  //       break;
  //   }
  // };
  const renderItem =useCallback( ({item}) => {
  
    switch (item.identifier) {
      case 'SliderBox':
        const stateName = find(item.properties, {key: 'imageData'})?.value;

        return <Banner item={homeState[stateName]} />;
      case 'HorizontalCategoryList':
        const categories1 = find(item.properties, {
          key: 'categoryItem1',
        })?.value;

        const resultOneImage = categories1;

        const categories2 = find(item.properties, {
          key: 'categoryItem2',
        })?.value;
        const resultTwoImage = categories2;

        const categories3 = find(item.properties, {
          key: 'categoryItem3',
        })?.value;
        const resultThreeImage = categories3;
        return (<>
          <ProductBanners
            resultOneImage={resultOneImage}
            resultTwoImage={resultTwoImage}
            resultThreeImage={resultThreeImage}
            />
            </>
        );
      case 'wholesaleOffer':
        const wholeSale = find(item.properties, {key: 'title'})?.value;
        const wholeSales = find(item.properties, {key: 'params'})?.value;
        const title = wholeSales['title'];
        const categoryIdWholeSales = wholeSales['categoryId'];

        return (
          <View style={styles.product}>
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.categories}>
                  {title}{' '}
                  {/* <FontAwesome name={'hand-o-down'} color={'red'} size={20} /> */}
                </Text>
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
        //console.log(newArrivals);
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
        const festiveEid = find(item.data[1], {key: 'params'})?.value;
        //console.log(festiveEid);
        const makeupCarousel = find(item.data[2], {key: 'params'})?.value;
        const shanCarousel = find(item.data[3], {key: 'params'})?.value;
        const beveragesCarousel = find(item.data[4], {key: 'params'})?.value;
        const kitchenCarousel = find(item.data[5], {key: 'params'})?.value;
        const beautyBrandsCarousel = find(item.data[6], {key: 'params'})?.value;
        const airpodsCarousel = find(item.data[7], {key: 'params'})?.value;
        const dairyCarousel = find(item.data[8], {key: 'params'})?.value;
        const lipsMakeupCarousel = find(item.data[9], {key: 'params'})?.value;
        const cleaningCarousel = find(item.data[10], {key: 'params'})?.value;
        const productsCarousel = find(item.data[11], {key: 'params'})?.value;
        const FlashDealsCategoryId = flashDealsProduct1['categoryId'];
        const FlashDealsTile = flashDealsProduct1['title'];
        const festivalEidCategoryId = festiveEid['categoryId'];
        const festivalEidTitle = festiveEid['title'];
        const makeupCategoryId = makeupCarousel['categoryId'];
        const makeupTitle = makeupCarousel['title'];
        const shanCarouselCategoryId = shanCarousel['categoryId'];
        const shanCarouselTitle = shanCarousel['title'];
        const beveragesCarouselCategoryId = beveragesCarousel['categoryId'];
        const beveragesCarouselTitle = beveragesCarousel['title'];
        const kitchenCarouselCategoryId = kitchenCarousel['categoryId'];
        const kitchenCarouselTitle = kitchenCarousel['title'];
        const airpodsCarouselCategoryId = airpodsCarousel['categoryId'];
        const airpodsCarouselTitle = airpodsCarousel['title'];
        const beautyBrandsCarouselCategoryId =
          beautyBrandsCarousel['categoryId'];
        const beautyBrandsCarouselTitle = beautyBrandsCarousel['title'];
        const dairyCarouselCategoryId = dairyCarousel['categoryId'];
        const dairyCarouselTitle = dairyCarousel['title'];
        const lipsMakeupCarouselCategoryId = lipsMakeupCarousel['categoryId'];
        const lipsMakeupCarouselTitle = lipsMakeupCarousel['title'];
        const cleaningCarouselCategoryId = cleaningCarousel['categoryId'];
        const cleaningCarouselTitle = cleaningCarousel['title'];
        const productsCarouselCategoryId = productsCarousel['categoryId'];
        const productsCarouselTitle = productsCarousel['title'];

        const flashDealsIntialState = flashDealsProduct1;

        const categoryId = FlashDealsCategoryId;
        //useEffect(() => {}, []);
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
                  ViewAllProducts(flashDealsProduct1['title'], categoryId)
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />
                </Text>
              </TouchableOpacity>
            </View>
            
            <FlashDealsProduct />
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.categories}>{festivalEidTitle} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  ViewAllProducts(festivalEidTitle, festivalEidCategoryId)
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <FestiveEid title={festivalEidTitle} id={festivalEidCategoryId} />
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.categories}>{makeupTitle} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => ViewAllProducts(makeupTitle, makeupCategoryId)}>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <Makeup title={makeupTitle} id={makeupCategoryId} />
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.shanTxt}>{shanCarouselTitle} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  ViewAllProducts(shanCarouselTitle, shanCarouselCategoryId)
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <ShanProducts
              title={shanCarouselTitle}
              id={shanCarouselCategoryId}
            />
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.categories}>{beveragesCarouselTitle} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  ViewAllProducts(
                    beveragesCarouselTitle,
                    beveragesCarouselCategoryId,
                  )
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <Chillers
              title={beveragesCarouselTitle}
              id={beveragesCarouselCategoryId}
            />
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.categories}>{kitchenCarouselTitle} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  ViewAllProducts(
                    kitchenCarouselTitle,
                    kitchenCarouselCategoryId,
                  )
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <Kitchen
              title={kitchenCarouselTitle}
              id={kitchenCarouselCategoryId}
            />
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.airpodsCarouselTitle}>
                  {airpodsCarouselTitle}{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  ViewAllProducts(
                    airpodsCarouselTitle,
                    airpodsCarouselCategoryId,
                  )
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <Airpods
              title={airpodsCarouselTitle}
              id={airpodsCarouselCategoryId}
            />
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.airpodsCarouselTitle}>
                  {beautyBrandsCarouselTitle}{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  ViewAllProducts(
                    beautyBrandsCarouselTitle,
                    beautyBrandsCarouselCategoryId,
                  )
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <BeautyBrand
              title={beautyBrandsCarouselTitle}
              id={beautyBrandsCarouselCategoryId}
            />
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.airpodsCarouselTitle}>
                  {dairyCarouselTitle}{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  ViewAllProducts(dairyCarouselTitle, dairyCarouselCategoryId)
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <DairyCarousel
              title={dairyCarouselTitle}
              id={dairyCarouselCategoryId}
            />
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.categories}>{lipsMakeupCarouselTitle}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  ViewAllProducts(
                    lipsMakeupCarouselTitle,
                    lipsMakeupCarouselCategoryId,
                  )
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <LipDontLie
              title={lipsMakeupCarouselTitle}
              id={lipsMakeupCarouselCategoryId}
            />
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.categories}>{cleaningCarouselTitle}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  ViewAllProducts(
                    cleaningCarouselTitle,
                    cleaningCarouselCategoryId,
                  )
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <Cleaning
              title={cleaningCarouselTitle}
              id={cleaningCarouselCategoryId}
            />
            <View style={styles.headTxt}>
              <TouchableOpacity>
                <Text style={styles.categories}>{productsCarouselTitle}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  ViewAllProducts(
                    productsCarouselTitle,
                    productsCarouselCategoryId,
                  )
                }>
                <Text style={styles.viewAll}>
                  View all <AntDesign name="arrowright" size={20} />{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <BadBreath
              title={productsCarouselTitle}
              id={productsCarouselCategoryId}
            />
          </View>
        );

      default:
        break;
    }
  },[homeState.homeLayout])
  return (
    <View style={styles.containerParent}>
      <View style={styles.header}>
        <StatusBar backgroundColor={'#0B223F'} />
        <Header />
      </View>
      
      <TouchableOpacity onPress={()=> setModalVisible(true)}  style={styles.spinner}><Text style={styles.spinnerTxt}>Spinner</Text></TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          {/* Render the custom content component */}
          <AnimatedModal closeModal={closeModal} />
        </View>
      </Modal>
      <FlatList
        data={homeState.homeLayout}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
     
      />
    </View>
  );
};

export default React.memo(Home);

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
    position:'relative'
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
  airpodsCarouselTitle: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#305586',
    marginLeft: responsiveScreenWidth(2),
  },
  shanTxt: {
    fontSize: responsiveScreenFontSize(2.4),
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
  spinner:{
    width:responsiveScreenWidth(20),
    height:responsiveScreenHeight(5),
   // padding:responsiveScreenWidth(5),
    borderRadius:responsiveScreenWidth(40),
    backgroundColor:'#F9C21A',
    position:'absolute',
    top:responsiveScreenHeight(80),
    left:responsiveScreenWidth(78),
    zIndex:20,
    justifyContent:'center',
    alignItems:'center'
  },
  spinnerTxt:{
    fontFamily: 'Poppins-Bold',
    color: '#305586',
  },
  modalContainer: {
  height:responsiveScreenHeight(30),
marginTop:responsiveScreenHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignItems:'center',
    width:responsiveScreenWidth(90),
    alignSelf:'center',
    borderRadius:responsiveScreenWidth(7)
  
   
  },
});
//This is updated Project
