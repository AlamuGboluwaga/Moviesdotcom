import "../global.css";
import {View} from "react-native";
import React from "react";
import Layout from "@/components/Layout";
import HeaderImage from "@/components/HeaderImage";
// import aroa from "../assets/images/aora.png";
import onboardimage from "../assets/images/onboard.png";

const index = ({}) => {
  return (
    <Layout>
      <View>
      {/* <HeaderImage source={aroa} resizeMode='contain'vh={20} vw='[20rem]'  h={20} w={40}  others="flex items-center"  />    */}
      <HeaderImage source={onboardimage} resizeMode='contain'vh='[30rem]' vw='[28rem]'  h={20} w={40}  others="flex items-center bg-green-700"  />  
      </View>
    </Layout>
  );
};

export default index;
