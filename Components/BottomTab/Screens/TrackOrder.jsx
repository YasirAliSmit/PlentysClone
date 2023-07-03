import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {PermissionsAndroid} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
const TrackOrder = () => {
  const [mLat, setMLet] = useState(0);
  const [mLog, setMLog] = useState(0);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const getLocation = () => {
    Geolocation.getCurrentPosition(info => {
      setMLet(info.coords.latitude);
      setMLog(info.coords.longitude);
    });
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{flex: 1, width: '100%'}}
        region={{
          latitude: 24.8607,
          longitude: 67.0011,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}>
        <Marker
          coordinate={{
            latitude: mLat,
            longitude: mLog,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        />
      </MapView>
      <TouchableOpacity style={styles.btn} onPress={() => getLocation()}>
        <Text style={styles.btnTxt}>Get Current Location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(TrackOrder);

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  btn: {
    backgroundColor: '#0B223F',
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(5),
    borderRadius: responsiveScreenWidth(6),
    position: 'absolute',
    top: responsiveScreenHeight(80),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontFamily: 'Poppins-Light',
    color: '#fff',
    fontSize: responsiveScreenFontSize(2),
  },
});
