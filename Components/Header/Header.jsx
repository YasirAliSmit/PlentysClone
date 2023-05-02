import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { useState } from 'react';
import React from 'react'


const Header = () => {
    const [showModal, setShowModal] = useState(false)
    return (

        <View style={styles.headParent}>
            <View style={styles.head}>
                <Image style={styles.logo} source={require('../assets/LogoV2.png')} />
                <View style={styles.icon}>
                    <TouchableOpacity><FontAwesome name='whatsapp' style={styles.whatappIcon} color={'#A0C43C'} size={30} /></TouchableOpacity>
                    <TouchableOpacity><AntDesign name='search1' style={styles.search} color={'#fff'} size={30} /></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setShowModal(!showModal)} ><View style={{ flexDirection: 'row' }}><SimpleLineIcons name='location-pin' style={styles.location} color={'#fff'} size={30} /><Text style={styles.karachi}>KHI</Text></View></TouchableOpacity>
                </View>
            </View>
            <Modal visible={showModal} transparent={true} style={styles.modal}><View style={styles.centerView}><View style={styles.modalView}><TouchableOpacity onPress={()=>setShowModal(false)}><Entypo name='circle-with-cross' style={styles.cross} color='black' size={20}/></TouchableOpacity>
            <View>
                <Text style={styles.cityText} >Select Your City</Text>
                 <View  >
                 <View style={{flexDirection:'row',marginTop:responsiveHeight(2.5)}} >
                   
                        <View style={{width:responsiveWidth(40),height:responsiveHeight(20),backgroundColor:'#0B223F',zIndex:1,marginLeft:responsiveWidth(2.5),marginRight:responsiveWidth(3),borderRadius:responsiveWidth(1)}}><Image style={styles.khi} source={require('../assets/karachi.png')}/><Text style={styles.karachiTxt}>Karachi</Text></View>
                      
                        <View style={{width:responsiveWidth(40),height:responsiveHeight(20),backgroundColor:'#617186',zIndex:1,borderRadius:responsiveWidth(1)}}><Image style={styles.khi} source={require('../assets/lahore.png')}/><Text style={styles.lahoreTxt} >Lahore</Text></View>
                      
                  
                 </View>
                 </View>
            </View>
            
            
            </View></View></Modal>
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        backgroundColor: '#0B223F',
        width: '100%',
        height: 60
    },
    logo: {
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveWidth(3),
        marginRight: responsiveWidth(29)
    },
    icon: {
        flexDirection: 'row'
    },
    txt: {
        fontFamily: 'Poppins-Bold',
        color: '#fff',
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(2)
    },
    whatappIcon: {
        marginTop: responsiveHeight(1.5)
    },
    search: {
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveWidth(2)
    },
    location: {
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveWidth(2)
    },

    karachi: {

        marginTop: responsiveHeight(2),
        marginLeft: responsiveWidth(3),
        color: 'white',
        fontFamily: 'Poppins-Bold',
        letterSpacing: 1.5

    },
    headParent: {
        width: "100%",

    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {

        backgroundColor: '#e2e8f0',
        height: responsiveHeight(50),
        width: responsiveWidth(90),
        elevation: 2,
        borderRadius:3
    },
    cross:{
        position:'absolute',
        top:responsiveHeight(0),
        left:responsiveWidth(90)
    },
    cityText:{
        fontFamily:'Poppins-Bold',
        letterSpacing:1.5,
        fontSize:responsiveFontSize(3)
        ,color:'#0B223F',
        marginLeft:responsiveWidth(13),
        marginTop:responsiveHeight(3)
    },
    rec:{
        width:responsiveWidth(20),
        height:responsiveHeight(10),
        backgroundColor:'0B223F'
    },
    khi:{
        marginLeft:responsiveWidth(10),
        marginTop:responsiveHeight(4),
        width:responsiveWidth(20),
        objectFit:'contain'
    },
    lhr:{
        marginLeft:responsiveWidth(10),
        marginTop:responsiveHeight(4)
    },
    karachiTxt:{
        color:'#0B223F',
        position:'absolute',
        top:responsiveHeight(25),
        left:responsiveWidth(7),
        fontFamily: 'Poppins-Bold',
        fontSize:responsiveFontSize(2.5),
        letterSpacing:2
    },
    lahoreTxt:{
        color:'#617186',
        position:'absolute',
        top:responsiveHeight(25),
        left:responsiveWidth(7),
        fontFamily: 'Poppins-Bold',
        fontSize:responsiveFontSize(2.5),
        letterSpacing:2
    }
})