import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import homeicon from "../../assets/images/home.png";

interface TabIconProps{
  focus:boolean
}

const TabIcon = ({focus}:TabIconProps) => {
  return (
    <View className="h-6 w-6 ">
      <Image
        source={homeicon}
        style={{ width: 24, height: 24 }}
        tintColor={ focus ?"":'gray'}
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
          tabBarIcon: ({ focused, color }) => <TabIcon  focus={focused}/>,
          // tabBarInactiveTintColor:""
        }}
      />
        <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused, color }) => <TabIcon  focus={focused}/>,
          // tabBarInactiveTintColor:""
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
