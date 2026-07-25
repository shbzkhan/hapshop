import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '@/components/CustomSafeAreaView'
import SimpleCustomHeader from '@/components/SimpleCustomHeader'
import { ProductData } from '@/data/ProductData'
import Card from '@/components/Card'

const WishlistScreen = () => {
  return (
    <CustomSafeAreaView isBottomTab={true} className="px-4">
      <FlatList
        data={ProductData}
        renderItem={({ item }) => <Card item ={item} />}
        keyExtractor={item => item._id}
        numColumns={2}
        className='flex-1'
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-2 mt-2"
        ListHeaderComponent={
          <SimpleCustomHeader title='My WishList' />
        }
      />
    </CustomSafeAreaView>
  )
}

export default WishlistScreen