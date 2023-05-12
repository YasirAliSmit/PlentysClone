import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import { TopBrands } from '../../../redux/TopBrandAction';
import { useDispatch } from 'react-redux';
const TopBrandProducts = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(TopBrands())
    },[dispatch])
  return (
    <View>
      <Text>TopBrandProducts</Text>
    </View>
  );
};

export default TopBrandProducts;

const styles = StyleSheet.create({});
