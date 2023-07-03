import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const QrCode = () => {
  const [msg, setMsg] = useState('Qr Code');
  function genrateQrCode(txt) {
    if (txt == '') {
      setMsg('Qr Code');
    } else {
      setMsg(txt);
    }
  }
  function qrCode() {
    console.log('i called')
  }
  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="Generate Qr Code"
        style={styles.input}
        value={msg}
  
        onChangeText={txt => genrateQrCode(txt)}
      />
      <TouchableOpacity onPress={() => qrCode('Hello')} style={styles.btn}>
        <Text style={styles.text}>Click</Text>
      </TouchableOpacity>
      <View style={styles.qrcode}>
        <QRCode value={msg} color="white" backgroundColor="black" size={200} />
      </View>
    </View>
  );
};

export default React.memo(QrCode);

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: responsiveHeight(5),
  },
  btn: {
    width: '40%',
    height: 50,
    backgroundColor: '#0B223F',
    position: 'absolute',
    top: 150,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  qrcode: {
    position: 'absolute',
    top: 300,
    alignSelf: 'center',
  },
});
