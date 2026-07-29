import { FlatList, Text } from 'react-native'
import CustomSafeAreaView from '@/components/CustomSafeAreaView'
import SimpleCustomHeader from '@/components/SimpleCustomHeader'
import { OrderCardProps } from '@/modules/orders/types'
import OrderCard from '@/modules/orders/components/OrderCard'

const OrdersData:OrderCardProps[] = [
  {
    image: 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
    productTitle:"Macbook air m5 16gb 526gb ssd",
    deliveryStatus: "Shipped",
    deliveryDate:"12 Nov 2026"
  },
  {
    image: 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
    productTitle:"Macbook air m4 16gb 526gb ssd",
    deliveryStatus: "Shipped",
    deliveryDate:"12 Nov 2026"
  },
  {
    image: 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
    productTitle:"Macbook air m3 16gb 526gb ssd",
    deliveryStatus: "Delivered",
    deliveryDate:"12 Nov 2026"
  },
  {
    image: 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
    productTitle:"Macbook air m2 16gb 526gb ssd with extarnal ssd 1 tb storage",
    deliveryStatus: "Out for delivery",
    deliveryDate:"12 Nov 2026"
  },
]

const Orders = () => {
  return (
    <CustomSafeAreaView isBottomTab={true} className="px-4">
      <FlatList
      contentContainerClassName="gap-7"
       className="flex-1"
      data={OrdersData}
      keyExtractor={(item)=>item.productTitle}
      renderItem={({item})=> <OrderCard item={item}/>}
      ListHeaderComponent={
        <SimpleCustomHeader title='Orders'/> 
      }
      />
    </CustomSafeAreaView>
  )
}

export default Orders