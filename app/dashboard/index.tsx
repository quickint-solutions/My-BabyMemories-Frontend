import { View, Text } from "react-native";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import { Button } from "react-native-paper";

export default function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <View>
      <Text>Welcome, {user?.email}</Text>
      <Button mode="contained" onPress={logout}>
        Logout
      </Button>
    </View>
  );
}
