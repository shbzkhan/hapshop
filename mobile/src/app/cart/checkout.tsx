import CustomHeader from '@/components/CustomHeader';
import CustomSafeAreaView from '@/components/CustomSafeAreaView';
import DeliveryAddressBar from '@/components/DeliveryAddressBar';
import { ProductData } from '@/data/ProductData';
import CartBottom from '@/modules/cart/components/CartBottom';
import CheckoutCard from '@/modules/cart/components/CheckoutCard';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

const checkout = () => {
  const { ids } = useLocalSearchParams();

const selectedIds = JSON.parse(ids as string);

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
        showsVerticalScrollIndicator={false}
      />
      <CartBottom
        totalPrice={totalPrice}
      />
    </CustomSafeAreaView>
  );
};


export default checkout