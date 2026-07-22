import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters';
import CustomButton from './CustomButton';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

type ItemProps = { title: string, image: string, price: number };
const Card = ({ item }: ItemProps) => {
    
  return (
      <TouchableOpacity className='flex-1 w-full bg-cardColor rounded-xl overflow-hidden shadow-lg shadow-black/70' activeOpacity={0.7} onPress={()=>router.push(`/product/${item.id}`)}>
        <View style={{height:moderateScale(200)}} className='bg-gray/10 rounded-xl relative'>
        <View className='absolute bottom-2 left-3 flex-row gap-1.5 items-center bg-white/80 px-2 py-0.5 rounded'>
          <Text className='text-base font-semibold'>{item.rating}</Text>
          <FontAwesome name="star" size={12} color={item.rating <=2 ? "#FB923C":"#22C55E"} />
        </View>
          <Image
          source={{uri: item.image}}
          resizeMode='contain'
          className='w-full h-full'
          />
        </View>
        <View className='p-3 gap-2'>
          <View className='gap-1'>
        <Text className='text-black text-sm' numberOfLines={1}>{item.title}</Text>
        <View className='flex-row items-center gap-2'>
        <Text className='text-gray text-sm line-through ' numberOfLines={1}>{`₹${item.price}`}</Text>
        <Text className='text-black font-bold text-base' numberOfLines={1}>{`₹${item.price}`}</Text>
        </View>
          </View>
          <CustomButton title="Add to cart" isLoading={false}/>
        </View>
      </TouchableOpacity>
  )
}

export default Card