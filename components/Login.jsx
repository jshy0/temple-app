import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require("./../assets/images/temple.jpg")}
        style={{ width: "100%", height: 500 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 40,
            color: Colors.CHARCOAL,
            fontFamily: "outfitBold",
            textAlign: "center",
          }}
        >
          Temple
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            textAlign: "center",
            fontSize: 17,
            color: Colors.GREY,
          }}
        >
          Your Space to Write and Breathe.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("auth/sign-in")}
        >
          <Text
            style={{
              fontFamily: "outfit",
              textAlign: "center",
              color: Colors.CHARCOAL,
              fontSize: 16,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -30,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
  },
  button: {
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    marginTop: "25%",
    borderRadius: 50,
  },
});
