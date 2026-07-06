import { View, Text, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomSafeAreaView = ({children, isBottomTab = false, className}:{children:any, isBottomTab?:boolean, className?:any}) => {
    const edges:any =
  Platform.OS === "android" && isBottomTab
    ? ["top", "left", "right"]
    : ["top", "bottom", "left", "right"];
  return (
    <SafeAreaView 
    className={`flex-1 bg-white ${className}`}edges ={edges}>
      {children}
    </SafeAreaView>
  )
}

export default CustomSafeAreaView