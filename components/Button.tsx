import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonProps } from "./constants";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({
  h,
  w,
  children,

  otherClasses,
  linearGradientProps,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
    className={`h-20  bg-[#FFA300] rounded-lg  ${h} ${w} ${otherClasses}`}
      {...props}
    >
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={["#FF8C00", "#FFA300"]}
        {...linearGradientProps}
        className=" h-20 w-[27rem] rounded-lg flex justify-center items-center"
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
