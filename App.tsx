import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { HomePage } from "./src/pages/HomePage";
import { Dashboard } from "./src/pages/Dashboard";

import { useFonts } from "expo-font";

import {
  Barlow_400Regular,
  Barlow_600SemiBold,
  Barlow_700Bold,
} from "@expo-google-fonts/barlow";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_600SemiBold,
    Barlow_700Bold,
  });

  if (!fontsLoaded) {
    //@ts-ignore
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      {/* <HomePage /> */}
      <Dashboard />

      <StatusBar style="auto" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
