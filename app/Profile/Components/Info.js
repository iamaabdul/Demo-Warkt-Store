import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

const Info = (props) => {
  const { FieldName } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.FieldName}>{FieldName}</Text>
      <TextInput {...props} style={styles.TextInput} />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 5,
  },
  FieldName: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
  TextInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingLeft: 10,
  },
});
