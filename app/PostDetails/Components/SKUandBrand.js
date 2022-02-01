import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SKUandBrand = () => {
  return (
    <View
      style={{
        alignItems: "start",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        // flexDirection: "row",
      }}
    >
      <View style={styles.content}>
        <Text style={styles.heading}>SKU:</Text>
        <Text style={styles.subHeading}>123456789</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Brand:</Text>
        <Image
          source={{
            uri: "https://demo.warkt.com/storage/app/public/brand/brand_logo_60eebb33c4068.png",
          }}
          style={{
            width: 60,
            height: 50,
            marginTop: 0,
            borderRadius: 5,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.subHeading}>Outfitters</Text>
      </View>
    </View>
  );
};

export default SKUandBrand;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
    marginBottom: 5,
    marginRight: 2,
  },
  subHeading: {
    fontSize: 12,
    color: "#000",
    marginTop: 5,
    marginBottom: 5,
  },
});
