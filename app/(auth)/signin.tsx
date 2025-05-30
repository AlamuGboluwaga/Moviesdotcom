import React from "react";
import { Text, View, Image } from "react-native";
import Logo from "../../assets/images/logo.png";
import Form from "@/components/Form";
import InputFiled from "@/components/InputFiled";
import Button from "@/components/Button";
import AccountState from "@/components/AccountState";
import Layout from "../(tabs)/_layout";

const SignIn = () => {
  const handlePress = () => {};
  return (
    // <Layout>
      <View className="h-[90%] w-full  p-4 space-y-6">
        <View className="h-20 w-60 flex justify-center ">
          <Image
            source={Logo}
            accessibilityLabel="Aora logo"
            style={{ height: 60, width: 120, resizeMode: "contain" }}
          />
        </View>
        {/* <View className="text-white">Sign up</View> */}
        <View>
          <Form title={"Sign In"} h={"20rem"} w={120} textColor="white">
            <View className="w-full  space-y-4  ">
              <InputFiled
                label="Email"
                placeholder="Enter Your Email"
                h={10}
                w={40}
              />
              <InputFiled
                label="Password"
                placeholder="Your email address"
                h={10}
                w={40}
              />
            </View>
            <View className="w-full flex items-end ">
              <Text className="text-message">Forgot Password</Text>
            </View>

            <View className=" bg-green-700">
              <Button
                colors={["#FF8C00", "#FFA300"]}
                start={[0, 0]}
                end={[1, 0]}
                title="Sign In"
                h={14}
                w={40}
                mt={3}
                onPress={handlePress}
              />
            </View>
          </Form>
          <AccountState
            textMessage="Already have an account ?"
            textStatus="Signup"
            href="/(auth)/signup"
          />
        </View>
      </View>
    // </Layout>
  );
};

export default SignIn;
