import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import DeliveryAddressBar from "@/components/DeliveryAddressBar";
import CustomHeader from "@/components/CustomHeader";
import CartBottom from "./components/CartBottom";
import { ProductData } from "@/data/ProductData";
import CartCard from "./components/CartCard";
import CheckoutCard from "./components/CheckoutCard";

const CheckoutScreen = ({ ids }: string[]) => {
  const [isSummaryShow, setIsSummaryShow] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string[]>([]);

  const totalPrice = ProductData
      .reduce(
        // (sum, item) => sum + item.product.price * item.quantity,0 it will use with backend
        (sum, item) => sum + item.price * item.quantity,0 
      );
      console.log(totalPrice)
  return (
    <CustomSafeAreaView>
      <View className="gap-3">
        <CustomHeader title="Checkout" />
        <DeliveryAddressBar />
      </View>
      <FlatList
        data={ProductData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <CheckoutCard
            item={item}
          />
        )}
        contentContainerClassName="gap-7 px-4 mt-5"
        className="flex-1"
      />
      <CartBottom
        totalPrice={totalPrice}
      />
    </CustomSafeAreaView>
  );
};

export default CheckoutScreen;
