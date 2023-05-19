import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useSelector} from 'react-redux';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  useResponsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
const Categories = () => {
  const navigation = useNavigation();

  const [minNumSeq, setMinNumSeq] = useState([]);
  const [showCateg, setShowCateg] = useState([]);
  const [selectedKey, setSelectedKey] = useState('1949');
  const products = useSelector(state => state.main.allCategorys);
  const [selectedName, setSelectedName] = useState('');
  const [selectColor, setSelectColor] = useState(true);
  const key1Value = products['1'];
  const key3Value = products['111'];
  const key2Value = products[selectedKey];
  const [nameStates, setNameStates] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleToggle = name => {
    setNameStates(prevStates => ({
      ...prevStates,
      [name]: !prevStates[name],
    }));
  };

  const minimum = key1Value.reduce((previousNumber, currentNumber) => {
    if (currentNumber.sequence < previousNumber.sequence) {
      return currentNumber;
    } else {
      return previousNumber;
    }
  }, key1Value[0]);

  useEffect(() => {
    setMinNumSeq(minimum.sequence);
    //console.log('this console =>', key3Value);
  }, []);

  const renderItem = ({item}) => {
    const handleNamePress = name => {
      setSelectedName(name);
    };
    function navigateToOther(item) {
      handleNamePress(item);
      setSelectColor(false);
      if (!products[item.childId]) {
        navigation.navigate('ProductOfCategories');
      } else {
        setSelectedKey(item.childId);
      }
      // if (item == 'Plentys Mart') {
      //   setSelectColor(false);
      // } else {
      //   setSelectColor(true);
      // }
    }
    return (
      <View
        style={{
          width: responsiveScreenWidth(35),
          height: responsiveScreenHeight(10),
          borderWidth: 1,
          borderColor: '#CBD5E1',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: item === selectedName ? '#F9C21A' : '#E2E8F0',
        }}>
        <TouchableOpacity
          onPress={() => setSelectColor(false)}
          style={
            selectColor && item.name === 'Plentys Mart'
              ? {
                  backgroundColor: '#F9C21A',
                  padding: responsiveScreenWidth(5),
                  paddingVertical: responsiveScreenHeight(4),
                }
              : null
          }>
          <Text
            onPress={() => navigateToOther(item)}
            style={{
              fontSize: responsiveScreenFontSize(1.5),
              fontFamily: 'Poppins-Bold',
              color: '#0B223F',
              textAlign: 'center',
              width: responsiveScreenWidth(22),
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItemOne = ({item}) => {
    const categoriesOfProduct = products[item.childId];
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            width: responsiveScreenWidth(70),
            marginTop: responsiveScreenHeight(2),
          }}>
          <Text style={styles.name}>{item.name}</Text>

          {!products[item.childId] ? (
            <AntDesign
              size={15}
              style={styles.right}
              name={'right'}
              color={'#0B223F'}
            />
          ) : (
            <TouchableOpacity style={styles.right}>
              <AntDesign
                size={15}
                name={nameStates[item.name] ? 'up' : 'down'}
                color={'#0B223F'}
                onPress={() => handleToggle(item.name)}
              />
            </TouchableOpacity>
          )}
        </View>
        {nameStates[item.name] && (
          <View item={item.name} style={styles.boxContainer}>
            <View style={[styles.boxHide]}>
              {categoriesOfProduct.map(item => {
                return (
                  <View
                    style={
                      {
                        //   //flex: 1,
                        //   //flexDirection: 'row',
                        //   //flexWrap: 'wrap',
                        // backgroundColor: 'red',
                        //width: responsiveScreenWidth(100),
                      }
                    }
                    key={item.id}>
                    <View
                      style={
                        {
                          //flex: 1,
                          // flexDirection: 'row',
                          // flexWrap: 'wrap',
                          // backgroundColor: 'red',
                          // // width: responsiveScreenWidth(40),
                        }
                      }>
                      <Image
                        style={styles.images}
                        source={{uri: item.mobileImageUrl}}
                      />
                      <Text style={styles.cateTxt}>{item.description}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </>
    );
  };
  function Header() {
    return (
      <View
        style={{
          height: responsiveScreenHeight(8),
          backgroundColor: '#0B223F',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: responsiveScreenFontSize(3),
              fontFamily: 'Poppins-Bold',
              marginLeft: responsiveScreenWidth(10),
            }}>
            Categories
          </Text>
          <AntDesign
            name="search1"
            style={{marginLeft: responsiveScreenWidth(40)}}
            size={30}
            color="#fff"
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#0B223F'} />
      <Header />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{width: 120}}>
          <FlatList
            data={key1Value}
            style={{borderLeftWidth: 0}}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={{flex: 1, alignItems: 'flex-start', paddingLeft: 10}}>
          <View style={{}}>
            <Text style={styles.shopAll}>Shop all</Text>
            <AntDesign
              size={15}
              style={styles.righttop}
              name={'right'}
              color={'#0B223F'}
            />
            <FlatList data={key2Value} renderItem={renderItemOne} />
          </View>
        </View>
      </View>
    </View>
  );
};

// main view
// 2 views
// left and right

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: responsiveScreenWidth(35),
    height: responsiveScreenHeight(10),
    borderWidth: 1,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2E8F0',
    //backgroundColor: 'red',
  },
  txt: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Bold',
    color: '#0B223F',
    //backgroundColor: 'red',
    padding: responsiveScreenWidth(5),
    //fontWeight: 'bold',
    //color: 'black',
  },
  Categories: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
  },
  name: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Light',
    //color: '#fff',
    color: '#284975',
    marginTop: responsiveScreenHeight(1),
    marginLeft: responsiveScreenWidth(2),
    // position: 'absolute',
    // left: 0,
    // top: 10,
    // zIndex: 999,
    // left: -10,
    // right: 0,
    // zIndex: 999,

    // position: 'absolute',
    // top: 0,
    // left: 5,
    // zIndex: 1,
    //left: 0,
    //backgroundColor: 'red',
    //marginRight: responsiveScreenWidth(-5),
    //marginBottom: 5,
    //marginTop: responsiveScreenHeight(1),
  },
  right: {
    position: 'absolute',
    //right: 10,
    top: responsiveScreenHeight(1),
    left: responsiveScreenWidth(55),
    //zIndex: 2,
    // marginLeft: responsiveScreenWidth(20),
    // marginTop: responsiveScreenHeight(1.5),
  },
  righttop: {
    //position: 'absolute',
    //right: responsiveScreenWidth(5),
    //top: 0,
    //right: 0,
    //zIndex: 2,
    //marginLeft: responsiveScreenWidth(8),
    //marginTop: responsiveScreenHeight(0.5),
    left: responsiveScreenWidth(55),
    //marginTop: responsiveScreenHeight(2),
  },
  shopAll: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#0B223F',
    //marginLeft: responsiveScreenWidth(4),
    left: responsiveScreenWidth(3),
    top: responsiveScreenHeight(3),
    //marginTop: 5,
    //position: 'absolute',
    //left: responsiveScreenWidth(47),
    // marginTop: responsiveScreenHeight(1),
  },
  boxHide: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //top: responsiveScreenHeight(2),
    //right: 60,
    //maxWidth: responsiveScreenWidth(50),
    //backgroundColor: 'red',
    //width: responsiveScreenWidth(80),
    //backgroundColor: 'red',
    // position: 'absolute',
  },

  boxContainer: {
    // marginRight: 190,
    //marginTop: 10,
    //position: 'absolute',
    //top: 20,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoriesOfView: {},
  images: {
    width: responsiveScreenWidth(20),
    height: 50,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    marginHorizontal: responsiveScreenWidth(1),
    borderRadius: responsiveScreenWidth(2),
  },
  cateTxt: {
    fontSize: responsiveScreenFontSize(1),
    //zIndex: 1,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    width: responsiveScreenWidth(20),
    color: '#284975',
  },
});
