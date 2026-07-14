import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton'

const BottomBox = () => {
  return (
    <View className='px-4 flex-row justify-between pb-2'>
      <CustomButton 
      title='Add To Cart'
      classname='w-[48%] py-4' 
      />

      <CustomButton 
      title='Buy Now' 
      classname='w-[48%]'
      color='bg-border border border-gray/50 py-4'
      textClassname='text-black'
      />
    </View>
  )
}

export default BottomBox