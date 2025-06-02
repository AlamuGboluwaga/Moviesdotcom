import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import homeicon from "../../assets/images/home.png";
import Createicon from "../../assets/images/create.png";
import profileicon from "../../assets/images/profile.png";
import Savedicon from "../../assets/images/saved.png";

interface TabIconProps {
  focus: boolean;
  icon: any;
}
const tabArray: { name: string; tabTitle: string; icon: any }[] = [
  { name: "home", tabTitle: "Home", icon: homeicon },
  { name: "create", tabTitle: "Create", icon: Createicon },
  { name: "profile", tabTitle: "Profile", icon: profileicon },
  { name: "saved", tabTitle: "Saved", icon: Savedicon },
];

const TabIcon = ({ focus, icon }: TabIconProps) => {
  return (
    <View className="h-6 w-6 ">
      <Image
        source={icon}
        style={{ width: 24, height: 24 }}
        tintColor={focus ? "" : "gray"}
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs>
      {tabArray.map((item, index) => (
        <Tabs.Screen
          key={index}
          name={item.name}
          options={{
            headerShown: false,
            title: item.tabTitle,
            tabBarIcon: ({ focused, color }) => (
              <TabIcon focus={focused} icon={item.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
