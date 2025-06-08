import { View, Text, Image } from "react-native";
import React from "react";
import homeicon from "../../assets/images/homeicon.png";
import dolfin from "../../assets/images/dolfin.png";
import astronot from "../../assets/images/astronot.png";
import train from "../../assets/images/train.png";
import Layout from "../(auth)/_layout";
import InputFiled from "@/components/InputFiled";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Home = () => {
  return (
    <Layout>
      <View className="h-screen w-screen  space-y-6">
        <View className="h-20 w-full p-6 flex flex-row justify-between">
          <View className="space-y-1">
            <Text className="text-message ">Welcome Back</Text>
            <Text className="text-message text-2xl font-extrabold   ">
              jsmastery
            </Text>
          </View>
          <Image
            source={homeicon}
            resizeMode="contain"
            style={{ height: 50, width: 60 }}
          />
        </View>
        <View className="h-12 w-full flex items-center  ">
          <InputFiled
            label=""
            placeholder="Search for a video topic"
            h={10}
            w={80}
          />
          <EvilIcons
            name="search"
            size={24}
            color="#7B7B8B"
            className="absolute top-5 right-12 bg "
          />
        </View>
        <View className="px-4">
          <Text className="text-message">Trending Videos</Text>
        </View>
        <View className="h-80   flex flex-row justify-between items-center">
          <View className="h-[16rem] rounded-lg w-20">
            <Image
              source={train}
              resizeMode="contain"
              style={{ height: 260, width: 100, borderRadius: 20 }}
            />
          </View>
          <View className="h-[19rem] rounded-lg w-[12rem] b">
            <Image
              source={dolfin}
              resizeMode="contain"
              style={{ height: 300, width: 200, borderRadius: 20 }}
            />
          </View>
          <View className="h-[16rem] rounded-lg w-20 ">
            <Image
              source={astronot}
              resizeMode="contain"
              style={{ height: 260, width: 100, borderRadius: 20 }}
            />
          </View>
        </View>
        <View className="h-80 bg-white p-4">
          <View className="h-20 border flex flex-row   ">
            <View className="h-20 w-20 rounded-lg">
              <Image
                source={astronot}
                style={{
                  height: 80,
                  width: 80,
                  borderColor: "orange",
                  borderRadius: 10,
                  borderWidth: 3,
                }}
              />
            </View>
            <View className="bg-blue-700 h-18 w-[17rrem]">
              <Text>Woman walks down a Tokyo...</Text>
              <Text>Brandon Etter</Text>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Home;
