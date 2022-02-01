import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const EditButton = ({ OnPress }) => {
  return (
    <TouchableOpacity style={styles.editButton} onPress={OnPress}>
      <Ionicons name="create-outline" size={20} color={"black"} />
      <Text style={styles.logoutText}>Edit</Text>
    </TouchableOpacity>
  );
};

export default EditButton;

const styles = StyleSheet.create({
  editButton: {
    position: "absolute",
    bottom: 5,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
