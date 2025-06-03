import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { tabArray } from "./arrays";
import { TabIconProp } from "../constants";

const TabIcon = ({ focus, icon, name }: TabIconProp) => {
  return (
    <View className=" flex items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        style={{ height: 20 }}
        tintColor={focus ? "#FF8C00" : ""}
      />
      <Text className={`${focus ? "text-grad1" : "text-message"}`}>
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarLabel: "",
        tabBarStyle: {
          backgroundColor: "#161622",
          paddingTop: 6,
          borderTopColor:'#CDCDE0',
          borderTopWidth:1
        },
      }}
    >
      {tabArray.map((tabs, index) => (
        <Tabs.Screen
          name={tabs.name}
          options={{
            headerShown: false,
            tabBarInactiveTintColor: "orange",
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon focus={focused}  icon={tabs.icon} name={tabs.iconName} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
