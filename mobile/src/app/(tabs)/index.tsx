import HomeHeader from '@/components/HomeHeader';
import HomeSlider from '@/components/HomeSlider';
import { Dimensions, FlatList, Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = screenWidth * 0.85

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View className='w-full h-12 bg-red-400'>
    <Text>{title}</Text>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        // className='flex-1 m-4'
        ListHeaderComponent={
          <View className='gap-5'>
          <HomeHeader/>
          <HomeSlider/>
          </View>
        }
      />
    </SafeAreaView>
  )
}

export default HomeScreen