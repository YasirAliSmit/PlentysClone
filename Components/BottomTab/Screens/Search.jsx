import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.left}
        onPress={() => navigation.navigate('BottomNavigation')}>
        <AntDesign name="left" color="#fff" size={20} />
      </TouchableOpacity>
      <View style={styles.content}>
        <TextInput placeholder="Search" type="text" style={styles.input} />
        <AntDesign name="search1" style={styles.srh} color="grey" size={25} />
        <Entypo name="cross" style={styles.cross} color="grey" size={25} />
      </View>
      <TouchableOpacity style={styles.camera}>
        <Entypo name="camera" color="#fff" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.mic}>
        <FontAwesome name="microphone" color="#fff" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  srh: {
    position: 'absolute',
    top: 15,
    left: 50,
  },
  input: {
    backgroundColor: '#fff',
    width: '70%',
    borderRadius: 5,
    fontSize: responsiveScreenFontSize(2),
    paddingLeft: 40,
    left: 33,
    top: 5,
  },
  content: {
    height: 60,
    backgroundColor: '#0B223F',
    zIndex: 1,
  },
  cross: {
    position: 'absolute',
    top: 15,
    left: 290,
  },
  left: {
    position: 'absolute',
    zIndex: 2,
    top: 17,
    left: 5,
  },
  camera: {
    position: 'absolute',
    zIndex: 2,
    top: 17,
    left: 340,
  },
  mic: {
    position: 'absolute',
    zIndex: 2,
    top: 17,
    left: 380,
  },
});
