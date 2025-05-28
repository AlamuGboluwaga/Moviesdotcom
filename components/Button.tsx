import React from "react";
import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonProps {
  colors: [string, string];
  start: [number, number];
  end: [number, number];
  title:string
  h:number
  w:number
}

const Button = ({ colors, start, end,title,h,w }: ButtonProps) => {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      
      className={ `mt-8  rounded-xl px-4 py-2 h-${h} w-${w} p-4 flex justify-center items-center`}
    >
      <Pressable className=" ">
        <Text className="text-primary font-bold">{title}</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default Button;
