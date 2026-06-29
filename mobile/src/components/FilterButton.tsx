import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { moderateScale } from 'react-native-size-matters';

const FilterButton = () => {
  return (
    <>
    <TouchableOpacity className='flex-row justify-center items-center border rounded-md border-border gap-3' style={{paddingHorizontal:moderateScale(12), paddingVertical:moderateScale(4)}}>
      {/* <View className=''> */}
        <Text className='font-medium text-black text-base'>Filters</Text>
        <Feather name="filter" size={15} color="#393F42" />
      {/* </View> */}
    </TouchableOpacity>
    </>
  )
}

export default FilterButton