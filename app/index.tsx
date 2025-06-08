import Images from "@/components/Images";
import Layout from "@/components/Layout";
import Message from "@/components/Message";
import React from "react";
import { Text } from "react-native";
import aroa from "../assets/images/aora.png";
import curf from "../assets/images/curf.png";
import onboardimage from "../assets/images/onboard.png";
import "../global.css";

const index = ({}) => {
  return (
    <Layout>
      <Images
        source={aroa}
        resizeMode="contain"
        h="h-16"
        w="w-100"
        otherClasses=""
      />
      <Images
        source={onboardimage}
        resizeMode="contain"
        h="h-120"
        w="w-full"
        otherClasses="bg-green-700"
      />
      <Message
        h="h-20"
        w="w-120"
        otherClasses="flex items-center justify-center"
      >
        <Text className="text-message font-extrabold  text-4xl ">
          Discover Endless
        </Text>
        <Text className="text-message font-extrabold  text-4xl ">
          Possibilities with <Text className="text-grad1">Aora</Text>
        </Text>
        <Images source={curf}
        resizeMode="contain"
        h="h-12"
        w="w-20"
        otherClasses="absolue bg-green-700" />
      </Message>
    </Layout>
  );
};

export default index;
