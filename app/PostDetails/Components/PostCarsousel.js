import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import PostCarouselItem from "./PostCarsouselItem";
import { thumbnailObject } from "../../GlobalComponents/Data/thumbailObject";

const { width, heigth } = Dimensions.get("window");
//fuction that gets Thumbnail object from thumbnailObject
const getThumbnailObject = (data) => {
  return data.thumbnail;
};

const PostCarousel = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => "key" + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <PostCarouselItem item={item} />;
        }}
      />
    </View>
  );
};

export default PostCarousel;

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: "40%",
    right: "40%",
  },
});
