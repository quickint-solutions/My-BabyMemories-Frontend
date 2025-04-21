import * as React from "react";
import { PaperProvider } from "react-native-paper";
import { useAppTheme } from "@/components/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppNavigator from "./app";

const queryClient = new QueryClient();

export default function Index() {
  const theme = useAppTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </QueryClientProvider>
  );
}
