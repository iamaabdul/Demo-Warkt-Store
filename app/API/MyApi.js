import Client from "./Client";
import axios from "axios";

const AllCategoriesApi = async () => {
  try {
    const response = await Client.get("categories");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("Error while getting all categories.", error.message);
    return [];
  }
};
const AllProductsApi = async () => {
  try {
    const response = await Client.get("products");
    return response.data;
  } catch (error) {
    console.log("Error while getting all products.", error.message);
    return [];
  }
};
const SlidersApi = async () => {
  try {
    const response = await Client.get("sliders");
    return response.data;
  } catch (error) {
    console.log("Error while getting sliders.", error.message);
    return [];
  }
};

export default { AllCategoriesApi, AllProductsApi, SlidersApi };
