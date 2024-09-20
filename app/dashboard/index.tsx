import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const index = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <View
        style={{ width: "100%", height: 150, backgroundColor: Colors.WHITE }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 25,
            marginLeft: 10,
            marginTop: 40,
          }}
        >
          Welcome, Josh
        </Text>

        {/* Streak Box */}
        <View
          style={{
            marginTop: 18,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: "5%",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              textAlign: "center",
              padding: 10,
              backgroundColor: Colors.PRIMARY,
              width: "45%",
              borderRadius: 10,
            }}
          >
            0
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
              textAlign: "center",
              padding: 10,
              backgroundColor: "beige",
              width: "45%",
              borderRadius: 10,
            }}
          >
            0
          </Text>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
