import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import homeicon from "../../assets/images/home.png";

const TabIcon = ({}) => {
  return (
    <View className="h-6 w-6 ">
      <Image source={homeicon} style={{width:24, height:24}}
      tintColor={'gray'}
      />
    </View>
  );
};


const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
        tabBarIcon: ({ focused, color }) => (
        <TabIcon  /> ),
          // tabBarInactiveTintColor:""  
          }}
        
         
      />
    </Tabs>
  );
};

export default TabLayout;
