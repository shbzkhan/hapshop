import buyIcon from "@/assets/images/Buy.png"
import downArrowIcon from "@/assets/images/down-arrow.png"
import notificationIcon from "@/assets/images/Notification.png"
import SearchField from '@/components/SearchField'
import { Image, Text, TouchableOpacity, View } from 'react-native'

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
                        <Image source={buyIcon}
                          // className='w-6 h-4'
                          resizeMode='contain'
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={notificationIcon}
                          // className='w-4 h-4'
                          resizeMode='contain'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <SearchField />
                </View>
  )
}

export default HomeHeader