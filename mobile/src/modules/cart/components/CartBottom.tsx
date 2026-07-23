import { View, Text, Pressable } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import CustomButton from '@/components/CustomButton'
import Entypo from '@expo/vector-icons/Entypo'

interface Props {
    isSummaryShow: boolean
    setIsSummaryShow: Dispatch<SetStateAction<boolean>>
    selectedItem: string[]
    setSelectedItem: Dispatch<SetStateAction<string[]>>
    totalPrice: number
}
const CartBottom = ({isSummaryShow, setIsSummaryShow, selectedItem, setSelectedItem, totalPrice}:Props) => {
    console.log(totalPrice)
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
      <CustomButton disabled={!selectedItem.length} title={selectedItem.length ? 'Select payment method' : 'Continue for payments'} 
        color={selectedItem.length ? 'bg-primary': "bg-border"}
        textClassname={selectedItem.length ? 'text-white': "text-black"}
      />
    </View>
  )
}

export default CartBottom