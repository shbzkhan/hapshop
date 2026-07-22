import { Checkbox } from "expo-checkbox";
import { Dispatch, SetStateAction, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
  selectedItem:string[]
  setSelectedItem: Dispatch<SetStateAction<string[]>>
}
const CartCard = ({selectedItem, setSelectedItem}:Props) => {
  // const [isChecked, setIsChecked] = useState(false);
  const [unit, setUnit] = useState(1)

  const handleCheckbox = (id: string) => {
  setSelectedItem((prev) =>
    prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
  );
};
  
  return (
    <View className="flex-row" style={{gap:moderateScale(7)}}>
      <Checkbox
        value={selectedItem.includes('123456')}
        onValueChange={()=>handleCheckbox('123456')}
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
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          resizeMode="cover"
          className="w-full h-full"
        />
      </View>
      {/* text */}
      <View className="justify-between py-1 flex-1">
        <View>
          <Text className="font-bold" numberOfLines={1} style={{fontSize:moderateScale(13)}}>Air pods max by Apple</Text>
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
            <Text className="text-primary" style={{fontSize:moderateScale(10)}}>4.3</Text>
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
            numberOfLines={1}>{`₹999`}</Text>

          </View>
          <View className="flex-row gap-2 items-center">
            <Pressable disabled={unit === 1} onPress={()=>setUnit(unit-1)}>
              <Feather name="minus-circle" size={moderateScale(18)} color={unit === 1 ?"#F0F2F1" : "#C8C8CB"} />
            </Pressable>
            <Text className="text-lg">{unit}</Text>
            <Pressable disabled={unit === 9} onPress={()=>setUnit(unit + 1)}>
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
