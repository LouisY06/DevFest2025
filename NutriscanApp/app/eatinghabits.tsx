import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

type EatingHabit = {
  id: string;
  name: string;
  description: string;
  icon: any;
};

export default function EatingHabits() {
  const router = useRouter();

  // Sample eating habits data
  const [eatingHabits, setEatingHabits] = useState<EatingHabit[]>([
    {
      id: "1",
      name: "Omnivore",
      description: "Everything goes!",
      icon: require("../assets/images/meatnveg.png"),
    },
  ]);

  // Function to remove an eating habit
  const removeEatingHabit = (id: string) => {
    setEatingHabits(eatingHabits.filter((habit) => habit.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
      </TouchableOpacity>

      <Text style={styles.header}>Eating Habits</Text>

      {/* List of Eating Habits */}
      <FlatList
        data={eatingHabits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.habitCard}>
            <View style={styles.habitInfo}>
              <Image source={item.icon} style={styles.habitIcon} />
              <View>
                <Text style={styles.habitName}>{item.name}</Text>
                <Text style={styles.habitDescription}>{item.description}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeEatingHabit(item.id)}>
              <Ionicons name="remove-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Add Eating Habit Button */}
      <TouchableOpacity style={styles.addHabitCard}>
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
    marginTop: 20,
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