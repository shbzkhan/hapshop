import { View, Text, Pressable } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import CustomButton from '@/components/CustomButton'
import Entypo from '@expo/vector-icons/Entypo'
import { router } from 'expo-router'

interface Props {
    handlePress: ()=>void
    totalPrice: number
}
const CartBottom = ({handlePress, totalPrice}:Props) => {
  const [isSummaryShow, setIsSummaryShow] = useState(true)
  return (
    <View className='px-4 border-t border-border gap-4 py-5'>
      <View className='flex-row items-center justify-between'>
        <Text className='text-lg font-bold'>Order Summary</Text>
        <Pressable onPress={()=>setIsSummaryShow(!isSummaryShow)}>
        <Entypo name={isSummaryShow ?"chevron-small-down": "chevron-small-up"} size={24} color="black" />
        </Pressable>
      </View>
      {
        isSummaryShow && (
      <View className='flex-row items-center justify-between'>
        <Text className='text-base text-black'>Totals</Text>
        <Text className='text-lg font-medium'>₹ {totalPrice}</Text>
      </View>

        )
      }
      <CustomButton 
      handlePress={handlePress} 
      disabled={totalPrice<0} 
      title={totalPrice ? 'Select payment method' : 'Continue for payments'} 
        color={totalPrice ? 'bg-primary': "bg-border"}
        textClassname={totalPrice ? 'text-white': "text-black"}
      />
    </View>
  )
}

export default CartBottom