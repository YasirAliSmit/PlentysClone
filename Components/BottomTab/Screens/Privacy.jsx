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
const Privacy = () => {
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
        <Text style={styles.PriTxt}>Privacy & Policy</Text>
      </View>
      <ScrollView>
        <Text style={styles.PriTitle}>Privacy & Policy</Text>
        <Text style={styles.txt}>
          Welcome to Plentys.pk (the “site”). We are aware of your concern about
          the information you share on our website, and we appreciate the trust
          you put in us while sharing your personal information. Plentys.pk
          understands its confidentiality; therefore, we have devised some
          privacy policies to ensure your data is secure with us. Plentys.pk
          privacy policy explains how we gather and process your personal
          information through Plentys.pk devices, services, websites, products.
          Read the following privacy policies to know how we protect your data
          and make this online marketplace safe for our users. This Privacy
          Policy enlightens how we collect, make appropriate use and (under
          certain conditions) disclose your personal data. This Privacy Policy
          also reflects our motive and endeavors to secure your personal
          information. Lastly, this Privacy Policy clarifies your options
          regarding the collection, use and revelation of your personal
          information. By visiting the website directly, you admit the practices
          described in this Policy. Your information will only be kept by us for
          as long as we require it by law or as it is necessary for the purpose
          it was collected.
        </Text>
        <Text style={styles.Prireq}>Data we require</Text>
        <Text style={styles.txt}>
          On your order placement on the website, we will require some
          information for order processing purpose. The personal information
          includes your name, gender, delivery address, home/mobile number,
          preferred delivery and payment method, date of birth, email address
          but not limited to these only. The information provided by you will be
          used for processing your order and we may pass your information to the
          third parties (supplier, rider) for completion of the order. Another
          use of personal information by Plenty.pk is verifying your account. We
          do not ask for your personal information while you are browsing the
          site only. Carrying financial transactions, auditing the data,
          improving content of the website are some of the purposes we ask your
          data for. Your details might be stored with us for security reasons,
          though you can access this information on the website. For the purpose
          of viewing your orders, keeping it up-to-date and making changes, all
          your information is made available to you. Our application/ website
          will be using Advanced Access Permissions to collect necessary data,
          including your public profile, email address, phone number and
          address. Please note this policy falls within the necessary law and
          regulations, and hence we ensure that all data will not be shared with
          any third parties. However, if the user requests the deletion of data,
          we are obliged to comply with it. If you want to buy any item made
          available through the Service ("Buy"), you will be required to provide
          some information applicable to your purchase counting, without
          limitation, your debit / credit card number, your debit / credit card
          expiration date, your billing address, and your shipping data. In
          certain cases, we may inquire for extra information to proceed with
          your order.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Privacy;

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
  },
});
