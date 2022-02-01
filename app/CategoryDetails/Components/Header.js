import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Header = ({ category_name, thumbnail }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: thumbnail,
        }}
        style={{
          width: "100%",
          height: 180,
          borderRadius: 5,
          borderRadius: 10,
        }}
      />
      <View style={styles.overlayContainer} />
      <Text style={styles.text}>{category_name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "93%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,

    borderRadius: 10,

    //add shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //end shadow
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    alignContent: "center",
    justifyContent: "center",
    color: "#fff",
    position: "absolute",
  },
  overlayContainer: {
    borderRadius: 10,

    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
