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
  <View className={`h-[${h}] w-${w} flex justify-center items-cente border border-white space-y-8`}>
    <Text className={`text-left text-${textColor}`}>{title}</Text>
    {children}
    </View>
  )
}

export default Form
