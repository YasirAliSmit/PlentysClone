import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Data} from './Data';
import axios from 'axios';
const Banner = () => {
  const [uiData, setUiData] = useState([]);
  const getData = async () => {
    try {
      axios
        .get('api.plentys.pk/api/v1/public/banner?mobile=1&cityId=1')
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      // const res = await data.json()

      // setUiData(res.data)
    } catch (error) {
      console.log(`error in catch => ${error}`);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    //     <FlatList data={Data} renderItem={({ item }) => {
    //         return (
    //             <Image source={{ uri: `${item.imageUrl}` }} style={styles.image} />
    //             // <Text style={styles.image} >{item.bannerId}</Text>
    //         )
    //     }} />

    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
    borderWidth: 1,
    marginVertical: 20,
  },
});
