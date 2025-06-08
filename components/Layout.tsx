import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{height:'100%'}} >
     
      </ScrollView>
      <View className="h-full w-full justify-center items-center">
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Layout;
