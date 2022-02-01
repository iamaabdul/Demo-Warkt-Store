import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const FormSubmitButton = ({ title, submitting, onPress }) => {
  const backgroundColor = submitting
    ? "rgba(255, 174, 30, 0.3)"
    : "rgba(255, 174, 30, 1)";

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={{ fontSize: 18, color: "#282828" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FormSubmitButton;
