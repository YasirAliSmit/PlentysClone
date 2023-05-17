import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
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
  const [selectCateg, setSelectCateg] = useState(true);
  const [minNumSeq, setMinNumSeq] = useState([]);
  const [selectedKey, setSelectedKey] = useState('1949');
  const products = useSelector(state => state.main.allCategorys);
  const [selectedName, setSelectedName] = useState('');
  const key1Value = products['1'];
  const key3Value = products['52'];
  const key2Value = products[selectedKey];

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
      if (!products[item.childId]) {
        navigation.navigate('ProductOfCategories');
      } else {
        setSelectedKey(item.childId);
      }
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
          backgroundColor: '#E2E8F0',
        }}>
        <TouchableOpacity>
          <Text
            onPress={() => navigateToOther(item)}
            style={{
              fontSize: responsiveScreenFontSize(1.5),
              fontFamily: 'Poppins-Bold',
              color: '#0B223F',
              backgroundColor: item === selectedName ? '#F9C21A' : '#E2E8F0',
              // backgroundColor: '#E2E8F0',
              //backgroundColor: '#F9C21A',
              //backgroundColor: 'red',
              padding: responsiveScreenWidth(7),
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  function HeadCategories() {
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
      <HeadCategories />
      <View style={{flexDirection: 'row'}}>
        <FlatList
          data={key1Value}
          style={{borderLeftWidth: 0}}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
        <Text style={styles.shopAll}>Shop All</Text>
        <AntDesign
          size={15}
          style={styles.righttop}
          name={'right'}
          color={'#0B223F'}
        />

        {/* {childdata && return (

        )} */}
        <FlatList
          data={key2Value}
          renderItem={({item}) => {
            console.log(item);
            return (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    height: 30,
                    marginTop: responsiveScreenHeight(2.5),
                    marginLeft: responsiveScreenWidth(-0.2),
                  }}>
                  <TouchableOpacity>
                    <Text style={styles.name}>{item.name}</Text>
                  </TouchableOpacity>
                  <AntDesign
                    size={15}
                    style={styles.right}
                    name={'right'}
                    color={'#0B223F'}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

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
    backgroundColor: 'red',
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
    color: '#284975',
    marginBottom: 5,
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    //right: 0,
    //zIndex: 2,
    marginLeft: responsiveScreenWidth(10),
    marginTop: responsiveScreenHeight(0.5),
  },
  righttop: {
    position: 'absolute',
    right: responsiveScreenWidth(5),
    top: 0,
    //right: 0,
    //zIndex: 2,
    marginLeft: responsiveScreenWidth(8),
    marginTop: responsiveScreenHeight(0.5),
  },
  shopAll: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Bold',
    color: '#284975',
    marginBottom: 5,
    position: 'absolute',
    left: responsiveScreenWidth(47),
    //marginTop:responsiveScreenHeight(2)
  },
});
