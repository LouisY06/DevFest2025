import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

type Achievement = {
  id: string;
  icon: any;
  route?: string; // Optional route for navigation
};

// Sample achievements array (updated with all available images)
const achievements: Achievement[] = [
  { id: "1", icon: require("../assets/images/lettuce.png"), route: "/achievementzoom" }, // ✅ Lettuce navigates to achievementzoom
  { id: "2", icon: require("../assets/images/donut.png") },
  { id: "3", icon: require("../assets/images/meatnveg.png"), route: "/achievementzoom" }, // ✅ Another lettuce instance
  { id: "4", icon: require("../assets/images/berries.png") },
  { id: "5", icon: require("../assets/images/burger.png") },
  { id: "6", icon: require("../assets/images/water.png") },
  { id: "7", icon: require("../assets/images/chili.png") },
  { id: "8", icon: require("../assets/images/chicken.png") },
  { id: "9", icon: require("../assets/images/sushi.png") },
  { id: "10", icon: require("../assets/images/scale.png") },
  { id: "11", icon: require("../assets/images/soda.png") },
  { id: "12", icon: require("../assets/images/fries.png") },
  { id: "13", icon: require("../assets/images/diamond.png") },
  { id: "14", icon: require("../assets/images/trophy.png") },
  { id: "15", icon: require("../assets/images/pineapple.png") },
  { id: "16", icon: require("../assets/images/moon.png") },
];

const AchievementsPage: React.FC = () => {
  const router = useRouter();

  const renderAchievement = ({ item }: { item: Achievement }) => (
    <TouchableOpacity
      style={styles.iconContainer}
      onPress={() => {
        if (item.route) {
          router.push("/achievementzoom"); // ✅ Navigate if route exists
        }
      }}
    >
      <Image source={item.icon} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="trophy" size={28} color="#4A4A4A" style={styles.headerIcon} />
        <Text style={styles.headerTitle}>My Achievements</Text>
      </View>

      {/* Scrollable Grid */}
      <FlatList
        data={achievements}
        keyExtractor={(item) => item.id}
        renderItem={renderAchievement}
        numColumns={4}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

export default AchievementsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 80,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  headerIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  grid: {
    paddingBottom: 20,
    marginTop: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    marginHorizontal: 5,
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});