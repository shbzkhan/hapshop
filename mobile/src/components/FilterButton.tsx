import Feather from '@expo/vector-icons/Feather';
import { Dimensions, Modal, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Host, ModalBottomSheet, Button, Column } from '@expo/ui/jetpack-compose';
import type { ModalBottomSheetRef } from '@expo/ui/jetpack-compose';
import { fillMaxWidth, paddingAll } from '@expo/ui/jetpack-compose/modifiers';
import { useRef, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FilterOffPercentData, FilterPriceData, FilterRatingData } from '@/data/FilterData';

const FilterButton = () => {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState({
    price:null,
    offPercent: null,
    rating: null,
  })
  console.log(filter)
  const sheetRef = useRef<ModalBottomSheetRef>(null);

  const hideSheet = async () => {
    await sheetRef.current?.hide();
    setVisible(false);
  };

  
const width = Dimensions.get("window").width;
  return (
    <>
     <Host matchContents>
    <TouchableOpacity onPress={() => setVisible(true)} className='flex-row justify-center items-center border rounded-md border-border gap-3' style={{paddingHorizontal:moderateScale(12), paddingVertical:moderateScale(4)}}>
      {/* <View className=''> */}
        <Text className='font-medium text-black text-base'>Filters</Text>
        <Feather name="filter" size={15} color="#393F42" />
      {/* </View> */} 
    </TouchableOpacity>
      {visible && (
        <ModalBottomSheet 
        ref={sheetRef} 
        onDismissRequest={() => setVisible(false)} 
        skipPartiallyExpanded
        containerColor="white"
        contentColor="#393F42"
        showDragHandle={false}
        >
          <Column verticalArrangement={{ spacedBy: 8 }} modifiers={[paddingAll(24), fillMaxWidth()]}>
            <View className='gap-5 ' style={{width:width-48}} >
              <View className='flex-row justify-between '>
                <TouchableOpacity>
                  <Entypo name="cross" size={22} color="393F42" />
                </TouchableOpacity>
                <Text className='text-black font-bold text-xl'>Filters</Text>
                <TouchableOpacity>
                  <Text className='text-blue-700'>Reset</Text>
                </TouchableOpacity>
              </View>
              <View className='gap-2'>
                <Text className='text-lg text-black font-semibold'>Price</Text>
                <View className='flex-row justify-between'>
                  {
                    FilterPriceData.map((item)=>(
                <TouchableOpacity 
                onPress = {()=>setFilter((prev:any) => ({...prev,price: item.price}))}
                key={item.id} 
                className={`border border-border rounded-md ${filter.price === item.price ? 'bg-primary': ''}`} 
                style={{paddingHorizontal:moderateScale(8), paddingVertical:moderateScale(8)}}>
                  <View className='flex-row justify-center items-center gap-1'>
                    {
                      item.symbol === "less" ? (<FontAwesome6 name="less-than-equal" size={10} color="#393F42" />) : (<FontAwesome6 name="greater-than-equal" size={10} color="#393F42" />)
                    }
                    <Text className={` text-sm font-semibold ${filter.price === item.price ? 'text-white': 'text-black'}`}>{item.price}</Text>
                  </View>
                </TouchableOpacity>

                    ))
                  }
                
              </View>
              </View>
              <View className='gap-2'>
                <Text className='text-lg text-black font-semibold'>Percent</Text>
                <View className='flex-row justify-between'>
                {
                    FilterOffPercentData.map((item)=>(
                <TouchableOpacity 
                onPress = {()=>setFilter((prev:any) => ({...prev,offPercent: item.offPercent}))} 
                key={item.id} 
                className={`border border-border rounded-md ${filter.offPercent === item.offPercent ? 'bg-primary': ''}`} 
                style={{paddingHorizontal:moderateScale(8), paddingVertical:moderateScale(8)}}>
                  <View className='flex-row justify-center items-center gap-0.5'>
                    <FontAwesome6 name="greater-than-equal" size={10} color="#393F42" />
                    <Text className={` text-sm font-semibold ${filter.offPercent === item.offPercent ? 'text-white': 'text-black'}`}>{item.offPercent}</Text>
                  </View>
                </TouchableOpacity>
                    ))
                  }
              </View>
              </View>
              <View className='gap-2'>
                <Text className='text-lg text-black font-semibold'>Rate</Text>
                <View className='flex-row justify-between'>
                {
                    FilterRatingData.map((item)=>(
                <TouchableOpacity 
                onPress = {()=>setFilter((prev:any) => ({...prev,rating: item.rating}))}
                key={item.id} 
                className={`border border-border rounded-md ${filter.rating === item.rating ? 'bg-primary': ''}`} 
                style={{paddingHorizontal:moderateScale(8), paddingVertical:moderateScale(8)}}>
                  <View className='flex-row justify-center items-center gap-0.5'>
                    {
                      item.symbol === "less" ? (<FontAwesome6 name="less-than-equal" size={10} color="#393F42" />) : (<FontAwesome6 name="greater-than-equal" size={10} color="#393F42" />)
                    }
                    <Text className={` text-sm font-semibold ${filter.rating === item.rating ? 'text-white': 'text-black'}`}>{item.rating}</Text>
                  </View>
                </TouchableOpacity>
                    ))
                  }
              </View>
              </View>
              
            </View>
          </Column>
        </ModalBottomSheet>
      )}
    </Host>
    </>
  )
}

export default FilterButton