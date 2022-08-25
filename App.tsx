import 'react-native-gesture-handler';

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { HomePage } from "./src/pages/HomePage";
import { Dashboard } from "./src/pages/Dashboard";

import { useFonts } from "expo-font";

import {
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_600SemiBold,
  Barlow_700Bold,
} from "@expo-google-fonts/barlow";

import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";

import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarPage } from "./src/pages/CarPage";

export default function App() {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,

    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    //@ts-ignore
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="CarPage" component={CarPage} />
        </Stack.Navigator>

        <StatusBar style="auto" translucent />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
