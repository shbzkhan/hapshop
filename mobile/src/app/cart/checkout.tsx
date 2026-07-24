import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import CheckoutScreen from '@/modules/cart/CheckoutScreen';

const checkout = () => {
  const { ids } = useLocalSearchParams();

const selectedIds = JSON.parse(ids as string);
  return <CheckoutScreen ids ={selectedIds}/>
}

export default checkout