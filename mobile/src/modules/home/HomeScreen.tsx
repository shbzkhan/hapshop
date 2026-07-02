import Card from '@/components/Card';
import FilterButton from '@/components/FilterButton';
import HomeHeader from './components/HomeHeader';
import HomeSlider from './components/HomeSlider';
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
import CustomSafeAreaView from '@/components/CustomSafeAreaView';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = screenWidth * 0.85

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Earphones for monitor',
    image: 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
    price: 400
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item electronics ',
    image: 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
    price: 300
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item school teacher and student accessories',
    image: 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
    price: 200
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item',
    image: 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
    price: 200
  },
];


const HomeScreen = () => {
  return (
    <CustomSafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id}
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