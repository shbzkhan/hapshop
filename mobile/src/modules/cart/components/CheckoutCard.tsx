import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";


interface ItemProps { _id: string, title: string, image: string, price: number, quantity:number };
interface Props {
  item: ItemProps
}
const CheckoutCard = ({item}:Props) => {

  return (
    <View className="flex-row" style={{gap:moderateScale(7)}}>
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
          <View className="">
            <Text className="text-sm text-gray pr-3">Quantity: {item.quantity}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckoutCard;
