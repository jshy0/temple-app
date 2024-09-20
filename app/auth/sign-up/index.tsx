import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";

export default function SignIn() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        height: "100%",
        padding: 25,
        backgroundColor: Colors.WHITE,
        paddingTop: 80,
      }}
    >
      <Text
        style={{ position: "absolute", top: 40 }}
        onPress={() => router.navigate("/")}
      >
        BACK
      </Text>
      <Text
        style={{
          fontFamily: "outfitBold",
          fontSize: 30,
        }}
      >
        Sign Up
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          color: Colors.GREY,
          marginTop: 2,
          fontSize: 24,
        }}
      >
        Start your mindfulness journey
      </Text>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} placeholder="Email goes here..." />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={styles.text}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password here..."
        />
      </View>

      {/* CREATE ACCOUNT BUTTON */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
        }}
      >
        <Text
          onPress={() => router.navigate("/auth/sign-up")}
          style={{
            textAlign: "center",
            fontFamily: "outfit",
            color: Colors.CHARCOAL,
            fontSize: 18,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "outfit",
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    fontFamily: "outfit",
    fontSize: 18,
    color: Colors.CHARCOAL,
    borderColor: Colors.GREY,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
});
