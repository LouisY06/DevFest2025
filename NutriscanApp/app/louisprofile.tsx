import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LouisProfile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.headerTitle}>Louis</Text>

      {/* Profile Section */}
      <View style={styles.profileCard}>
        <View style={styles.profileRow}>
          <Image source={require("../assets/images/happy1.png")} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>Louis the 14th</Text>
            <Text style={styles.userDetails}>Vegan lover since 2025</Text>
            <Text style={styles.userDetails}>Omnivore, male</Text>
            <Text style={styles.userDOB}>DOB: 1638/09/05</Text>
          </View>
        </View>

        {/* Nutrition Icons */}
        <View style={styles.nutritionRow}>
          <Image source={require("../assets/images/diamond.png")} style={styles.icon} />
          <Image source={require("../assets/images/scale.png")} style={styles.icon} />
          <Image source={require("../assets/images/chili.png")} style={styles.icon} />
        </View>
      </View>

      {/* Joint Activities Section */}
      <Text style={styles.sectionTitle}>Joint Activities</Text>

      <View style={styles.activitiesCard}>
        <View style={styles.activityRow}>
          <Image source={require("../assets/images/trophy.png")} style={styles.activityIcon} />
          <Text style={styles.activityText}>
            <Text style={styles.boldText}>You and Louis</Text> completed a week-long shared health streak together!{"\n"}
            <Text style={styles.dateText}>September 07, 2024</Text>
          </Text>
        </View>

        <View style={styles.activityRow}>
          <Image source={require("../assets/images/diamond.png")} style={styles.activityIcon} />
          <Text style={styles.activityText}>
            <Text style={styles.boldText}>You and Louis</Text> completed a month-long shared health streak together!{"\n"}
            <Text style={styles.dateText}>April, 2024</Text>
          </Text>
        </View>

        <View style={styles.activityRow}>
          <Image source={require("../assets/images/kale.png")} style={styles.activityIcon} />
          <Text style={styles.activityText}>
            <Text style={styles.boldText}>You and Louis</Text> became friends!{"\n"}
            <Text style={styles.dateText}>January, 2024</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4A4A4A",
  },
  profileCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    marginTop: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  userDetails: {
    fontSize: 14,
    color: "#666",
  },
  userDOB: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 5,
  },
  nutritionRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    color: "#222",
  },
  activitiesCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  activityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  activityIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  activityText: {
    flex: 1,
    fontSize: 14,
    color: "#444",
  },
  boldText: {
    fontWeight: "bold",
    color: "#222",
  },
  dateText: {
    fontSize: 12,
    color: "#777",
  },
});

