import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "space-between", padding: 20 }}>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Welcome</Text>
      </View>
      <View style={{ gap: 10 }}>
        <Button mode="contained" onPress={() => router.push("/login")}>
          I have an account
        </Button>
        <Button mode="outlined" onPress={() => router.push("/signup")}>
          Create an account
        </Button>
      </View>
    </View>
  );
}
