import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

const SearchLocation = () => {
  return (
    <View>
      <View style={{width: '100%', height: responsiveScreenHeight(100)}}>
        {/* <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = true) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyC8Zym3AAjvppiRTlqmFpkXjEOxG9Mp5ms',
            language: 'en',
          }}
        /> */}
        <GooglePlacesAutocomplete
          placeholder="Type a place"
          ///query={{key: 'AIzaSyCq_uqOuhZYWpR94UfSd4mwiEAgvJU3GFc'}}
          query={{key: 'AIzaSyC8Zym3AAjvppiRTlqmFpkXjEOxG9Mp5ms'}}
          fetchDetails={true}
          onPress={(data, details = null) => console.log(data, details)}
          onFail={error => console.log(error)}
          onNotFound={() => console.log('no results')}
        />
      </View>
    </View>
  );
};

export default SearchLocation;

const styles = StyleSheet.create({});
