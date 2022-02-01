import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import Client from "../../API/Client";
import FormSubmitButton from "./FormSubmitButton";
import { StackActions } from "@react-navigation/native";
import {
  isValidEmail,
  isValidObjField,
  updateError,
} from "../utils/validations";
import ActivityIndicator from "../../GlobalComponents/ActivityIndicator/ActivityIndicator";

const LoginForm = ({ navigation }) => {
  // const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const { email, password } = userInfo;

  const [error, setError] = useState("");

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);

    if (!isValidEmail(email)) return updateError("Invalid email!", setError);

    if (!password.trim() || password.length < 3)
      return updateError("Password is too short!", setError);

    return true;
  };

  const signUp = async (email, password) => {
    setLoading(true);
    const res = await Client.post("login", {
      email: email,
      password: password,
    });
    console.log(res.data);

    try {
      if (res.status) {
        setError("helldo");
        setLoading(false);
        navigation.dispatch(StackActions.replace("HoomeScreen"));
      } else if (res.success === false) {
        console.log("error");
        setLoading(false);
        setError("Invalid email or password");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const submitForm = async () => {
    if (isValidForm()) {
      signUp(email, password);
    }
  };

  if (loading) {
    return <ActivityIndicator visible={true} />;
  }
  return (
    <>
      <FormContainer>
        {error ? (
          <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
            {error}
          </Text>
        ) : null}
        <FormInput
          value={email}
          onChangeText={(value) => handleOnChangeText(value, "email")}
          label="Email"
          placeholder="example@email.com"
          autoCapitalize="none"
        />
        <FormInput
          value={password}
          onChangeText={(value) => handleOnChangeText(value, "password")}
          label="Password"
          placeholder="********"
          autoCapitalize="none"
          secureTextEntry
        />
        <FormSubmitButton onPress={submitForm} title="Login" />
      </FormContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
