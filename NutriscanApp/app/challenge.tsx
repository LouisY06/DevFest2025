import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Challenge() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Challenges</Text>
        <TouchableOpacity>
          <Ionicons name="grid-outline" size={24} color="#4A4A4A" />
        </TouchableOpacity>
      </View>

      {/* Challenge Title */}
      <Text style={styles.challengeTitle}>Challenge of the week</Text>
      <Text style={styles.subText}>Find a friend to go on a weekly streak!</Text>

      {/* Challenge Cards */}
      <View style={styles.challengeContainer}>
        <View style={styles.card}>
          <Image source={require("../assets/images/happy2.png")} style={styles.avatar} />
          <Text style={styles.cardText}>You have completed 80% of your challenges so far.</Text>
          <Text style={styles.completedText}>✅ Completed!</Text>
        </View>

        <Text style={styles.ampersand}>&</Text>

        <View style={styles.card}>
          <Image source={require("../assets/images/happy1.png")} style={styles.avatar} />
          <Text style={styles.cardText}>Louis has completed 80% of his challenges so far.</Text>
          <TouchableOpacity style={styles.nudgeButton}>
            <Text style={styles.nudgeText}>Nudge</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        The more friends you invite to the challenge, the higher tier your badge will be!
      </Text>
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
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  challengeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#222",
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  challengeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    width: "45%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    textAlign: "center",
    color: "#444",
  },
  completedText: {
    marginTop: 10,
    fontSize: 14,
    color: "#3A8850",
    fontWeight: "bold",
  },
  ampersand: {
    fontSize: 24,
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "#222",
  },
  nudgeButton: {
    backgroundColor: "#F4B400",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  nudgeText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});