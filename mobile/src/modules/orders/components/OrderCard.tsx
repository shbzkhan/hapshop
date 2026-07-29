import { View, Text, Pressable, Image } from 'react-native'
import type { OrderCardProps } from '../types'
import Entypo from '@expo/vector-icons/Entypo'
import { moderateScale } from 'react-native-size-matters'

interface OrderCards {
    item:OrderCardProps
}

const OrderCard = ({item:{image, deliveryDate, productTitle, deliveryStatus}}:OrderCards) => {
  return (
    <Pressable className='flex-row gap-3 items-center justify-between w-full'>
      <View 
      style={{ height: moderateScale(60), width: moderateScale(60) }}
      className='rounded-xl overflow-hidden'
      >
        <Image
        source={{uri: image}}
        resizeMode='cover'
        className='w-full h-full'
        />
      </View>
      <View className='flex-1 mx-4'>
        <View className='flex-row items-center gap-x-1'>
        <Text className={`text-black text-text-base font-semibold ${deliveryStatus === "Delivered"? 'text-black' : deliveryStatus ==='Cancelled'? 'text-red-600' : 'text-green-600'}`}>{deliveryStatus}</Text>
        {deliveryStatus === "Delivered" && <Text className='text-black text-base font-semibold'>on {deliveryDate}</Text>}
        </View>
        <Text 
        numberOfLines={1} 
        ellipsizeMode='tail'
        
        className='text-gray text-sm'
        >{productTitle}</Text>
      </View>
      <View>
        <Entypo name="chevron-small-right" size={24} color="#393F42" />
      </View>
    </Pressable>
  )
}

export default OrderCard