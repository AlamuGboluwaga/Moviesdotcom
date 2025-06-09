import Images from "@/components/Images";
import Layout from "@/components/Layout";
import Message from "@/components/Message";
import React from "react";
import { Text } from "react-native";
import aroa from "../assets/images/aora.png";
import curf from "../assets/images/curf.png";
import onboardimage from "../assets/images/onboard.png";
import "../global.css";
import Button from "@/components/Button";



const index = () => {
  return (
    <Layout gap="gap-2">
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
        otherClasses=""
      />
      <Message
        h="h-20"
        w="w-120"
        otherClasses=" relative flex items-center justify-center"
      >
        <Text className="text-message font-extrabold  text-4xl ">
          Discover Endless
        </Text>
        <Text className="text-message font-extrabold  text-4xl ">
          Possibilities with <Text className="text-grad1  ">Aora</Text>
        </Text>
        <Images source={curf}
        resizeMode="contain"
        h="h-30"
        w="w-20"
        otherClasses="absolute  top-14 right-14 "></Images>
      </Message>
      <Message  h="h-24"
        w="w-full"
        otherClasses="flex items-center justify-center ">
        <Text className="text-message ">Where Creativity Meets Innovation: Embark on</Text>
         <Text className="text-message "> a Journey of Limitless Exploration with Aora</Text>
      </Message>
      <Button h='h-16' w='w-100' otherClasses="flex justify-center items-center bg-orange-400 rounded-lg " >
        
    <Text className="text-primary font-semibold text-xl">Continue with Email</Text>
        
      </Button>
    </Layout>
  );
};

export default index;
