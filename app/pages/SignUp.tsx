import React from "react";
import { Text, View, Image } from "react-native";
import Layout from "./Layout";
import Logo from "../../assets/images/logo.png";
const SignUp = () => {
  return (
    <Layout>
      <View className=" overflow-auto h-20 w-60 flex justify-center items-center ">
             <Image
               source={Logo}
               accessibilityLabel="Aora logo"
               style={{ height: 60, width: 120, resizeMode: "contain" }}
             />
           </View>
    </Layout>
  );
};

export default SignUp;
