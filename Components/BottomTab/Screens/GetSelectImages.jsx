import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
const GetSelectImages = async () => {
    const selectImageUrl = `https://api.plentys.pk/api/v1/public/banner?mobile=1&cityId=1`
    let response = await axios.get(selectImageUrl)
    return response.data
 
}

export const UseGetSelected = () => {
    const {isLoading,data} = useQuery(['selectImage'],()=>GetSelectImages)
}
const styles = StyleSheet.create({})