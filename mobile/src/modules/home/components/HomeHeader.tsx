import buyIcon from "@/assets/images/Buy.png"
import downArrowIcon from "@/assets/images/down-arrow.png"
import notificationIcon from "@/assets/images/Notification.png"
import SearchField from '@/components/SearchField'
import Ionicons from '@expo/vector-icons/Ionicons';
import { moderateScale, ModerateScale } from "react-native-size-matters";
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { router } from "expo-router";

const HomeHeader = () => {
  return (
    <View className='px-4 mt-2 gap-5'>  
                  <View className='flex-row justify-between items-center'>
                    <View className=''>
                      <Text className='text-gray text-sm'>Delivery address</Text>
                      <TouchableOpacity className='flex-row items-center justify-center -mt-1 gap-1'>
                        <Text className='text-[0.920rem] text-black font-medium'>Navi Mumbai, Maharastra</Text>
                        <View className='items-center justify-center'>
                          <Image source={downArrowIcon}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View className='flex-row justify-center items-center gap-4'>
                      <TouchableOpacity>
                        <Ionicons name="cart-outline" size={moderateScale(24)} color="#393F42" />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>router.push("/notifications")}>
                        <Ionicons name="notifications-outline" size={moderateScale(24)} color="#393F42" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <SearchField />
                </View>
  )
}

export default HomeHeader