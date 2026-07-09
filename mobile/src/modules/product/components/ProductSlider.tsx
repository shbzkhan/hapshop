import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters';

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



const ProductSlider = () => {
  return (
        <ScrollView
                      horizontal
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}
                      bounces={false}
                      snapToInterval={CARD_WIDTH}
                    >
                      {HeaderData.map((post) => (
                        <View key={post.id} style={{ width: CARD_WIDTH, height: moderateScale(420)}} 
                        className='bg-gray/10 justify-center items-center '
                        >
                          <Image
                            source={{ uri: post.image }}
                            className='w-full h-full'
                            resizeMode='contain'
                          />
                        </View>
                      ))}
            </ScrollView>
  )
}

export default ProductSlider