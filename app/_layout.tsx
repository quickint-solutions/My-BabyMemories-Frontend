import { Stack } from "expo-router";
import { ThemeProvider } from "react-native-paper";
import { useAppTheme } from "../components/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/AuthContext";

const queryClient = new QueryClient();

export default function RootLayout() {
  const theme = useAppTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
