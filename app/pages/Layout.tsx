import React from "react";
import { View,ScrollView } from "react-native";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <View className="h-screen w-screen  bg-primary">{children}</View>;
};

export default Layout;
