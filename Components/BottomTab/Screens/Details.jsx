import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
//import AntDesign from 'react-native-vector-icons/dist/Ionicons';
import {addToCart} from '../../../redux/AllAction';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {fetchPerticularProduct} from '../../../redux/AllAction';
import {legacy_createStore} from 'redux';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {find} from 'lodash';
import {useEffect} from 'react';
const Details = () => {
  const [showView, setShowView] = useState(true);
  const [showDes, setShowDes] = useState(false);
  const [rating, setRating] = useState(0);
  const [showSpec, setShowSpec] = useState(false);
  const [column, setColumn] = useState(2);
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const particularCategories = useSelector(state => state.main.categories);
  const {item} = route.params;
  const cartProducts = useSelector(state => state.main.cartItems);
  useEffect(() => {
    dispatch(fetchPerticularProduct(item.categoryId));
  }, []);
  const discount = (item.minPrice * item.getValue) / 100;
  const finalPrice = Math.round(item.minPrice - discount);
  const point = item.bulletPoint;
  const description = item.description;

  const pointsArray = point.split(',');
  const handleAddToCart = item => {
    const productDetails = {
      imageUrl: item.imageUrl,
      brand: item.brand,
      title: item.title,
      minPrice: item.minPrice,
      purchaseLimit: item.purchaseLimit,
      productId: item.productId,
      quantity: 1,
    };
    dispatch(addToCart(productDetails));
  };
  const scrollViewRef = useRef(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItemHeader = () => {
    return (
      <View style={{flex: 1}}>
        <View>
          <Image style={styles.brandImage} source={{uri: item.imageUrl}} />
          {item.getValue === null ? null : (
            <Text style={styles.discount}>Discount {item.getValue}%</Text>
          )}
          <TouchableOpacity style={styles.share}>
            <Entypo name={'share'} color={'black'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.heart}>
            <AntDesign name={'hearto'} color={'red'} size={25} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.Descri}>{item.brand}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.prices}>
            {item.getValue === null ? null : (
              <Text style={styles.finalPrices}>Rs {item.minPrice}</Text>
            )}
            <Text style={styles.minPrice}>Rs {finalPrice}</Text>
            <Text style={styles.review}>{item.Review}</Text>
            {item.avgRating ? (
              <Text style={styles.avgRating}>
                <Entypo name={'star'} color={'#F9C21A'} size={20} />
                {item.avgRating}
              </Text>
            ) : null}
          </View>
        </View>
        <View>
          <Text style={styles.hightLight}>Highlights </Text>
          <TouchableOpacity
            style={styles.down}
            onPress={() => setShowView(!showView)}>
            {showView ? (
              <AntDesign
                style={styles.arrows}
                name={'up'}
                color="black"
                size={15}
              />
            ) : (
              <AntDesign
                style={styles.arrows}
                name={'down'}
                color="black"
                size={15}
              />
            )}
          </TouchableOpacity>
        </View>
        {showView ? (
          <View>
            {pointsArray.map((point, index) => (
              <Text style={styles.bullets} key={index}>
                <Ionicons name={'checkmark-circle'} color={'green'} size={20} />{' '}
                {point.trim()}
              </Text>
            ))}
          </View>
        ) : null}
        <View>
          <Text style={styles.hightLight}>Description </Text>
          <TouchableOpacity
            style={styles.down}
            onPress={() => setShowDes(!showDes)}>
            {showDes ? (
              <AntDesign
                style={styles.arrows}
                name={'up'}
                color="black"
                size={15}
              />
            ) : (
              <AntDesign
                style={styles.arrows}
                name={'down'}
                color="black"
                size={15}
              />
            )}
          </TouchableOpacity>
        </View>
        {showDes ? (
          <View>
            <Text style={styles.Des}>{item.description}</Text>
          </View>
        ) : null}
        <View>
          <Text style={styles.hightLight}>Specifications </Text>
          <TouchableOpacity
            style={styles.down}
            onPress={() => setShowSpec(!showSpec)}>
            {showSpec ? (
              <AntDesign
                style={styles.arrows}
                name={'up'}
                color="black"
                size={15}
              />
            ) : (
              <AntDesign
                style={styles.arrows}
                name={'down'}
                color="black"
                size={15}
              />
            )}
          </TouchableOpacity>
        </View>
        {showSpec ? (
          <View>
            {pointsArray.map((point, index) => (
              <Text style={styles.bullets} key={index}>
                {point.trim()}
              </Text>
            ))}
          </View>
        ) : null}
        {item.avgRating >= 4 ? (
          <View style={{alignItems: 'center'}}>
            <View style={styles.starView}>
              <View>
                <View>
                  <Text style={styles.avg}>{item.avgRating}</Text>
                  <Text style={styles.numOfReview}>
                    Based On {item.numberOfReview} Reviews
                  </Text>
                  <View style={styles.starsParent}>
                    <Entypo name={'star'} color={'#F9C21A'} size={20} />
                    <Entypo name={'star'} color={'#F9C21A'} size={20} />
                    <Entypo name={'star'} color={'#F9C21A'} size={20} />
                    <Entypo name={'star'} color={'#F9C21A'} size={20} />
                    <Entypo name={'star'} color={'#F9C21A'} size={20} />
                  </View>
                </View>

                <View style={styles.numOfStars}>
                  <Text style={styles.countOfStars}>5 Stars</Text>
                  <Text style={styles.countOfStars}>4 Stars</Text>
                  <Text style={styles.countOfStars}>3 Stars</Text>
                  <Text style={styles.countOfStars}>2 Stars</Text>
                  <Text style={styles.countOfStars}>1 Stars</Text>
                </View>
              </View>
            </View>
          </View>
        ) : null}
        <View>
          <Text style={styles.hightLight}>Reviews </Text>
          <TouchableOpacity
            style={styles.down}
            onPress={() => setShowSpec(!showSpec)}>
            <AntDesign
              style={styles.arrows}
              name={'right'}
              color="black"
              size={15}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.similarProducts}>Similar Products</Text>
      </View>
    );
  };
  const renderItem = ({item}) => {
    const searchCriteria = element => element.productId == item.productId;
    const foundElement = find(cartProducts, searchCriteria);
    return (
      <View style={{flex: 1}}>
        <View style={styles.contain}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {item})}>
            <Image style={styles.productImages} source={{uri: item.imageUrl}} />
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.prices}>Rs .{item.minPrice}</Text>
          </TouchableOpacity>
          <View style={styles.icons}>
            <TouchableOpacity
              style={{
                width: responsiveScreenWidth(15),
                borderRadius: responsiveScreenWidth(2),
                height: responsiveScreenHeight(4),
                backgroundColor: foundElement ? '#00D84A' : '#F9C21A',
              }}
              onPress={() => handleAddToCart(item)}>
              <AntDesign
                style={styles.shoppingCarts}
                color={'#0B223F'}
                name={'shoppingcart'}
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                style={styles.hearto}
                color={'#0B223F'}
                name={'hearto'}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerOfShoppingCart}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BottomNavigation')}>
            <Ionicons
              name="chevron-back"
              style={styles.arrow}
              size={20}
              color={'#fff'}
            />
          </TouchableOpacity>
          <Text style={styles.shoppingCart}>Product Detail</Text>
        </View>
      </View>
      <FlatList
        data={particularCategories}
        numColumns={column}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListHeaderComponent={renderItemHeader}
      />
      <View style={styles.footer}>
        <View style={styles.addAndLess}>
          <TouchableOpacity>
            <Text style={styles.min}>
              <AntDesign name={'minus'} size={20} color={'#0B223F'} />
            </Text>
          </TouchableOpacity>
          <Text style={styles.countProduct}>1</Text>
          <Text style={styles.plus}>
            <AntDesign
              name={'plus'}
              style={styles.plus}
              //style={{marginTop: responsiveScreenHeight(10)}}
              size={20}
              color={'#0B223F'}
            />
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => handleAddToCart(item)}
          style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerOfShoppingCart: {
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(100),
    backgroundColor: '#0B223F',

    top: 0,
    zIndex: 5,
    //    position: 'absolute',
    top: 0,
    left: 0,
  },
  arrow: {
    top: responsiveScreenHeight(2),
    left: responsiveScreenWidth(5),
  },
  shoppingCart: {
    fontSize: responsiveScreenFontSize(2),
    color: '#fff',
    left: responsiveScreenWidth(7),
    top: responsiveScreenHeight(1.7),
    fontFamily: 'Poppins-Bold',
  },
  brandImage: {
    width: '100%',
    height: responsiveScreenHeight(30),
    position: 'relative',
    //marginTop: responsiveScreenHeight(5),
    resizeMode: 'contain',
    backgroundColor: '#fff',
    borderBottomLeftRadius: responsiveScreenHeight(5),
    borderBottomRightRadius: responsiveScreenHeight(5),
  },
  heart: {
    position: 'absolute',
    left: responsiveScreenWidth(90),
    top: responsiveScreenHeight(2),
  },
  share: {
    position: 'absolute',
    left: responsiveScreenWidth(90),
    top: responsiveScreenHeight(5),
  },
  discount: {
    backgroundColor: '#DB3D3D',
    padding: responsiveScreenHeight(1),
    width: responsiveScreenWidth(25),
    color: '#fff',
    borderTopRightRadius: responsiveScreenWidth(4),
    borderBottomRightRadius: responsiveScreenWidth(4),
    position: 'absolute',
    top: responsiveScreenHeight(1),
  },
  Descri: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(2),
    marginTop: responsiveScreenHeight(1),
    marginLeft: responsiveScreenWidth(2),
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(1),
    color: 'black',
    marginTop: responsiveScreenHeight(0),
    marginLeft: responsiveScreenWidth(2),
  },
  minPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(2),
    color: '#305586',
    marginLeft: responsiveScreenWidth(1.5),
  },
  finalPrices: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(1.5),
    color: 'grey',
    textDecorationLine: 'line-through',
    textDecorationColor: 'grey',
    marginLeft: responsiveScreenWidth(1.5),
    marginTop: responsiveScreenHeight(0.5),
  },
  prices: {
    flexDirection: 'row',
  },
  review: {
    fontSize: 20,
  },
  avgRating: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    marginLeft: responsiveScreenWidth(60),
  },
  hightLight: {
    marginTop: responsiveScreenHeight(1),
    color: '#305586',
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Bold',
    marginLeft: responsiveScreenWidth(5),
    borderBottomWidth: 0.5,
    borderColor: '#0B223F',
    width: responsiveScreenWidth(90),
    marginBottom: responsiveScreenHeight(0.5),
  },
  down: {
    // marginRight: responsiveScreenWidth(10),
    position: 'absolute',
    right: responsiveScreenWidth(10),
    top: responsiveScreenHeight(2),
  },
  bullets: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Light',
    marginLeft: responsiveScreenWidth(6),
    marginTop: responsiveScreenHeight(2),
    fontWeight: 'bold',
    color: '#0B223F',
    // backgroundColor: 'red',
  },
  Des: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Light',
    marginLeft: responsiveScreenWidth(6),
    marginTop: responsiveScreenHeight(2),
    fontWeight: 'bold',
    color: '#0B223F',
  },
  arrows: {
    position: 'absolute',
    top: responsiveScreenHeight(-1),
  },
  starView: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(18),
    backgroundColor: '#fff',
    borderRadius: responsiveScreenWidth(5),
    marginTop: responsiveScreenHeight(1),
  },
  avg: {
    fontSize: responsiveScreenFontSize(4),
    color: 'black',
    marginTop: responsiveScreenHeight(2),
    marginLeft: responsiveScreenWidth(4),
    fontFamily: 'Poppins-Bold',
  },
  starsParent: {
    flexDirection: 'row',
    marginLeft: responsiveScreenWidth(2),
  },
  numOfReview: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    marginLeft: responsiveScreenWidth(2),
  },
  countOfStars: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Bold',
  },
  numOfStars: {
    position: 'absolute',
    top: responsiveScreenHeight(5),
    right: responsiveScreenWidth(10),
  },
  similarProducts: {
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Bold',
    color: '#0B223F',
    marginLeft: responsiveScreenWidth(4),
    marginTop: responsiveScreenHeight(2),
  },
  productImages: {
    width: responsiveScreenWidth(45),
    height: responsiveScreenHeight(30),
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  brand: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#0B223F',
    marginLeft: responsiveScreenWidth(2),
  },
  prices: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#0B223F',
    marginLeft: responsiveScreenWidth(2),
    flexDirection: 'row',
  },
  shoppingCarts: {
    //padding: responsiveScreenWidth(2),
    borderRadius: responsiveScreenHeight(1),
    //height: responsiveScreenHeight(5),
    paddingHorizontal: responsiveScreenWidth(4),
    //backgroundColor: '#F9C21A',
    marginBottom: responsiveScreenHeight(1),
  },
  hearto: {
    padding: responsiveScreenWidth(2),
    borderRadius: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(4),
    backgroundColor: '#F1F5F9',
  },
  contain: {
    backgroundColor: '#fff',
    width: responsiveScreenWidth(45),
    borderRadius: responsiveScreenWidth(2),
    marginVertical: responsiveScreenHeight(1),
    marginHorizontal: responsiveScreenWidth(2),
    //marginLeft: responsiveScreenWidth(5),
  },
  footer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(10),
    backgroundColor: '#0B223F',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: responsiveScreenWidth(5),
    borderTopRightRadius: responsiveScreenWidth(5),
  },
  addBtn: {
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(5),
    borderRadius: responsiveScreenWidth(1),
    backgroundColor: '#F9C21A',
    top: responsiveScreenHeight(3),
    right: responsiveScreenWidth(10),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    //bottom: 5,
    //padding: responsiveScreenWidth(5),
  },
  addBtnText: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(2),
    color: '#0B223F',
  },
  addAndLess: {
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(3),
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: responsiveScreenWidth(2),
    position: 'relative',
    top: responsiveScreenHeight(3),
    //left: responsiveScreenWidth(1),
    left: responsiveScreenWidth(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countProduct: {
    color: '#F9C21A',
    fontSize: responsiveScreenFontSize(2),
    position: 'absolute',
    left: responsiveScreenWidth(9),
  },
  plus: {
    // position: 'absolute',
    // left: responsiveScreenWidth(0),
    // top: responsiveScreenHeight(5),
    marginTop: responsiveScreenHeight(0.5),
  },
  min: {
    //position: 'absolute',
    //left: responsiveScreenWidth(10),
    //top: responsiveScreenHeight(-1),
    marginTop: responsiveScreenHeight(0.5),
  },
});
