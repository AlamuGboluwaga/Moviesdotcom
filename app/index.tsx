import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Onboarding from "./(auth)/onboarding";
import "../global.css";

const index = () => {
  return (
    <SafeAreaView className="h-screen w-screen  bg-primary">
      <ScrollView>
        <Onboarding />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
