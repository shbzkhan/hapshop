import { View, Text, ScrollView } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import CustomHeader from "@/components/CustomHeader";
import DeliveryAddressBar from "@/components/DeliveryAddressBar";
import CartCard from "./components/CartCard";

const CartScreen = () => {
  return (
    <CustomSafeAreaView>
      <View className="gap-3">
        <CustomHeader title="Your Cart" />
        <DeliveryAddressBar />
      </View>
      <ScrollView contentContainerClassName="gap-3 px-4 mt-5">
        <CartCard/>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default CartScreen;
