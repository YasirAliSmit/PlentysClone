import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const Return = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={styles.head}>
        <Ionicons
          name="chevron-back"
          style={styles.arrow}
          size={20}
          color={'#fff'}
          onPress={() => navigation.navigate('UserMenu')}
        />
        <Text style={styles.PriTxt}>Return Policy</Text>
      </View>
      <ScrollView>
        <Text style={styles.PriTitle}>Return Policy</Text>
        <Text style={styles.txt}>
          Welcome to Plentys.pk (the “site”). We are aware of your concern about
          the information you share on our website, and we appreciate the trust
        </Text>
        <Text style={styles.txt}>
          Welcome to Plentys.pk (the “site”). We are aware of your concern about
          the information you share on our website, and we appreciate the trust
        </Text>
        <Text style={styles.txt}>
          Welcome to Plentys.pk (the “site”). We are aware of your concern about
          the information you share on our website, and we appreciate the trust
        </Text>
        <Text style={styles.txt}>
          Welcome to Plentys.pk (the “site”). We are aware of your concern about
          the information you share on our website, and we appreciate the trust
        </Text>
        <Text style={styles.txt}>
          Welcome to Plentys.pk (the “site”). We are aware of your concern about
          the information you share on our website, and we appreciate the trust
        </Text>
        <Text style={styles.txt}>
          Welcome to Plentys.pk (the “site”). We are aware of your concern about
          the information you share on our website, and we appreciate the trust
        </Text>
        <Text style={styles.txt}>
          Welcome to Plentys.pk (the “site”). We are aware of your concern about
          the information you share on our website, and we appreciate the trust
        </Text>
        <Text style={styles.txt}>
          Welcome to Plentys.pk (the “site”). We are aware of your concern about
          the information you share on our website, and we appreciate the trust
        </Text>
        <Text style={styles.txt}>
          Welcome to Plentys.pk (the “site”). We are aware of your concern about
          the information you share on our website, and we appreciate the trust
        </Text>
        <Text style={styles.txt}>
          Welcome to Plentys.pk (the “site”). We are aware of your concern about
          the information you share on our website, and we appreciate the trust
        </Text>
      </ScrollView>
    </View>
  );
};

export default React.memo(Return);

const styles = StyleSheet.create({
  head: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(8),
    backgroundColor: '#0B223F',
    position: 'relative',
  },
  arrow: {
    position: 'absolute',
    top: responsiveScreenHeight(2),
    left: responsiveScreenWidth(2),
  },
  PriTxt: {
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Bold',
    marginTop: responsiveScreenHeight(3),
    color: '#fff',
    top: responsiveScreenHeight(-2),
    left: responsiveScreenWidth(8),
  },
  PriTitle: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    marginTop: responsiveScreenHeight(3),
    color: '#0B223F',
    alignSelf: 'center',
  },
  Prireq: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Bold',
    marginTop: responsiveScreenHeight(3),
    color: '#0B223F',
    marginLeft: responsiveScreenWidth(4),
  },
  txt: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Light',
    marginTop: responsiveScreenHeight(3),
    color: '#0B223F',
    alignSelf: 'center',
    width: responsiveScreenWidth(90),
    marginVertical: responsiveScreenHeight(3),
  },
});
