import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import {PermissionsAndroid} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
const TrackOrder = () => {
  const [mLat, setMLet] = useState(0);
  const [mLog, setMLog] = useState(0);
  useEffect(() => {
    requestCameraPermission();
  }, []);
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
          latitudeDelta: 5,
          longitudeDelta: 5,
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
      <Button
        onPress={() => getLocation()}
        title="Get Location"
        color={'red'}
      />
    </View>
  );
};

export default TrackOrder;

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
});
