import { View, Text, Image } from 'react-native'

import {HeaderImageProps} from '../components/constants'

const HeaderImage = ({vh,vw,h,w,others,source}:HeaderImageProps) => {
  return (
    <View className={`h-${vh} w-${vw} ${others} `}>
      <Image source={source} resizeMode='contain'className={`h-${h} w-${w}`} />
    </View>
  )
}

export default HeaderImage
