import React from 'react'
import { Text, View } from 'react-native'

interface FormProps{
 children:React.ReactNode 
 title:string 
 h:string
 w:number
 textColor:string
}

const Form = ({children,title,h,w,textColor}:FormProps) => {
  return (
  <View className={`h-[27rem] w-${w} flex space-y-8`}>
    <Text className={`mb-8 text-left font-bold text-xl text-${textColor}`}>{title}</Text>
    {children}
    </View>
  )
}

export default Form
