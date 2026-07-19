import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { moderateScale } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons'

interface Props {
    title: string
    iconOnPress?: ()=>void
    ioniconsName?: any
    isIconVisible?: boolean


}

const CustomHeader = ({title, iconOnPress, isIconVisible, ioniconsName = 'cart-outline' }:Props) => {
  return (
   <View className="flex-row items-center justify-between px-4 mt-2">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={moderateScale(24)} color="#393F42" />
      </TouchableOpacity>
      <View>
        <Text className="text-xl font-bold text-black">{title}</Text>
      </View>
      <TouchableOpacity className={`${!isIconVisible && 'hidden' }`} onPress={iconOnPress}>
        <Ionicons
          name={ioniconsName}
          size={moderateScale(24)}
          color="#393F42"
        />
      </TouchableOpacity>
    </View>
  )
}

export default CustomHeader