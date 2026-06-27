import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import downArrowIcon from "@/assets/images/down-arrow.png"
import buyIcon from "@/assets/images/Buy.png"
import notificationIcon from "@/assets/images/Notification.png"

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
    <View className='px-4 mt-2'>
    <View className='flex-row justify-between items-center'>
      <View className=''>
        <Text className='text-gray text-sm'>Delivery address</Text>
        <TouchableOpacity className='flex-row items-center justify-center -mt-1 gap-1'>
          <Text className='text-[0.920rem] text-black font-medium'>Navi Mumbai, Maharastra</Text>
          <View className='items-center justify-center'>
            <Image source={downArrowIcon}
            // className='w-4 h-4'
            />
          </View>
        </TouchableOpacity>
      </View>
      <View className='flex-row justify-center items-center gap-4'>
        <TouchableOpacity>
          <Image source={buyIcon}
            // className='w-6 h-4'
            resizeMode='contain'
            />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={notificationIcon}
            // className='w-4 h-4'
            resizeMode='contain'
            />
        </TouchableOpacity>
      </View>
    </View>
    <View>
      <Text>Search</Text>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen