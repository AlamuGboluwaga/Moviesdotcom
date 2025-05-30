import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import homeicon from "../../assets/images/home.png";


  
   
   const TabIcon = () => {
     return (
      <View>
      <Image source={homeicon}/>
      </View>
     )
   }
   

   
  

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="hom"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused, color, size }) =>(
            <TabIcon/>
          )

           
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
