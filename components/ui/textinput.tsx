import React from "react";
import { TextInput, View, Text } from "react-native";

const CustomTextInput = ({
  label,
  error,
  rightIcon,
  onRightIconPress,
  ...props
}: any) => {
  return (
    <View className="mb-4">
      {label && <Text className="mb-1 text-gray-700">{label}</Text>}
      <TextInput
        className={`border rounded p-2 text-base text-gray-700 ${
          error ? "border-red-500" : "border-black"
        }`}
        {...props}
      />
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
