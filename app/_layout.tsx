import { Stack } from "expo-router";
import { ThemeProvider } from "react-native-paper";
import { useAppTheme } from "../components/theme";

export default function RootLayout() {
  const theme = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
