import React from "react";
import { View } from "react-native";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <View className="h-screen w-screen  bg-primary">{children}</View>;
};

export default Layout;
