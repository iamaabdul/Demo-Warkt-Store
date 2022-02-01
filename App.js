import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  SafeAreaView,
  SafeAreaViewBase,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./app/Navigation/TabNavigator";
import MainNavigator from "./app/Navigation/MainNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
