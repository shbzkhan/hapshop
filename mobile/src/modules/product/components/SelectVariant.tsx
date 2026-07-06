import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SelectVariantData } from '../data/SelectVariantData'
import { moderateScale } from 'react-native-size-matters'

const SelectVariant = () => {
  const [selectedVarint, setSelectedVarint ] = useState("M")
  return (
    <View className='w-full gap-4'>
      <View className='flex-row items-center gap-2'>
      <Text className='text-black font-semibold'>Selected Variant :</Text>
      <Text className='text-gray font-medium'>{selectedVarint}</Text>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName='flex-row gap-5'
      >
        {
            SelectVariantData.map(item=>(
                <TouchableOpacity 
                onPress={()=>setSelectedVarint(item.value)}
                disabled={!item.isAvailable}  
                key={item.id} 
                className={`border rounded-md justify-center items-center ${item.value === selectedVarint ? 'bg-primary border-primary': 'border-gray/50'} ${item.isAvailable ? "" : "border-dashed bg-gray/20"}`} style={{height:moderateScale(44), width:moderateScale(52)}}>
                    <Text className={` text-base font-medium  ${item.isAvailable ? item.value === selectedVarint ? 'text-white': 'text-black' : 'text-gray line-through'}`}>{item.value}</Text>
                </TouchableOpacity>
            ))
        }
      </ScrollView>
    </View>
  )
}

export default SelectVariant