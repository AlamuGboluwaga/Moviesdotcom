import React from "react";
import { TextInput, View, Text } from "react-native";

interface   InputFiledProps{
    label:string
    placeholder: string;
    h:number
    w:number
} 

const InputFiled = ({label,placeholder,h,w}:InputFiledProps) => {
  return(
    <View className={` h-${h} w-${w} space-y-2  `} >
    <label className={`text-label`}>{label}</label> 
    <TextInput placeholder={placeholder} className={`h-32 p-4 w-full bg-bgInput text-placeholder  border-gray-400 rounded-xl focus:outline-none focus:border focus:border-orange-400   `}/>
  </View>
  )
};

export default InputFiled;
