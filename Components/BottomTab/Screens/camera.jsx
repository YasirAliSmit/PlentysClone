import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useEffect, useRef} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
const TestCamera = () => {
  const [imageData, setImageData] = useState('');
  const [takePhotoClick, setTakePhotoClick] = useState(false);
  const camera = useRef(null);
  useEffect(() => {
    checkPermision();
  }, []);
  const checkPermision = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();

  };
  const devices = useCameraDevices();
  const device = devices.back;
  if (device == null) return <ActivityIndicator />;
  const takePicture = async () => {
    if (camera != null) {
      const photo = await camera.current.takePhoto();
      setImageData(photo.path);
      setTakePhotoClick(false);
      console.log(photo.path);
    }
  };
  return (
    <View style={{flex: 1}}>
      {takePhotoClick ? (
        <View style={{flex: 1}}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
          />
          <TouchableOpacity onPress={() => takePicture()} style={styles.btn}>
            <Text style={styles.text}>Click</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {imageData !== '' && <Image style={{width:'90%',height:400}} source={{uri:'file://'+imageData}}/>}
      <TouchableOpacity
        onPress={() => setTakePhotoClick(true)}
        style={styles.btn}>
        <Text style={styles.text}>Click Photo</Text>
      </TouchableOpacity>
          </View>
      )}
      
    </View>
  );
};

export default React.memo(TestCamera);

const styles = StyleSheet.create({
  btn: {
    width: '40%',
    height: 50,
    backgroundColor: '#0B223F',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
});
