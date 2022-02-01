import React from "react";
import { useEffect, useState } from "react";

import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import ActivityIndicator from "../GlobalComponents/ActivityIndicator/ActivityIndicator";
import Carousel from "../GlobalComponents/AnimatedCarousel/Carsousel";
import { dummyCarsouselData } from "../GlobalComponents/Data/CarsouselData";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

import CategoriesNames from "./components/CategoriesName";
import TrendingPost from "./components/TrendingPosts";
import { AllPostData } from "../GlobalComponents/Data/AllPost";

import MyApi from "../API/MyApi";

//Fuction to filter show_on_home_screen data fron json
const filterHomeScreenData = (data, num) => {
  return data.filter((item) => item.show_on_home_screen === num);
};

//function to connect base url with image name
const getImageUrl = (imageName) => {
  return `"https://demo.warkt.com/storage/app/public/category/${imageName}`;
};

const Home = () => {
  const [data, setData] = useState([]);
  const [TrendingProducts, setTrendingProducts] = useState([]);
  const [Slider, setSlider] = useState([]);
  const [loading, setLoading] = useState(false);

  //api call
  const getCategoriesData = async () => {
    setLoading(true);
    const response = await MyApi.AllCategoriesApi();
    //extract data from response
    setData(response);
  };
  const getAllProductData = async () => {
    const ProductsResponse = await MyApi.AllProductsApi();
    //extract data from response
    const filterData = ProductsResponse.filter((x) => x.show_on_home === "1");
    setTrendingProducts(filterData);
    setLoading(false);
  };

  const getSlidersData = async () => {
    setLoading(true);
    const SlidersResponse = await MyApi.SlidersApi();
    setSlider(SlidersResponse);
    setLoading(false);
    console.log(Slider);
  };

  useEffect(() => {
    getCategoriesData();
    getAllProductData();
    getSlidersData();
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#F0F0F0", flex: 1, marginBottom: 50 }}
    >
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00BCD4"
        translucent={true}
      />
      <ActivityIndicator visible={loading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel data={Slider} />
        <View style={styles.Heading}>
          <Text style={styles.HeadingText}>Categories</Text>
          <CategoriesNames data={data} />
        </View>
        <View style={styles.Heading}>
          <Text style={styles.HeadingText}>Trending</Text>
          <Text style={styles.SubHeading}>Trending Products of This Week</Text>
          <TrendingPost data={TrendingProducts} />
        </View>

        <Button
          title="heloo"
          onPress={() => console.log(TrendingProducts)}
          style={{ marginBottom: 500, paddingBottom: 100 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Heading: {
    marginTop: 10,
  },
  HeadingText: {
    fontSize: 28,
    marginLeft: 10,
  },
  SubHeading: {
    marginTop: 0,
    fontSize: 12,
    marginLeft: 12,
    marginBottom: 10,
  },
});
