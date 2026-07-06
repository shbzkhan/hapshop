import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters';
import ProductHeader from './components/ProductHeader';
import ProductSlider from './components/ProductSlider';
import SelectVariant from './components/SelectVariant';
import CustomSafeAreaView from '@/components/CustomSafeAreaView';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = screenWidth 

const HeaderData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb3ba',
    image: 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa94f63',
    image: 'https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e49d72',
    image: 'https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg',
  },
];

const ProductDetailsScreen = ({id}:string) => {
  return (
    <CustomSafeAreaView className="gap-5">
      <ProductHeader/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName='px-4 gap-5'>
      <ProductSlider/>
      <SelectVariant/>
      <Text>{id}</Text>
      </ScrollView>
    </CustomSafeAreaView>
  )
}

export default ProductDetailsScreen