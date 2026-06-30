import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters';
import CustomButton from './CustomButton';

type ItemProps = { title: string, image: string, price: number };
const Card = ({ item }: ItemProps) => {
    
  return (
      <TouchableOpacity className='flex-1 w-full bg-cardColor rounded-md overflow-hidden shadow-lg shadow-black/70' activeOpacity={0.7}>
        <View style={{height:moderateScale(120)}}>
          <Image
          source={{uri: item.image}}
          resizeMode='cover'
          className='w-full h-full'
          />
        </View>
        <View className='p-3 gap-2'>
          <View className='gap-1'>
        <Text className='text-black text-sm' numberOfLines={1}>{item.title}</Text>
        <Text className='text-black font-bold text-lg' numberOfLines={1}>{`₹${item.price}`}</Text>
          </View>
          <CustomButton title="Add to cart" isLoading={false}/>
        </View>
      </TouchableOpacity>
  )
}

export default Card