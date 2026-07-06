import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import ProductDetailsScreen from '@/modules/product/ProductDetailsScreen'

const product = () => {
    const {id} = useLocalSearchParams()
  return (
    <ProductDetailsScreen id ={id as string}/>
  )
}

export default product