import { View, Text } from "react-native";
import React from "react";

interface AccountStateProps {
  textMessage: string;
  textStatus: string;
}

const AccountState = ({ textMessage, textStatus }: AccountStateProps) => {
  return (
    <View className="w-full flex justify-cente items-center ">
      <Text className="text-accountState">
        {textMessage}
        <Text className="text-accountStatus font-bold ml-4">{textStatus}</Text>
      </Text>
    </View>
  );
};
export default AccountState;
