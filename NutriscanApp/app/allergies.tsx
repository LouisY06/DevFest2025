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

type Allergy = {
  id: string;
  name: string;
  severity: string;
  icon: any;
};

export default function Allergies() {
  const router = useRouter();

  // Sample allergies data
  const [allergies, setAllergies] = useState<Allergy[]>([
    {
      id: "1",
      name: "Peanut Allergy",
      severity: "Deathly allergic",
      icon: require("../assets/images/peanuts.png"),
    },
  ]);

  // Function to remove an allergy
  const removeAllergy = (id: string) => {
    setAllergies(allergies.filter((allergy) => allergy.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
      </TouchableOpacity>

      <Text style={styles.header}>Allergies</Text>

      {/* List of Allergies */}
      <FlatList
        data={allergies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.allergyCard}>
            <View style={styles.allergyInfo}>
              <Image source={item.icon} style={styles.allergyIcon} />
              <View>
                <Text style={styles.allergyName}>{item.name}</Text>
                <Text style={styles.allergySeverity}>{item.severity}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeAllergy(item.id)}>
              <Ionicons name="remove-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Add Allergy Button */}
      <TouchableOpacity style={styles.addAllergyCard}>
        <Ionicons name="add" size={32} color="#4A4A4A" />
        <Text style={styles.addAllergyText}>Add Allergy</Text>
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
  allergyCard: {
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
  allergyInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  allergyIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  allergyName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  allergySeverity: {
    fontSize: 14,
    color: "#777",
  },
  addAllergyCard: {
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
  addAllergyText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});