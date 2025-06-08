import { View, Text } from 'react-native'
import { MessageProps } from './constants'

const Message = ({h,w,otherClasses,children}:MessageProps) => {
  return (
    <View className={`${h} ${w} ${otherClasses}`}>
      {children}
    </View>
  )
}

export default Message