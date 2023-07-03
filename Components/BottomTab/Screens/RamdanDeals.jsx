import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const RamdanDeals = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.left}
        onPress={() => navigation.navigate('BottomNavigation')}>
        <AntDesign
          name="left"
          color="#fff"
          size={responsiveScreenFontSize(2)}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <TextInput placeholder="Search" type="text" style={styles.input} />
        <AntDesign
          name="search1"
          style={styles.srh}
          color="grey"
          size={responsiveScreenFontSize(2.5)}
        />
        <Entypo
          name="cross"
          style={styles.cross}
          color="grey"
          size={responsiveScreenFontSize(3)}
        />
      </View>
      <TouchableOpacity style={styles.camera}>
        <AntDesign
          name="search1"
          color="#fff"
          size={responsiveScreenFontSize(2)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.mic}>
        <Entypo name="camera" color="#fff" size={responsiveScreenFontSize(2)} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(RamdanDeals);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  srh: {
    position: 'absolute',
    top: responsiveHeight(3),
    left: 50,
  },
  input: {
    backgroundColor: '#fff',
    width: responsiveWidth(65),
    height: responsiveHeight(5),
    borderRadius: 5,
    fontSize: responsiveScreenFontSize(2),
    paddingLeft: responsiveWidth(15),
    left: 33,
    top: responsiveHeight(1.5),
  },
  content: {
    height: 60,
    backgroundColor: '#0B223F',
    zIndex: 1,
  },
  cross: {
    position: 'absolute',
    top: responsiveHeight(2.5),
    left: responsiveWidth(65),
  },
  left: {
    position: 'absolute',
    zIndex: 2,
    top: responsiveHeight(3),
    left: responsiveWidth(3),
  },
  camera: {
    position: 'absolute',
    zIndex: 2,
    top: responsiveHeight(3),
    left: responsiveWidth(80),
  },
  mic: {
    position: 'absolute',
    zIndex: 2,
    top: responsiveHeight(3),
    left: responsiveWidth(87),
  },
});
