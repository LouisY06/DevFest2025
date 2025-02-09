import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function AddEatingHabit() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
      </TouchableOpacity>

      <Text style={styles.header}>Eating Habits</Text>

      {/* Example Added Habit Card (Placeholder) */}
      <View style={styles.habitCard}>
        <View style={styles.habitInfo}>
          <Image source={require("../assets/images/meatnveg.png")} style={styles.habitIcon} />
          <View>
            <Text style={styles.habitName}>Omnivore</Text>
            <Text style={styles.habitDescription}>Everything goes!</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="remove-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Add Eating Habit Button */}
      <TouchableOpacity style={styles.addHabitCard} onPress={() => console.log("Adding Habit")}>
        <Ionicons name="add" size={32} color="#4A4A4A" />
        <Text style={styles.addHabitText}>Add Eating Habit</Text>
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
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4A4A4A",
    marginBottom: 20,
  },
  habitCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  habitInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  habitIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  habitName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  habitDescription: {
    fontSize: 14,
    color: "#777",
  },
  addHabitCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  addHabitText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});