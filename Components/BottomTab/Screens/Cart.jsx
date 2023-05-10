import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const Cart = () => {
  const product = useSelector(state => state.cart);
  console.log(
    'console in side useselector of product cart of line number of 6',
    product,
  );
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Hello</Text>
      <Text style={styles.txt}>Hello</Text>
      <Text style={styles.txt}>Hello</Text>
      <Text style={styles.txt}>Hello</Text>
    </View>
  );
};

export default Cart;

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
