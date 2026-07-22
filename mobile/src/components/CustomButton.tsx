import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'


interface Props {
  title: string
  handlePress: () => void
  isLoading?: boolean
  classname?: string
  color?: string
  textClassname?: string
  disabled?: boolean
}
const CustomButton = ({ title, handlePress, isLoading, classname, color, textClassname, disabled=false }: Props) => {
  return (
    <TouchableOpacity
    disabled={disabled}
      onPress={handlePress}
      className={`py-3 justify-center items-center rounded-md ${classname} ${color ? color :'bg-primary'} `}
      activeOpacity={0.7}
    >
      {isLoading ?
        <ActivityIndicator
          size={"small"}
          color='white'
        />
        :
        <Text className={`font-rubik-medium  font-medium ${textClassname ? textClassname : 'text-white'}`}>{title}</Text>}
    </TouchableOpacity>
  )
}

export default CustomButton