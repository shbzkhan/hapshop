import Card from '@/components/Card';
import FilterButton from '@/components/FilterButton';
import HomeHeader from './components/HomeHeader';
import HomeSlider from './components/HomeSlider';
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
import CustomSafeAreaView from '@/components/CustomSafeAreaView';
import { ProductData } from '@/data/ProductData';

const { width: screenWidth } = Dimensions.get('window');



const HomeScreen = () => {
  return (
    <CustomSafeAreaView isBottomTab={true}>
      <FlatList
        data={ProductData}
        renderItem={({ item }) => <Card item ={item} />}
        keyExtractor={item => item._id}
        numColumns={2}
        // horizontal={false}
        className='flex-1'
        contentContainerClassName="pb-32"
      columnWrapperClassName="flex gap-2 px-4 mt-5"
        // contentContainerClassName='gap-3'
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

export default HomeScreen