import { View, Text } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '@/components/CustomSafeAreaView'

const OrdersScreen = () => {
  return (
    <CustomSafeAreaView isBottomTab={true}>
      <Text>HistoryScreen</Text>
    </CustomSafeAreaView>
  )
}

export default OrdersScreen