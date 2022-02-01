import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");

const getImageUrl = (imageName) => {
  return "http://app.silkyskyweb.com/storage/app/public/category/" + imageName;
};

const CategoryCard = ({ item, onPress }) => {
  const { category_name, banner } = item;

  const categoryName = JSON.parse(category_name);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: getImageUrl(banner),
        }}
        style={{ width: 148, height: 176, marginTop: 10, borderRadius: 5 }}
      />
      <Text numberOfLines={2} style={styles.text}>
        {categoryName.en}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    width: 160,
    marginHorizontal: 0,
    borderRadius: 10,
    backgroundColor: "#Fff",
    borderColor: "#F0F0F0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 2,

    // shadow

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  text: {
    margin: 5,
    padding: 5,
    color: "#282828",
    fontSize: 16,
    fontWeight: "300",
  },
});
