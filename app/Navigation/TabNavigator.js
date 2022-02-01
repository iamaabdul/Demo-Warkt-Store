import React from "react";

import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ContactUs from "../ContactUs/ContactUs";
import MainNavigator from "./MainNavigator";
import Profile from "../Profile/Profile";
import Cart from "../Cart/Cart";
import Mission from "../Mission/Mission";
import Home from "../HomeScreen/Home";
import Ionicons from "react-native-vector-icons/Ionicons";

const { height, width } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
          backgroundColor: "white",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-outline" : "home-outline";
          } else if (route.name === "Contact Us") {
            iconName = focused ? "clipboard-sharp" : "clipboard-sharp";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart-outline" : "cart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-sharp" : "person-sharp";
          } else if (route.name === "Mission") {
            iconName = focused ? "code-working-sharp" : "code-working-sharp";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1259FF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Contact Us" component={ContactUs} />
      <Tab.Screen name="Mission" component={Mission} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
