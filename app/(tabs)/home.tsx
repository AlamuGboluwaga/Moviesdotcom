import { View, Text, Image } from "react-native";
import React from "react";
import homeicon from "../../assets/images/home.png";
const Home = () => {
  return (
    <View className="h-screen w-full flex items-center justify-center">
      {/* <View className="h-8 w-8 p-2 border relative"> */}
        <Image source={homeicon} resizeMode="stretch" height={10} width={10} className="" />
      {/* </View> */}
      <Text className="text-red-500">Home</Text>
    </View>
  );
};

export default Home;
