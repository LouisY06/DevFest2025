import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StreaksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🔥 Streak Tracking Coming Soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  text: {
    fontSize: 20,
    color: "#666",
  },
});
