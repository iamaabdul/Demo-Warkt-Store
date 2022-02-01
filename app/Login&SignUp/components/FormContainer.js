import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

const FormContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
    width: Dimensions.get("window").width,
  },
});
