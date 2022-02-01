import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Components/Header";
import Info from "./Components/Info";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from "@react-native-picker/picker";

const Profile = () => {
  const [PhoneNumber, setPhoneNumber] = useState("+923406944269");
  const [FirstName, setFirstName] = useState("Abdul Rehman");
  const [LastName, setLastName] = useState("Ibrahim");
  const [Address, setAddress] = useState("123 j-block, JoharTown");
  const [City, setCity] = useState("Lahore");
  const [Country, setCountry] = useState("uk");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Header UserName="Abdul Rehman" />

        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
          Country
        </Text>
        <View style={{ marginHorizontal: 30 }}>
          <Picker
            style={{
              width: "100%",
              height: 150,
              justifyContent: "center",
            }}
            itemStyle={{ height: 150 }}
            selectedValue={Country}
            onValueChange={(text) => {
              setCountry(text);
            }}
          >
            <Picker.Item label="United States Of America" value="us" />
            <Picker.Item label="Japan" value="jp" />
            <Picker.Item label="Pakistan" value="pk" />
            <Picker.Item label="United Kingdom" value="uk" />
            <Picker.Item label="Dubia" value="du" />
            <Picker.Item label="Saudia Arabia" value="sa" />
            <Picker.Item label="Iran" value="ir" />
          </Picker>
        </View>
        <Info
          FieldName={"First Name"}
          value={FirstName}
          onChangeText={(text) => {
            setFirstName(text);
          }}
        />
        <Info
          FieldName={"Last Name"}
          value={LastName}
          onChangeText={(text) => {
            setLastName(text);
          }}
        />
        <Info
          FieldName={"Phone Number"}
          value={PhoneNumber}
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
        />
        <Info
          FieldName={"Address"}
          value={Address}
          onChangeText={(text) => {
            setAddress(text);
          }}
        />
        <Info
          FieldName={"City"}
          value={City}
          onChangeText={(text) => {
            setCity(text);
          }}
        />

        <Button title={"hello"} onPress={() => console.log(PhoneNumber)} />
        <View style={{ marginBottom: 80 }} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
