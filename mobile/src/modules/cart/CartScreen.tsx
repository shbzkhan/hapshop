import { View, Text, ScrollView } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import CustomHeader from "@/components/CustomHeader";
import DeliveryAddressBar from "@/components/DeliveryAddressBar";

const CartScreen = () => {
  return (
    <CustomSafeAreaView>
      <View className="gap-3">
        <CustomHeader title="Your Cart" />
        <DeliveryAddressBar />
      </View>
      <ScrollView contentContainerClassName="gap-3"></ScrollView>
    </CustomSafeAreaView>
  );
};

export default CartScreen;
