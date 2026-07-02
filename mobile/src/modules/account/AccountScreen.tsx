import { View, Text } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '@/components/CustomSafeAreaView'

const AccountScreen = () => {
  return (
    <CustomSafeAreaView isBottomTab={true}>
      <Text>AccountScreen</Text>
    </CustomSafeAreaView>
  )
}

export default AccountScreen