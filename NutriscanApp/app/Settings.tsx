import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Settings: React.FC = () => {
  const router = useRouter(); // ✅ Initialize router

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* ✅ Back Button */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Eating Habits Section */}
      <Text style={styles.sectionMainTitle}>Eating Habits</Text>

      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        {/* ✅ Edit Allergies Button */}
        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => {
            console.log("Navigating to Allergies Page");
            router.push("./allergies");
          }}
        >
          <View>
            <Text style={styles.infoTitle}>Edit Allergies</Text>
            <Text style={styles.infoSubtitle}>Lactose Intolerant</Text>
          </View>
          <Text style={styles.infoValue}>7</Text>
        </TouchableOpacity>

        {/* ✅ My Eating Habits Button */}
        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => {
            console.log("Navigating to Eating Habits Page");
            router.push("./eatinghabits");
          }}
        >
          <View>
            <Text style={styles.infoTitle}>My Eating Habits</Text>
            <Text style={styles.infoSubtitle}>Omnivore</Text>
          </View>
          <Text style={styles.infoValue}>86%</Text>
        </TouchableOpacity>

        {/* Goals Section */}
        <Text style={styles.sectionTitle}>Goals</Text>
        <View style={styles.goalsContainer}>
          <View style={styles.goalBox}>
            <Ionicons name="barbell" size={40} color="#3A8850" />
            <Text style={styles.goalTitle}>More Buff</Text>
            <Text style={styles.goalSubtitle}>Protein Eater</Text>
          </View>

          <View style={styles.goalBox}>
            <Ionicons name="leaf" size={40} color="#3A8850" />
            <Text style={styles.goalTitle}>Vitamin A</Text>
            <Text style={styles.goalSubtitle}>Dairy, eggs</Text>
          </View>

          <View style={styles.goalBox}>
            <Ionicons name="flame" size={40} color="#3A8850" />
            <Text style={styles.goalTitle}>Gain Energy</Text>
            <Text style={styles.goalSubtitle}>Carbohydrates</Text>
          </View>

          {/* Add Goal Button */}
          <TouchableOpacity style={styles.addGoalButton}>
            <Ionicons name="add" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    color: "#333",
  },
  sectionMainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#222",
  },
  content: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#444",
  },
  infoBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  infoSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  infoValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3A8850",
  },
  goalsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  goalBox: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#222",
  },
  goalSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  addGoalButton: {
    backgroundColor: "#4A9780",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    elevation: 3,
  },
});