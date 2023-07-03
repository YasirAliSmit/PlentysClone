// import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { Data } from './Data'

// const GetSelectImages = () => {

//     return (
//         <View style={styles.contain} >
//             <FlatList data={Data} contentContainerStyle={{flexGrow:1}} renderItem={({ item }) => {
//                 console.log(item.imageUrl)
//                 return (
//                     <View style={{ width: 200, height: 200 ,borderWidth:1}}>
//                         <Image 
//                         source={{
//                             uri:item.imageUrl
//                         }}
//                         style={{ width: '100%', height: '100%' }} resizeMode='stretch' />
//                     </View>
//                 )

//             }} keyExtractor={(item, index) => index.toString()} />
//         </View>
//     )
// }

// export default GetSelectImages

// const styles = StyleSheet.create({
//     contain: {
//         flex: 1

//     },
//     image: {
//         width: 100,
//         height: 200,

//         marginVertical: 20,


//     },
//     footer: {},
//     footerText: {},


// })
// // const selectImageUrl = `https://api.plentys.pk/api/v1/public/banner?mobile=1&cityId=1`
// // https://www.youtube.com/watch?v=B5WU6qSGw9o


import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import React from 'react'
import { Data } from './Data'
const GetSelectImages = () => {
  return (
    <View style={styles.conatiner}>
    <FlatList data={Data}
    renderItem={({item})=>{
        console.log(item.imageUrl)
        return(<Image style={styles.image} source={{uri:item.imageUrl}}/>)
    }}

    />
    </View>
  )
}

export default React.memo(GetSelectImages)

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width: "100%",
        backgroundColor:'red',
        height: 200,
        marginVertical: 20,      
    }
})