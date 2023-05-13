import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import _ from 'lodash';

const Categories = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const data = async () => {
      const response = await fetch(
        'https://api.plentys.pk/api/v1/public/allCategories?cityId=1',
      );
      const data1 = await response.json();

      const group = _.groupBy(data1, 'ParentId');
      setData(group);
      /// console.log('console in side of categores', data1.data);
    };
    data();
  }, []);
  ///https://github.com/ZainAshra/Office/blob/master/src/components/Sidemenu.js
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#0B223F'} />
      <Text style={styles.txt}>Categories</Text>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
