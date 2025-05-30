import React from "react";
import { Pressable, Text,TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonProps {
  colors: [string, string];
  start: [number, number];
  end: [number, number];
  title:string
  h:number
  w:number
  onPress:()=>(void)
  mt:number
}

const Button = ({ colors, start, end,title,h,w,mt,onPress }: ButtonProps) => {
  return (
    <TouchableOpacity className=" " onPress={onPress}>
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      
      className={ `mt-${mt}  rounded-xl px-4 py-2 h-${h} w-${w} p-4 flex justify-center items-center`}
    >
      
        <Text className="text-primary font-bold">{title}</Text>
     
    </LinearGradient>
     </TouchableOpacity>
  );
};

export default Button;
