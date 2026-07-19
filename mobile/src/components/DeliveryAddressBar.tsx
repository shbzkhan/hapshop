import { View, Text, Pressable } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

const DeliveryAddressBar = () => {
  return (
    <Pressable className="flex-row justify-between items-center py-3 border-y px-4 border-border">
      <Text className="text-black text-sm">Delivery address</Text>
      <View className="flex-row items-center">
        <Text className="text-sm text-black font-medium">
          Navi Mumbai, Maharastra
        </Text>
        <Entypo name="chevron-down" size={18} color="black" />
      </View>
    </Pressable>
  );
};

export default DeliveryAddressBar;
