import { View, Text } from "react-native";
import { useAuth } from "@/context/AuthContext";
import React from "react";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <View>
      <Text>Welcome, {user?.email}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
