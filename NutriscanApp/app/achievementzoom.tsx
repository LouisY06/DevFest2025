import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Achievement() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
      </TouchableOpacity>

      {/* Achievement Title */}
      <Text style={styles.header}>Achievement: Lettuce Begin!</Text>

      {/* Achievement Card */}
      <View style={styles.achievementCard}>
        <Image
          source={require("../assets/images/lettuce.png")}
          style={styles.achievementIcon}
        />
        <Text style={styles.badgeTitle}>Common Badge</Text>
        <Text style={styles.achievementText}>First healthy food scanned!</Text>
        <Text style={styles.funFact}>
          Fun fact: “Lettuce is 95% water, making it one of the most hydrating
          foods!”
        </Text>
      </View>

      {/* Share Button */}
      <TouchableOpacity style={styles.shareButton}>
        <Ionicons name="share-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4A4A4A",
    marginBottom: 20,
  },
  achievementCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 350,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  achievementIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  badgeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  achievementText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  funFact: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  shareButton: {
    marginTop: 30,
  },
});