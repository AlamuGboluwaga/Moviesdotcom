import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SafeAreaView>
      <ScrollView className="h-screen w-screen  bg-primary">
        {children}
      </ScrollView>
      ;
    </SafeAreaView>
  );
};

export default Layout;
