import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { responsiveScreenFontSize, responsiveScreenWidth, useResponsiveScreenWidth } from 'react-native-responsive-dimensions';

const Button = ({text = 'Done', onPress = () => {}, disabled = false}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container,backgroundColor:!disabled?  '#305586':'grey',}} disabled={disabled}>
      <Text style={styles.txt}>{text}</Text> 
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 42,
    backgroundColor: '#305586',
    width:'90%',
    borderRadius:responsiveScreenWidth(10)
    ,alignItems:'center',
    justifyContent:'center',
    alignSelf:'center'
  },txt:{
    
    fontFamily: 'Poppins-Light',
    color: '#fff',
    fontWeight: 'bold',
    fontSize:responsiveScreenFontSize(3)
  }
});
