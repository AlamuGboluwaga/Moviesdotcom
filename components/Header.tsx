import { View, Text } from "react-native";
import React from "react";
import { HeaderProps } from "./constants";

const Header = ({ title, h, w, children }: HeaderProps) => {
  return <View className={`h-${h} w-${w}`}>{children}</View>;
};

export default Header;
