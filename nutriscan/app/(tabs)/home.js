import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to NutriScan</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("./scan")}>
        <Text style={styles.buttonText}>Start Scanning</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
  },
});
