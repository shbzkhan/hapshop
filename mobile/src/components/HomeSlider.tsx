import { Dimensions, Image, ScrollView, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = screenWidth * 0.85

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

const HomeSlider = () => {
  return (
    <ScrollView
              horizontal
              pagingEnabled
              className='pl-1'
              showsHorizontalScrollIndicator={false}
              bounces={false}
              decelerationRate="fast"
              snapToInterval={CARD_WIDTH}
              snapToAlignment="center"
            >
              {HeaderData.map((post) => (
                <View key={post.id} style={{ width: CARD_WIDTH, height: moderateScale(170), padding: moderateScale(5) }} 
                className='h-40 px-3 '
                >
                  <Image
                    source={{ uri: post.image }}
                    className='w-full h-full rounded-xl'
                    resizeMode='cover'
                  />
                </View>
              ))}
            </ScrollView>
  )
}

export default HomeSlider