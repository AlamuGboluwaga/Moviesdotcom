import React from "react";
import { TextInput, View, Text } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';

interface   InputFiledProps{
    label:string
    placeholder: string;
    h:number
    w:number
} 

const InputFiled = ({label,placeholder,h,w}:InputFiledProps) => {
  return(
    <View className="space-y-2 ">
    <label className={`text-label font-semibold`}>{label}</label> 
    <View className={` h-${h} w-${w}   `} >
      <TextInput placeholder={placeholder} className={`h-32 p-4 w-full bg-bgInput text-placeholder  border-gray-400 rounded-xl focus:outline-none focus:border focus:border-orange-400   `}/>
    {/* <Octicons name="eye" size={24} color="white" className=" flex items-end absolute top-7 right-8" /> */}
    </View>
  </View>
  )
};

export default InputFiled;
