import { View, Text } from 'react-native'
import React from 'react'

const SimpleCustomHeader = ({title}:{title:string}) => {
  return (
    <View className='py-4'>
      <Text className='text-xl text-black'>{title}</Text>
    </View>
  )
}

export default SimpleCustomHeader