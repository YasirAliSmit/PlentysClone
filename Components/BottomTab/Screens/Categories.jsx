import {StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useSelector} from 'react-redux';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
const Categories = () => {
  const [minNumSeq, setMinNumSeq] = useState([]);
  const [selectedKey, setSelectedKey] = useState('1949');
  const products = useSelector(state => state.main.allCategorys);

  const key1Value = products['1'];
  const key2Value = products[selectedKey];
  //console.log(key1Value);

  const minimum = key1Value.reduce((previousNumber, currentNumber) => {
    if (currentNumber.sequence < previousNumber.sequence) {
      return currentNumber;
    } else {
      return previousNumber;
    }
  }, key1Value[0]);

  useEffect(() => {
    setMinNumSeq(minimum.sequence);
  }, []);
  //console.log(minNumSeq);
  const renderItem = ({item}) => {
    console.log(item.childId);
    return (
      <View style={styles.box}>
        <Text onPress={() => setSelectedKey(item.childId)} style={styles.txt}>
          {item.name}
        </Text>
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
        />
        <FlatList
          data={key2Value}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  height: 30,
                  //     borderWidth: 1,
                }}>
                <Text style={styles.name}>{item.name}</Text>
                <AntDesign
                  size={15}
                  style={styles.right}
                  name={'right'}
                  color={'#284975'}
                />
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
  },
  right: {
    //position: 'absolute',
    //right: 0,
    //zIndex: 2,
    marginLeft: responsiveScreenWidth(10),
  },
});
