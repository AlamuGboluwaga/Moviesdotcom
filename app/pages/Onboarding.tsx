import React from "react";
import { View, Text, Image } from "react-native";
import Logo from "../../assets/images/logo.png";
import Onboard from "../../assets/images/onboard.png";
import Button from "@/components/Button";
import { Link } from "expo-router";

const Onboarding = () => {
  return (
    <View className="h-full w-full items-center space-y-4 ">
      <View className=" overflow-auto h-20 w-60 flex justify-center items-center ">
        <Image
          source={Logo}
          accessibilityLabel="Aora logo"
          style={{ height: 60, width: 120, resizeMode: "contain" }}
        />
      </View>
      <View className="h-80 w-80  flex justify-center items-center">
        <Image source={Onboard} accessibilityLabel="Onboarding illustration" />
      </View>
      <View className="w-full h-30 ">
        <Text className="font-bold text-tertiary text-3xl text-center px-4">
          Discover Endless Possibilities with{" "}
          <Text className="text-secondary">Aora</Text>
        </Text>
      </View>
      <View className="w-full h-10 ">
        <Text className=" font-poppins  text-words text- text-center px-4">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>
      </View>
      <Link href='/pages/SignUp' className="h-14  w-full flex  justify-center items-center">
        <Button colors={["#FF8C00", "#FFA300"]} start={[0,0]} end={[1,0]} title={'Continue with Email'} h={14} w={80} />
        </Link>
    </View>
  );
};

export default Onboarding;
