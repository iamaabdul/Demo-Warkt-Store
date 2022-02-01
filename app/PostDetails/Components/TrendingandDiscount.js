import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

const TrendingandDiscount = ({ selling_price, old_price, show_on_home }) => {
  const [Trending, setTrending] = useState(false);
  const [Discount, setDiscount] = useState(null);

  /**
   * !This Code is for calculating Discount
   */

  //Function to handle Discount
  const handleDiscount = () => {
    if (old_price === null) {
      setDiscount(null);
    } else {
      setDiscount(Math.round(((old_price - selling_price) / old_price) * 100));
    }
    return Discount;
  };

  //Function to display Discount
  const DiscountPercentage = () => {
    if (handleDiscount() === null) {
      return null;
    } else {
      return (
        <View style={styles.discountTag}>
          <Text
            style={{
              fontSize: 15,
              paddingLeft: 3,
              paddingVertical: 2,
            }}
          >
            Discount: {handleDiscount()}%
          </Text>
        </View>
      );
    }
  };

  /**
   * !This code is for displaying Trending
   */

  //Function to handle Trending
  const handleTrending = () => {
    if (show_on_home === "1") {
      setTrending(true);
    } else {
      setTrending(false);
    }
    return Trending;
  };

  //Function to handle Discount Tag

  //Function to display Trending
  const TrendingTag = () => {
    if (handleTrending() === false) {
      return null;
    } else {
      return (
        <View style={styles.trendingTag}>
          <Text
            style={{
              fontSize: 15,
              paddingLeft: 3,
              paddingRight: 7,
              paddingVertical: 2,
            }}
          >
            Trending
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <TrendingTag />
      <DiscountPercentage />
    </View>
  );
};

export default TrendingandDiscount;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  trendingTag: {
    backgroundColor: "#FFAE1E",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  discountTag: {
    backgroundColor: "rgba(255,82,71, 0.3)",
    padding: 5,
    borderRadius: 5,
  },
});
