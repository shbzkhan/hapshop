import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import searchIcon from "@/assets/images/Search.png"

const SearchField = () => {
  return (
    <View className='border border-border flex-row gap-3 px-4 rounded-lg'>
        <View className='justify-center'>
            <Image
            source={searchIcon}
            />
        </View>
      <TextInput
      placeholder='Search here ...'
      className='flex-1 py-4 placeholder:text-gray text-black'
      returnKeyType='search'
      textAlignVertical='center'
      />
    </View>
  )
}

export default SearchField