import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import CustomHeader from "@/components/CustomHeader";
import DeliveryAddressBar from "@/components/DeliveryAddressBar";
import CartCard from "./components/CartCard";
import CartBottom from "./components/CartBottom";
import { ProductData } from "@/data/ProductData";
import { router } from "expo-router";

const CartScreen = () => {
  const [selectedItem, setSelectedItem] = useState<string[]>([])

  const totalPrice = ProductData
    .filter(item => selectedItem.includes(item._id))
    .reduce(
      // (sum, item) => sum + item.product.price * item.quantity,0 it will use with backend
      (sum, item) => sum + item.price * item.quantity,0 
    );

  return (
    <CustomSafeAreaView>
      <View className="gap-3">
        <CustomHeader title="Your Cart" />
        <DeliveryAddressBar />
      </View>
      <FlatList
        data={ProductData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => 
        <CartCard 
        item={item}
        selectedItem = {selectedItem}
        setSelectedItem = {setSelectedItem}
        />
      
      }
        contentContainerClassName="gap-7 px-4 mt-5"
        className="flex-1"
      />
      <CartBottom
      handlePress={()=>router.push({
        pathname:"/cart/checkout",
        params:{
          ids:JSON.stringify(selectedItem)
        }
      })}
      totalPrice = {totalPrice}
       />
    </CustomSafeAreaView>
  );
};

export default CartScreen;
