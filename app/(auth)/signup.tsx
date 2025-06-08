import React from "react";
import { Text, View, Image, Alert } from "react-native";
import Logo from "../../assets/images/aora.png";
import Form from "@/components/Form";
import InputFiled from "@/components/InputFiled";
import Button from "@/components/Button";
import AccountState from "@/components/AccountState";


const SignUp = () => {
  const handlePress=()=>(
    Alert.alert("Alert", "You are already logged in")
  )
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
          <Form title={"Sign Up"} h={"20rem"} w={120} textColor="white">
            <View className="w-full mb-10 space-y-10 ">
              <InputFiled
                label="Username"
                placeholder="Your Unique username"
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
            <View className="h-20">
              <Button
                colors={["#FF8C00", "#FFA300"]}
                start={[0, 0]}
                end={[1, 0]}
                title="Sign Up"
                h={14}
                w={40}
                mt={8}
                onPress={handlePress}
              />
            </View>
          </Form>
          
          <AccountState
          textMessage="Already have an account ?"
          textStatus="Login"
          href='/(auth)/signin'
        />
        </View>
      </View>
    // </Layout>
  );
};

export default SignUp;
