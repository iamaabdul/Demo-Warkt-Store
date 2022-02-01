import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const PostCard = ({ item, onPress, containerStyle }) => {
  const { show_on_home, discount, old_price } = item;

  /**
   *! This function Is going to handle Discount Calculations and Discount tag
   */

  const DiscountPercentage = () => {
    if (item.old_price === null) {
      return null;
    } else {
      return (
        <View style={styles.discountTag}>
          <Text
            style={{
              fontSize: 10,
              paddingLeft: 3,
              paddingRight: 7,
              paddingVertical: 2,
            }}
          >
            Discount{"\n"}
            {Math.round(
              ((item.old_price - item.selling_price) / item.old_price) * 100
            )}
            %
          </Text>
        </View>
      );
    }
  };
  /**
   * ! This Function is going to handle Trending tag
   */

  const HandleTrending = () => {
    if (show_on_home === "1") {
      return (
        <View style={styles.trendingTag}>
          <Text
            style={{
              fontSize: 15,
              paddingRight: 3,
              // paddingVertical: 1,
              paddingLeft: 7,
              fontWeight: "300",
            }}
          >
            Trending
          </Text>
        </View>
      );
    } else {
      return null;
    }
  };

  /**
   *! This function Is going to handle Old Price
   */
  const HandleOldPrice = () => {
    if (old_price != null) {
      return <Text style={styles.oldPrice}>USD{item.old_price}</Text>;
    } else {
      return null;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => onPress(onPress)}
    >
      <Image
        source={{
          uri:
            "http://app.silkyskyweb.com/storage/app/public/products/" +
              item.image ||
            "https://demo.warkt.com/storage/app/public/category/banner_60ed6025379fb.jpg",
        }}
        style={{ width: 148, height: 176, marginTop: 10, borderRadius: 5 }}
      />

      <HandleTrending />
      <DiscountPercentage />

      <Text numberOfLines={2} style={styles.productName}>
        {item.product_name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.productPrice}>USD{item.selling_price}</Text>
        <HandleOldPrice />
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;

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
  productName: {
    fontSize: 15,
    fontWeight: "400",
    marginTop: 2,
  },
  productPrice: {
    fontSize: 13,
    fontWeight: "400",
    marginTop: 2,
    marginBottom: 5,
    color: "#66CF76",
  },
  trendingTag: {
    top: 10,
    right: 0,

    position: "absolute",

    backgroundColor: "#FFAE1E",

    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  discountTag: {
    top: 10,
    left: 0,

    position: "absolute",

    backgroundColor: "rgba(255,82,71, 0.7)",

    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  oldPrice: {
    fontSize: 13,
    fontWeight: "400",
    marginTop: 2,
    marginBottom: 5,
    color: "#9B9B9B",
    textDecorationLine: "line-through",
    marginLeft: 5,
  },
});
