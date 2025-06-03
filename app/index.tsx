import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Onboarding from "./(auth)/onboarding";
import "../global.css";

const index = () => {
  return (
    <SafeAreaView className="h-full w-full  bg-primary">
      <ScrollView style={{height:'100%'}}>
        <Onboarding />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
