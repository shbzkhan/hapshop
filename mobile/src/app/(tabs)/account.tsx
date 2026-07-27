import CustomSafeAreaView from '@/components/CustomSafeAreaView'
import { Text } from 'react-native'

const Account = () => {
  return (
    <CustomSafeAreaView isBottomTab={true}>
      <Text>AccountScreen</Text>
    </CustomSafeAreaView>
  )
}

export default Account