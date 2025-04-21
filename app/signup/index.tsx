import { View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, Checkbox, TextInput, Button, Icon } from "react-native-paper";
import { useRouter } from "expo-router";
export default function Signup() {
  const [checked, setChecked] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
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
          Create Account
        </Text>
        <Text style={{ color: "#6B7280" }}>
          Join us! It only takes a minute.
        </Text>
      </View>
      <View style={{ gap: 10 }}>
        <View>
          <TextInput
            label="First Name"
            value={firstname}
            onChangeText={(text) => setFullName(text)}
          />
        </View>
        <View>
          <TextInput
            label="Last Name"
            value={lastname}
            onChangeText={(text) => setFullName(text)}
          />
        </View>
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
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
            right={
              <TextInput.Icon
                icon={passwordVisible ? "eye-off" : "eye"}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{ color: "#6B7280", marginLeft: 8 }}>
            I agree to the Terms & Conditions
          </Text>
        </View>
      </View>
      <View>
        <Button
          mode="contained"
          onPress={() => { }}
          style={{ borderRadius: 32 }}
        >
          Sign Up
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
            have an account <Text style={{ color: "rgb(0, 95, 175)" }} mode="text" onPress={() => router.push("/login")}>
              Log In
            </Text>
          </Text>

          <View style={{ flex: 1, height: 1, backgroundColor: "#D1D5DB" }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <TouchableOpacity
            style={{
              width: 120,
              height: 120,
              borderRadius: 16,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
              shadowRadius: 4,
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/facebook-new.png",
              }}
              style={{ width: 40, height: 40, marginBottom: 8 }}
            />
            <Text style={{ fontWeight: "600", color: "#1a1a1a" }}>
              Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 120,
              height: 120,
              borderRadius: 16,
              justifyContent: "center",
              alignItems: "center",
              shadowRadius: 4,
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/google-logo.png",
              }}
              style={{ width: 40, height: 40, marginBottom: 8 }}
            />
            <Text style={{ fontWeight: "600", color: "#1a1a1a" }}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
<<<<<<< HEAD
=======
      <Button
        mode="outlined"
        icon={() => (
          <Image
            source={{ uri: "https://img.icons8.com/color/48/google-logo.png" }}
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        )}
        onPress={() => { }}
        contentStyle={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        style={{ borderRadius: 12 }}
      >
        Google
      </Button>
      <Button
        mode="outlined"
        icon={() => (
          <Image
            source={{ uri: "https://img.icons8.com/color/48/facebook-new.png" }}
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        )}
        onPress={() => { }}
        contentStyle={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        style={{ borderRadius: 12 }}
      >
        Facebook
      </Button>
>>>>>>> 30039dbae4525ddd43123004f127d81fb31c49ea
    </View>
  );
}
