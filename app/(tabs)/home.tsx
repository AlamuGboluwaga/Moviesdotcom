import { View, Text, Image } from "react-native";
import React from "react";
import homeicon from "../../assets/images/homeicon.png";
import Layout from "../(auth)/_layout";

const Home = () => {
  return (
    <Layout>
      <View className="h-screen w-screen">
        <View className="h-20 w-full border  flex flex-row justify-between">
          <View className="space-y-1">
            <Text className="text-message ">Welcome Back</Text>
            <Text className="text-message text-2xl font-extrabold ">jsmastery</Text>
          </View>
          <Image source={homeicon} resizeMode="contain" style={{ height: 80, width: 60 }} />
        </View>
      </View>
    </Layout>
  );
};

export default Home;
