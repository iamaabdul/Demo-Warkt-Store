import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginAndRegister from "../Login&SignUp/LoginAndSignup";
import Home from "../HomeScreen/Home";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import PostDetails from "../PostDetails/PostDetails";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="LoginAndResgister" component={LoginAndRegister} /> */}
      <Stack.Screen name="HoomeScreen" component={TabNavigator} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
      <Stack.Screen name="PostDetails" component={PostDetails} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return <StackNavigation />;
};

export default MainNavigator;
