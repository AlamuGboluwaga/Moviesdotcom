import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import homeicon from "../../assets/images/home.png";
import Createicon from "../../assets/images/create.png";
import profileicon from "../../assets/images/profile.png";
import Savedicon from "../../assets/images/saved.png";

interface TabIconProps {
  focus: boolean;
  icon: any;
  name: string;
}
const tabArray: { name: string; tabTitle: string; icon: any }[] = [
  { name: "home", tabTitle: "Home", icon: homeicon },
  { name: "create", tabTitle: "Create", icon: Createicon },
  { name: "profile", tabTitle: "Profile", icon: profileicon },
  { name: "saved", tabTitle: "Saved", icon: Savedicon },
];

const TabIcon = ({ focus, icon, name }: TabIconProps) => {
  return (
    <View className="h-6 w-6 flex   items-center ">
      <Image
        source={icon}
        style={{ width: 24, height: 24 }}
        tintColor={focus ? "orange" : ""}
      />
      <Text
        className={`${
          focus ? "text-orange-400 font-bold " : "text-text font-thin"
        }`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopColor: "#232533",
        },
      }}
    >
      {tabArray.map((item, index) => (
        <Tabs.Screen
          key={index}
          name={item.name}
          options={{
            headerShown: false,
            title: item.tabTitle,
            tabBarIcon: ({ focused, color }) => (
              <TabIcon focus={focused} icon={item.icon} name={item.tabTitle} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
