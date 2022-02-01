import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import CategoryCard from "../../GlobalComponents/cards/CategoryCard";
import { useNavigation } from "@react-navigation/native";

const CategoriesNames = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        style={{ margin: 0, alignContent: "center" }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            onPress={() => navigation.navigate("CategoryDetails", { item })}
          />
        )}
      />
    </View>
  );
};

export default CategoriesNames;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
