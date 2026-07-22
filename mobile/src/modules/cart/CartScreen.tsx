import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import CustomHeader from "@/components/CustomHeader";
import DeliveryAddressBar from "@/components/DeliveryAddressBar";
import CartCard from "./components/CartCard";
import CartBottom from "./components/CartBottom";

const CartScreen = () => {
  const [isSummaryShow, setIsSummaryShow] = useState(true)
  const [selectedItem, setSelectedItem] = useState<string[]>([])
  return (
    <CustomSafeAreaView>
      <View className="gap-3">
        <CustomHeader title="Your Cart" />
        <DeliveryAddressBar />
      </View>
      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => 
        <CartCard 
        selectedItem = {selectedItem}
        setSelectedItem = {setSelectedItem}
        />
      
      }
        contentContainerClassName="gap-7 px-4 mt-5"
        className="flex-1"
      />
      <CartBottom
      isSummaryShow = {isSummaryShow}
      setIsSummaryShow = {setIsSummaryShow}
      selectedItem = {selectedItem}
      setSelectedItem={setSelectedItem}
       />
    </CustomSafeAreaView>
  );
};

export default CartScreen;
