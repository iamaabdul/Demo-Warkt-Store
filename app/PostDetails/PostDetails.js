import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PostCarousel from "./Components/PostCarsousel";
import { dummyNames } from "../GlobalComponents/Data/CategoryNames";
import SKUandBrand from "./Components/SKUandBrand";
import TrendingandDiscount from "./Components/TrendingandDiscount";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from "react-native-vector-icons/Ionicons";
import RelatedPosts from "./Components/RelatedPosts";
import { AllPostData } from "../GlobalComponents/Data/AllPost";

const PostDetails = ({ route }) => {
  const {
    product_name,
    id,
    thumbnail,
    selling_price,
    old_price,
    discount,
    show_on_home,
  } = route.params.item;
  const [Qty, setQty] = useState(1);
  const [subTotal, setSubTotal] = useState(selling_price);

  /**
   * !This Code is for calculating subTotal by Qty
   */

  //Function that calculates SubTotal by multiplying Qty and selling_price
  const CalculateSubTotal = () => {
    setSubTotal(Qty * selling_price);
    return subTotal;
  };

  //Function to Increase Qty by 1
  const IncreaseQty = () => {
    setQty(Qty + 1);
    CalculateSubTotal();
  };
  //Function to Decrease Qty by 1
  const DecreaseQty = () => {
    if (Qty > 1) {
      setQty(Qty - 1);
    }
  };

  /**
   * !This Code is for handling Old Price View
   */
  const HandleOldPrice = () => {
    if (old_price != null) {
      return <Text style={styles.oldPrice}>USD {old_price}</Text>;
    } else {
      return null;
    }
  };

  return (
    <ScrollView style={{ alignContent: "center" }}>
      <PostCarousel data={dummyNames} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.Name}>{product_name}</Text>
        <TrendingandDiscount
          old_price={old_price}
          selling_price={selling_price}
          discount={discount}
          show_on_home={show_on_home}
        />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTag}>Price:</Text>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.price}>USD {selling_price}</Text>
          <HandleOldPrice />
        </View>
      </View>
      <SKUandBrand />
      <View style={styles.priceContainer}>
        <Text style={styles.priceTag}>SubTotal:</Text>
        <Text style={styles.subTotalPrice}>USD {<CalculateSubTotal />}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View style={styles.qtyControllerContainer}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => DecreaseQty()}
          >
            <Text style={styles.buttons}>-</Text>
          </TouchableOpacity>
          <View style={styles.qty}>
            <Text>{Qty}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              IncreaseQty();
            }}
          >
            <Text style={styles.buttons}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttons}>
          <Ionicons name="ios-add-circle-outline" size={30} color="white" />
          <Text style={styles.buttons}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.relatedPosts}>
        <Text>Realated Posts</Text>
        <RelatedPosts data={AllPostData} />
      </View>
    </ScrollView>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  Name: {
    width: "50%",
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
    marginBottom: 5,
    marginRight: 2,
    marginLeft: 20,
  },
  qtyControllerContainer: {
    flexDirection: "row",
    marginLeft: 20,
  },
  qty: {
    width: 50,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },

  buttons: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginHorizontal: 5,

    borderRadius: 10,
    fontSize: 20,
    backgroundColor: "#282828",
    color: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",

    marginBottom: 10,
    marginLeft: 20,
  },
  priceTag: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  price: {
    marginLeft: 3,
    fontSize: 20,
    color: "red",
  },
  subTotalPrice: {
    marginLeft: 3,
    fontSize: 20,

    color: "#66CF76",
  },
  oldPrice: {
    marginLeft: 3,
    fontSize: 15,
    color: "grey",
    textDecorationLine: "line-through",
  },
  relatedPosts: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});
