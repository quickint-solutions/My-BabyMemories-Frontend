import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextInput from "@/components/ui/textinput";
import Button from "@/components/ui/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center px-6">
        <View className="items-center">
          <Image
            source={require("../../assets/images/react-logo.png")}
            className="w-40 h-40"
          />
          <Text className="text-3xl font-bold text-gray-900">Login</Text>
        </View>
        <View className="w-full">
          <CustomTextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />
          <CustomTextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
            onRightIconPress={() => setPasswordVisible(!passwordVisible)}
            rightIcon={passwordVisible ? "👁️" : "🙈"}
          />
        </View>
        <View className="w-full mt-4">
          <Button
            label="Login"
            variant="primary"
            size="lg"
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
