import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const PostCarouselItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.cardView} onPress={() => console.log(item)}>
      <Image style={styles.image} source={{ uri: item.thumbnail }} />
      <View style={styles.textView}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 2,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    height: height / 2,
    borderRadius: 10,
    resizeMode: "contain",
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default PostCarouselItem;
