import Card from "@/components/Card"
import CustomSafeAreaView from "@/components/CustomSafeAreaView"
import SimpleCustomHeader from "@/components/SimpleCustomHeader"
import { ProductData } from "@/data/ProductData"
import { FlatList } from "react-native"

const Wishlist = () => {
   return (
    <CustomSafeAreaView isBottomTab={true} className="px-4">
      <FlatList
        data={ProductData}
        renderItem={({ item }) => <Card item ={item} />}
        keyExtractor={item => item._id}
        numColumns={2}
        className='flex-1'
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 gap-5"
        columnWrapperClassName="flex gap-2"

        ListHeaderComponent={
          <SimpleCustomHeader title='My WishList' />
        }
      />
    </CustomSafeAreaView>
  )
}

export default Wishlist