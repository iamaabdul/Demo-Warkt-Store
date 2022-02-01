import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import PostCard from "../../GlobalComponents/cards/PostCard";

const TrendingPost = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        style={{ margin: 0, alignContent: "center" }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <PostCard
            containerStyle={styles.postCard}
            styles={styles.PostCard}
            item={item}
            onPress={() => navigation.navigate("PostDetails", { item })}
          />
        )}
      />
    </View>
  );
};

export default TrendingPost;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
