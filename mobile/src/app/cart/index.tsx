import CustomHeader from '@/components/CustomHeader';
import CustomSafeAreaView from '@/components/CustomSafeAreaView';
import DeliveryAddressBar from '@/components/DeliveryAddressBar';
import { ProductData } from '@/data/ProductData';
import CartScreen from '@/modules/cart/CartScreen'
import CartBottom from '@/modules/cart/components/CartBottom';
import CartCard from '@/modules/cart/components/CartCard';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

const index = () => {
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
export default index