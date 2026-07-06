import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

const ProductHeader = () => {
  return (
    <View className="flex-row items-center justify-between px-4 mt-2">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={moderateScale(24)} color="#393F42" />
      </TouchableOpacity>
      <View>
        <Text className="text-xl font-bold text-black">Details Product</Text>
      </View>
      <TouchableOpacity onPress={() => router.push("/cart")}>
        <Ionicons
          name="cart-outline"
          size={moderateScale(24)}
          color="#393F42"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductHeader;
