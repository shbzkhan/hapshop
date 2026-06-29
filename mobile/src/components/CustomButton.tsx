import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'


interface Props {
    title:string
    handlePress:()=>void
    isLoading?:boolean
}
const CustomButton = ({title, handlePress, isLoading}) => {
  return (
    <TouchableOpacity className='w-full bg-primary py-3 justify-center items-center rounded-md' activeOpacity={0.7}>
        {isLoading?
        <ActivityIndicator
        size={"small"}
        color='white'
        />
        :
        <Text className={`font-rubik-medium text-white font-medium`}>{title}</Text>}
    </TouchableOpacity>
  )
}

export default CustomButton