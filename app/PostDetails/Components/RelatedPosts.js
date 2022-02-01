import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PostCard from "../../GlobalComponents/cards/PostCard";
import { AllPostData } from "../../GlobalComponents/Data/AllPost";

const RelatedPosts = ({ data }) => {
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
            item={item}
            onPress={() => navigation.navigate("PostDetails", { item })}
          />
        )}
      />
    </View>
  );
};

export default RelatedPosts;

const styles = StyleSheet.create({});
