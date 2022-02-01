import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import EditButton from "./EditButton";

const { height, width } = Dimensions.get("window");

export default function Header({ OnPress, UserName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.usernameText}>{UserName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.2,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  usernameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
