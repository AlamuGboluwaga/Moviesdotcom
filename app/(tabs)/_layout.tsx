import { View, Text,Image} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import homeicon from '../../assets/images/home.png'

const TabIcon =()=>{
  return<>
<View className="h-6 w-6 bg-red-600">
  <Image source={homeicon}
resizeMode="contain"
// tintColor={'gray'}

/>
</View>
  </>
} 

const TabLayout = () => {

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({focused,color,size})=>(
            <TabIcon  />
          ),
          tabBarInactiveTintColor:'gray'
        
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
