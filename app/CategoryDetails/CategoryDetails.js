import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
} from "react-native";
import CategoricalPosts from "./Components/CategoricalPosts";
import Header from "./Components/Header";
import { AllPostData } from "../GlobalComponents/Data/AllPost";

const CategoryDetails = ({ route }) => {
  const { category_name, id, banner } = route.params.item;

  const getImageUrl = (imageName) => {
    return `https://demo.warkt.com/storage/app/public/category/${imageName}`;
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Header category_name={category_name} thumbnail={getImageUrl(banner)} />
      <CategoricalPosts title={category_name} data={AllPostData} />
    </SafeAreaView>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({});
