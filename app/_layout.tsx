import { Slot } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { theme } from "@/constants/theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.gray} />
      <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}