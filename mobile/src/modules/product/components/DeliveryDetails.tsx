import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const DeliveryDetails = () => {

    function getExpectedDeliveryDate(bufferDays:number = 7) {
    const today:Date = new Date();
    
    today.setDate(today.getDate() + bufferDays);
    
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', weekday:'short' };
    return today.toLocaleDateString('en-IN', options); 
}

console.log("Expected Delivery:", getExpectedDeliveryDate());

  return (
    <View className='gap-3'>
      <Text className='text-xl font-semibold text-black'>Delivery Details</Text>
      <View className='rounded-xl overflow-hidden gap-1 mb-7'>
        <Pressable className='flex-row items-center gap-2 bg-primary/20 px-4 py-2.5'>
            <Ionicons name="location-outline" size={16} color="black" />
            <Text numberOfLines={1} className='text-lg'>Mankhurd, Navi Mumbai, India, 400043</Text>
        </Pressable>
        <Pressable className='flex-row items-center gap-2 bg-border px-4 py-2.5 '>
            <MaterialCommunityIcons name="truck-delivery-outline" size={16} color="black" />
            <Text numberOfLines={1} className='text-lg font-semibold'>Delivery by {getExpectedDeliveryDate()}</Text>
        </Pressable>
        <Pressable className='flex-row  gap-2 bg-border px-4 py-2.5'>
            <View className='py-1'>
            <MaterialIcons name="storefront" size={16} color="black" />
            </View>
            <View className='gap-1'>
            <Text className='text-lg text-black'>FullFields by Agent travel</Text>
            <Text className='text-sm text-black'>4.7 * . 6 years with HapShop</Text>
            <TouchableOpacity>
                <Text className='text-primary text-sm'>See other sellers</Text>
            </TouchableOpacity>

            </View>
        </Pressable>
      </View>
    </View>
  )
}

export default DeliveryDetails