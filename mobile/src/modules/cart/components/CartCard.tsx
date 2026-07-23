import { Checkbox } from "expo-checkbox";
import { Dispatch, SetStateAction, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";


interface ItemProps { _id: string, title: string, image: string, price: number, quantity:number };
interface Props {
  item: ItemProps
  selectedItem:string[]
  setSelectedItem: Dispatch<SetStateAction<string[]>>
}
const CartCard = ({item, selectedItem, setSelectedItem}:Props) => {
  //we must be use item.product.* with backend

  const [unit, setUnit] = useState(item.quantity)

  const handleCheckbox = (id: string) => {
  setSelectedItem((prev) =>
    prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
  );
};

const increaseUnit = () => {
  if(unit<9){
    setUnit(prev => prev + 1);
  }
};

const decreaseUnit = () => {
  if (unit > 1) {
    setUnit(prev => prev - 1);
  }
};


  return (
    <View className="flex-row" style={{gap:moderateScale(7)}}>
      <Checkbox
        value={selectedItem.includes(item._id)}
        onValueChange={()=>handleCheckbox(item._id)}
        color={selectedItem.includes('123456') ? "#67C4A7" : undefined}
        style={{
          width: moderateScale(20),
          height: moderateScale(20),
          borderColor: "#F0F2F1",
          borderRadius: 4,
        }}
        className="my-auto"
      />
      <View
        style={{ height: moderateScale(90), width: moderateScale(100) }}
        className="rounded-md overflow-hidden"
      >
        <Image
          source={{uri: item.image}}
          resizeMode="cover"
          className="w-full h-full"
        />
      </View>
      {/* text */}
      <View className="justify-between py-1 flex-1">
        <View>
          <Text className="font-bold text-black" numberOfLines={1} style={{fontSize:moderateScale(13)}}>{item.title}</Text>
          <Text className="text-gray text-base" style={{fontSize:moderateScale(10)}}>Variant: Gray</Text>
        </View>
          <View className="flex-row items-center gap-1">
            <FontAwesome name="star" size={moderateScale(11)} />
            <FontAwesome name="star" size={moderateScale(11)} />
            <FontAwesome name="star" size={moderateScale(11)} />
            <FontAwesome name="star" size={moderateScale(11)} />
            <FontAwesome name="star" size={moderateScale(11)} />
            <Text className="text-primary ml-1" style={{fontSize:moderateScale(10)}}>4.3</Text>
            <Text className="text-primary" style={{fontSize:moderateScale(10)}}></Text>
            <Text className="text-primary" style={{fontSize:moderateScale(10)}}>163</Text>
          </View>
        {/* <View> */}
        <View className="flex-row items-center gap-2 justify-between ">
          <View className="flex-row items-center gap-3">
          <Text
            className="text-gray line-through "
            style={{fontSize:moderateScale(10)}}
            numberOfLines={1}>{`₹1200`}</Text>
          <Text
            className="text-black font-bold text-lg"
            style={{fontSize:moderateScale(14)}}
            numberOfLines={1}>₹{item.price}</Text>

          </View>
          <View className="flex-row gap-2 items-center">
            <Pressable disabled={unit === 1} onPress={decreaseUnit}>
              <Feather name="minus-circle" size={moderateScale(18)} color={unit === 1 ?"#F0F2F1" : "#C8C8CB"} />
            </Pressable>
            <Text className="text-lg text-black">{unit}</Text>
            <Pressable disabled={unit === 9} onPress={increaseUnit}>
              <Feather name="plus-circle" size={moderateScale(18)} color={unit === 9 ?"#F0F2F1" : "#C8C8CB"} />
            </Pressable>
            <Pressable>
              <MaterialCommunityIcons name="delete" size={moderateScale(19)} color="#C8C8CB" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
