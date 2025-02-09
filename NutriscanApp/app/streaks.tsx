import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function Streaks() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
      </TouchableOpacity>

      <Text style={styles.header}>My Streaks</Text>

      {/* 📈 Line Chart */}
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr"],
          datasets: [
            {
              data: [20, 30, 70, 90],
              strokeWidth: 3,
            },
          ],
        }}
        width={screenWidth * 0.9}
        height={200}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(58, 136, 79, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(80, 80, 80, ${opacity})`,
          style: { borderRadius: 16 },
        }}
        bezier
        style={{ marginVertical: 20, borderRadius: 16 }}
      />

      {/* Progress & BMI Section */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBox}>
          <Text style={styles.percentageText}>56%</Text>
          <Text style={styles.goalText}>goals completed</Text>
        </View>
        <View style={styles.bmiBox}>
          <Text style={styles.bmiText}>Current BMI</Text>
          <Text style={styles.bmiValue}>20</Text>
          <Text style={styles.bmiEdit}>edit</Text>
        </View>
      </View>

      {/* 🔗 "Your Friends" Button to Friend List */}
      <TouchableOpacity onPress={() => router.push("/friendlist")}>
        <Text style={styles.friendsButton}>Your Friends</Text>
      </TouchableOpacity>

      <View style={styles.friendList}>
        {[
          { name: "Louis", avatar: require("../assets/images/happy1.png"), score: 75, diet: "Vegan" },
          { name: "Leo", avatar: require("../assets/images/happy2.png"), score: 57, diet: "Halal" },
          { name: "David", avatar: require("../assets/images/happy3.png"), score: 91, diet: "Omni" },
        ].map((friend, index) => (
          <View key={index} style={styles.friendCard}>
            <Image source={friend.avatar} style={styles.avatar} />
            <View style={styles.friendInfo}>
              <Text style={styles.friendName}>{friend.name}</Text>
              <Text style={styles.friendDate}>10 Jan 2022</Text>
            </View>
            <Text style={styles.friendScore}>{friend.score}</Text>
            <Text style={styles.friendDiet}>{friend.diet}</Text>
          </View>
        ))}
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
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4A4A4A",
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  progressBox: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  percentageText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3A8850",
  },
  goalText: {
    fontSize: 14,
    color: "#888",
  },
  bmiBox: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#3A8850",
  },
  bmiText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3A8850",
  },
  bmiValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  bmiEdit: {
    fontSize: 12,
    color: "#777",
  },
  friendsButton: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#4A4A4A", // ⚫ Neutral color, not blue
    textAlign: "center",
    textDecorationLine: "underline", // Keeps it visually clickable
  },
  friendList: {
    marginTop: 10,
  },
  friendCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  friendDate: {
    fontSize: 12,
    color: "#777",
  },
  friendScore: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3A8850",
  },
  friendDiet: {
    fontSize: 14,
    color: "#777",
  },
});