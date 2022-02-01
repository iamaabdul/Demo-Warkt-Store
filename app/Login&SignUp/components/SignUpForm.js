import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import FormContainer from "./FormContainer";

import { StackActions, useScrollToTop } from "@react-navigation/native";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from "@react-native-picker/picker";
import Client from "../../API/Client";
import { Formik } from "formik";
import * as Yup from "yup";
import ActivityIndicator from "../../GlobalComponents/ActivityIndicator/ActivityIndicator";

//form validation using a library
const validationSchema = Yup.object({
  first_name: Yup.string()
    .trim()
    .min(3, "Invalid name!")
    .required("Name is required!"),
  last_name: Yup.string()
    .trim()
    .min(3, "Invalid name!")
    .required("Name is required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  phone_number: Yup.string()
    .trim()
    .min(10, " phone_number Number is too short!")
    .required(" phone_number Number is required!"),
  password: Yup.string()
    .trim()
    .min(8, "Password is too short!")
    .required("Password is required!"),
  confirmPassword: Yup.string().equals(
    [Yup.ref("password"), null],
    "Password does not match!"
  ),
  address: Yup.string()
    .trim()
    .min(8, "Invalid Address!")
    .required("Address is required!"),
  city: Yup.string()
    .trim()
    .min(3, "Invalid City!")
    .required("City Name is required!"),
});

const SignUpForm = ({ navigation }) => {
  const userInfo = {
    first_name: "",
    address: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    confirmPassword: "",
    city: "",
    country: "pk",
  };

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async (values, formikActions) => {
    setLoading(true);
    const res = await Client.post("register", {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      phone_number: values.phone_number,
      address: values.address,
      city: values.city,
    });
    console.log(res);

    if (res.status === 201) {
      setLoading(false);
      navigation.dispatch(StackActions.replace("HoomeScreen"));
    } else {
      setLoading(false);
      setError(res.data.message);
      useScrollToTop();
    }

    formikActions.setSubmitting(false);
    formikActions.resetForm();
  };

  return (
    <FormContainer>
      <KeyboardAwareScrollView
        extraScrollHeight={8}
        style={{ marginBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={signUp}
        >
          {({
            values,

            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const {
              first_name,
              last_name,
              address,
              email,
              phone_number,
              password,
              confirmPassword,
              city,
              country,
            } = values;

            return (
              <>
                {error ? (
                  <Text
                    style={{ color: "red", fontSize: 18, textAlign: "center" }}
                  >
                    {error}
                  </Text>
                ) : null}
                <ActivityIndicator
                  visible={loading}
                  styling={{ width: "100%" }}
                />
                <FormInput
                  value={first_name}
                  error={touched.first_name && errors.first_name}
                  onChangeText={handleChange("first_name")}
                  onBlur={handleBlur("first_name")}
                  label="First Name"
                  placeholder="John"
                />
                <FormInput
                  value={last_name}
                  error={touched.first_name && errors.last_name}
                  onChangeText={handleChange("last_name")}
                  onBlur={handleBlur("last_name")}
                  label="Last Name"
                  placeholder="Smith"
                />
                <FormInput
                  value={email}
                  error={touched.email && errors.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  autoCapitalize="none"
                  label="Email"
                  keyboardType="email-address"
                  placeholder="example@email.com"
                />

                <FormInput
                  value={phone_number}
                  error={touched.phone_number && errors.phone_number}
                  onChangeText={handleChange("phone_number")}
                  onBlur={handleBlur("phone_number")}
                  autoCapitalize="none"
                  label="Number"
                  keyboardType="numeric"
                  placeholder="+1 (123) 456-7890"
                />
                <FormInput
                  value={password}
                  error={touched.password && errors.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  autoCapitalize="none"
                  secureTextEntry
                  label="Password"
                  placeholder="********"
                />
                <FormInput
                  value={confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  autoCapitalize="none"
                  secureTextEntry
                  label="Confirm Password"
                  placeholder="********"
                />
                <Text style={{ fontWeight: "bold" }}>Country</Text>
                <View style={{ marginHorizontal: 30 }}>
                  <Picker
                    style={{
                      width: "100%",
                      height: 150,
                      justifyContent: "center",
                    }}
                    itemStyle={{ height: 150 }}
                    selectedValue={country}
                    onValueChange={handleChange("country")}
                  >
                    <Picker.Item label="United States Of America" value="us" />
                    <Picker.Item label="Japan" value="01" />
                    <Picker.Item label="Pakistan" value="02" />
                    <Picker.Item label="United Kingdom" value="uk" />
                    <Picker.Item label="Dubia" value="du" />
                    <Picker.Item label="Saudia Arabia" value="sa" />
                    <Picker.Item label="Iran" value="ir" />
                  </Picker>
                </View>
                <FormInput
                  value={address}
                  error={touched.address && errors.address}
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  autoCapitalize="none"
                  label="Address"
                  placeholder="House no. , Block no. , Town, City"
                />
                <FormInput
                  value={city}
                  error={touched.city && errors.city}
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                  autoCapitalize="none"
                  label="City"
                  placeholder="Lahore"
                />
                <FormSubmitButton
                  // submitting={isSubmitting}
                  onPress={handleSubmit}
                  title="Sign up"
                />
              </>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </FormContainer>
  );
};

export default SignUpForm;
