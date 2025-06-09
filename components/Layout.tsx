import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";

interface LayoutProps {
  children: React.ReactNode;
  gap:string
}

const Layout = ({ children,gap }: LayoutProps) => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{height:'100%'}} >
     
      </ScrollView>
      <View className={`h-full w-full justify-center items-center ${gap}`}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Layout;
