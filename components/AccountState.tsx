import { View, Text } from "react-native";
import React from "react";
import { Link, type LinkProps } from "expo-router";

interface AccountStateProps {
  textMessage: string;
  textStatus: string;
  href: LinkProps["href"];
}

const AccountState = ({ textMessage, textStatus, href }: AccountStateProps) => {
  return (
    <View className="w-full flex flex-row justify-center items-center">
      <Text className="text-message">{textMessage}</Text>
      <Link href={href} className="text-accountStatus font-bold ml-1">
        {textStatus}
      </Link>
    </View>
  );
};

export default AccountState;
