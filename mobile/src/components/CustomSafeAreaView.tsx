import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomSafeAreaView = ({children}:any) => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      {children}
    </SafeAreaView>
  )
}

export default CustomSafeAreaView