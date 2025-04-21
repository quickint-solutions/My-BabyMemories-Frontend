import { View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, Checkbox, TextInput, Button, Icon } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Login() {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 14,
        paddingTop: 20,
        paddingBottom: 24,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Icon source="keyboard-backspace" size={30} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 4 }}>
          Let’s you in
        </Text>
        <Text style={{ color: "#6B7280" }}>Hey, You have been missed!</Text>
      </View>
      <View style={{ gap: 10 }}>
        <View>
          <TextInput
            label="Email"
            value={email}
            keyboardType="email-address"
            autoComplete="email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <TextInput
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            right={<TextInput.Icon icon="eye" />}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={{ color: "#6B7280", marginLeft: 8 }}>Remember me</Text>
          </View>
          <Button mode="text" onPress={() => {}}>
            Forgot Password?
          </Button>
        </View>
      </View>
      <View>
        <Button
          mode="contained"
          onPress={() => {}}
          style={{ borderRadius: 32 }}
        >
          Sign In
        </Button>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#D1D5DB" }} />
          <Text style={{ marginHorizontal: 12, color: "#9CA3AF" }}>
            or continue with
          </Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "#D1D5DB" }} />
        </View>
      </View>
      <Button
        mode="outlined"
        icon={() => (
          <Image
            source={{ uri: "https://img.icons8.com/color/48/google-logo.png" }}
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        )}
        onPress={() => {}}
        contentStyle={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        style={{ borderRadius: 12 }}
      >
        Google
      </Button>
    </View>
  );
}
