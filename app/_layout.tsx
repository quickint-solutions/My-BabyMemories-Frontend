import { Stack } from "expo-router";
import { ThemeProvider } from "react-native-paper";
import { useAppTheme } from "../components/theme";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout() {
  const theme = useAppTheme();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </AuthProvider>
  );
}
