import React from "react";
import { Text, View, Image } from "react-native";
import Layout from "./Layout";
import Logo from "../../assets/images/logo.png";
import Form from "@/components/Form";
import InputFiled from "@/components/InputFiled";
import Button from "@/components/Button";

const SignUp = () => {
  return (
    <Layout>
      <View className="h-[90%] w-full  p-4">
        <View className="h-20 w-60 flex justify-center ">
          <Image
            source={Logo}
            accessibilityLabel="Aora logo"
            style={{ height: 60, width: 120, resizeMode: "contain" }}
          />
        </View>
        <View>
          <Form title={"SignUp"} h={"30rem"} w={120} textColor="white">
            <InputFiled
              label="Username"
              placeholder="Your Unique username"
              h={20}
              w={60}
            />
            <InputFiled
              label="Email"
              placeholder="Your email address"
              h={20}
              w={60}
            />
            <Button colors={["#FF8C00", "#FFA300"]} start={[0,0]} end={[1,0]} title='SignUp' h={14} w={40} />
          </Form>
        </View>
      </View>
    </Layout>
  );
};

export default SignUp;
