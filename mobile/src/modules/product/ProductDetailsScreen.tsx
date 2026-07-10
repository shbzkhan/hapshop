import CustomSafeAreaView from '@/components/CustomSafeAreaView';
import { calculateDiscount } from '@/utils/calculateDiscount';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ProductHeader from './components/ProductHeader';
import ProductSlider from './components/ProductSlider';
import SelectVariant from './components/SelectVariant';
import DeliveryDetails from './components/DeliveryDetails';

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
  const [expanded, setExpanded] = useState(false);
  const title = 'Comfort Insoles for Men & Women -- Breathable Shock Absorbing Memory Foam, Gel Full length Orthotic, Regular, Sports Shoe Insole.'
  return (
    <CustomSafeAreaView className="gap-5">
      <ProductHeader/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName='px-4 gap-5'>
      <ProductSlider/>
      <SelectVariant/>
      <View className='gap-5'>
      <View className='gap-2'>
        <View className='flex-row gap-2 items-center'>
          <Text className='text-black font-semibold text-xl'>Wonder Care</Text>
          <TouchableOpacity><Text className='text-primary font-semibold text-sm'>Visit store</Text></TouchableOpacity>
        </View>
        <View>
          <Text  
          numberOfLines={expanded ? undefined : 2} 
          className=' text-black text-base'>
             {expanded ? title : `${title.slice(0, 90)}... `}
            <Text onPress={()=>setExpanded(!expanded)} className=' text-primary pl-2 font-medium'>{expanded ? "Less" : "More"}</Text>
            </Text>
        </View>
        <View className='flex-row gap-4 px-3'>
          <View className='flex-row justify-center items-center gap-0.5'>
          <FontAwesome5 name="arrow-down" size={18} color="#16a34a" />
          <Text className='text-2xl font-extrabold text-green-600'>{calculateDiscount(1200, 299)}%</Text>
          </View>
          <Text className='text-2xl text-gray line-through'>₹1200</Text>
          <Text className='text-2xl text-black font-extrabold'>₹299</Text>
        </View>
      </View>
      <DeliveryDetails/>
      </View>
      </ScrollView>
    </CustomSafeAreaView>
  )
}

export default ProductDetailsScreen