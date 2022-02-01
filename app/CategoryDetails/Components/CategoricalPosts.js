import React from "react";
import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import { dummyCategoryPosts } from "../../GlobalComponents/Data/CategoryPost";
import PostCard from "../../GlobalComponents/cards/PostCard";
import Header from "./Header";

import { useNavigation } from "@react-navigation/native";

const CategoricalPosts = ({ data }) => {
  const navigation = useNavigation();
  return (
    <>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <PostCard
            item={item}
            containerStyle={styles.PostContainer}
            onPress={() => navigation.navigate("PostDetails", { item })}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <View style={{ padding: 30 }} />
    </>
  );
};

export default CategoricalPosts;

const styles = StyleSheet.create({
  PostContainer: {
    width: Dimensions.get("window").width / 2 - 20,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
