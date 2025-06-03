import Button from "@/components/Button";
import { Link } from "expo-router";
import React from "react";
import {StatusBar, Text, View,Platform } from "react-native";
import curf from "../../assets/images/curf.png";
import Logo from "../../assets/images/logo.png";
import Onboard from "../../assets/images/onboard.png";
import { Image } from 'expo-image';


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
      <View className="h-80 w-[25rem]  flex justify-center items-center">
        <Image source={Onboard} contentFit="contain" className="h-full w-full" />
      </View>
      <View className="w-full h-30 ">
        <Text className="font-bold text-tertiary text-3xl text-center px-4">
          Discover Endless Possibilities with{" "}
          <Text className="text-secondary">Aora</Text>
        </Text>
        <Image source={curf} alt="curf.png" contentFit="contain"  className="h-4 w-[4.2rem] absolute right-10 top-16" />
      </View>
      <View className="w-full h-10 ">
        <Text className=" font-poppins  text-words text-message text-center px-4">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>
      </View>
      <Link
        href="/home"
        className="h-14  w-full flex  justify-center items-center"
      >
        <Button
          colors={["#FF8C00", "#FFA300"]}
          start={[0, 0]}
          end={[1, 0]}
          title={"Continue with Email"}
          h={14}
          w={80}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
          mt={0}
        />
      </Link>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="black"
        translucent={false}
      />
      {Platform.OS === 'ios' && (
        <View style={{ height: 44, backgroundColor: 'black' }} />
      )}
    </View>
  );
};

export default Onboarding;
