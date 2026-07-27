import { FlatList, Text, View } from "react-native"
import Card from "@/components/Card"
import CustomSafeAreaView from "@/components/CustomSafeAreaView"
import FilterButton from "@/components/FilterButton"
import { ProductData } from "@/data/ProductData"
import { HomeHeader, HomeSlider } from "@/modules/home"

const index = () => {
  return (
    <CustomSafeAreaView isBottomTab={true}>
      <FlatList
        data={ProductData}
        renderItem={({ item }) => <Card item ={item} />}
        keyExtractor={item => item._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        className='flex-1'
        contentContainerClassName="pb-32"
      columnWrapperClassName="flex gap-2 px-4 mt-5"
        ListHeaderComponent={
          <View className='gap-5'>
          <HomeHeader/>
          <HomeSlider/>
          <View className='px-4 flex-row justify-between'>
            <Text className='text-black font-medium text-lg'>Recent Product</Text>
            <FilterButton/>
          </View>
          </View>
        }
      />
    </CustomSafeAreaView>
  )
}

export default index